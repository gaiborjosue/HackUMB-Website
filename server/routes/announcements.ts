import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from '@hono/zod-validator'
import { getUser, getStaff } from "../kinde";

import { db } from "../db"
import { announcements as announcementTable } from "../db/schema/announcements"
import { eq, desc, and } from "drizzle-orm";

import { EmbedBuilder, WebhookClient } from 'discord.js'

const announcementSchema = z.object({
  title: z.string().min(3).max(100),
  description: z.string(),
  id: z.number().int().positive().min(1)
})

type Announcement = z.infer<typeof announcementSchema>

const createPostSchema = announcementSchema.omit({ id: true })

export const announcementsRoute = new Hono()
  .get("/", getUser, async (c) => {

    const announcements = await db.select().from(announcementTable).orderBy(desc(announcementTable.createdAt)).limit(100)

    return c.json({ announcements: announcements});
  })
  .post("/", getStaff, zValidator("json", createPostSchema), async (c) => {
    const announcement = await c.req.valid("json")
    const user = c.var.user

    // Post to discord webhook
    const webhook = new WebhookClient({
      url: process.env.DISCORD_WEBHOOK_URL!,
    });

    const embed = new EmbedBuilder()
      .setTitle(announcement.title)
      .setDescription(announcement.description)
      .setColor(0x4B82FF)
      .setTimestamp();

    const webhook_message = await webhook.send({
      content: `New announcement from ${user.given_name} 📢 - View all announcements at https://hackathon-website.fly.dev/announcements`,
      avatarURL: user.picture!,
      embeds: [embed],
    });

    const result = await db.insert(announcementTable).values({
      ...announcement,
      userId: webhook_message.id,
    }).returning()
    .then((res) => res[0])

    c.status(201)
    return c.json(result);
  })
  
  .delete("/:id{[0-9]+}", getStaff, async (c) => {
    const id = Number.parseInt(c.req.param('id'))

    const announcement = await db.delete(announcementTable).where(eq(announcementTable.id, id)).returning().then(res => res[0])

    if (!announcement) {
      return c.notFound()
    }

    try {
      const webhook = new WebhookClient({
        url: process.env.DISCORD_WEBHOOK_URL!,
      });

      await webhook.deleteMessage(announcement.userId)
    } catch (e) {
      console.error("Failed to delete from discord")
    }

    return c.json({ announcement: announcement })
  })