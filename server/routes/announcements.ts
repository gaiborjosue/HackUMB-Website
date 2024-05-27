import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from '@hono/zod-validator'
import { getUser, getStaff } from "../kinde";

import { db } from "../db"
import { announcements as announcementTable } from "../db/schema/announcements"
import { eq, desc, and } from "drizzle-orm";

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


    const result = await db.insert(announcementTable).values({
      ...announcement,
      userId: user.id,
    }).returning()
    .then((res) => res[0])

    c.status(201)
    return c.json(result);
  })
  
  .delete("/:id{[0-9]+}", getStaff, async (c) => {
    const id = Number.parseInt(c.req.param('id'))
    const user = c.var.user

    const announcement = await db.delete(announcementTable).where(eq(announcementTable.id, id)).returning().then(res => res[0])

    if (!announcement) {
      return c.notFound()
    }

    return c.json({ announcement: announcement })
  })
