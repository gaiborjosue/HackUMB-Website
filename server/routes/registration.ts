import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from '@hono/zod-validator'
import { getUser } from "../kinde";

import { db } from "../db"
import { registrations as registrationTable } from "../db/schema/registrations"
import { eq, desc } from "drizzle-orm";

const registrationSchema = z.object({
  track: z.enum(["Undergrad", "Grad"]),
  semester: z.string().min(1),
  team: z.enum(["team", "no-team"])
})

type Registration = z.infer<typeof registrationSchema>

const createPostSchema = registrationSchema.omit({ id: true });

export const registrationRoute = new Hono()
  .post("/", getUser, zValidator("json", registrationSchema), async (c) => {
    const registration = await c.req.valid("json")
    const user = c.var.user

    const result = await db.insert(registrationTable).values({
      ...registration,
      userId: user.id,
      checkedin: false
    }).returning()

    c.status(201)
    return c.json(result);
  })
  .get("/completed", getUser, async (c) => {
    const user = c.var.user

    const result = await db.select().from(registrationTable).where(eq(registrationTable.userId, user.id)).orderBy(desc(registrationTable.createdAt)).limit(1)

    return c.json({ registration: result });
  })
