import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from '@hono/zod-validator'

import { db } from "../db"
import { registrations as registrationTable } from "../db/schema/registrations"
import { eq, desc } from "drizzle-orm";
import { which } from "bun";

export const badgeCheckinRoute = new Hono()
  .post("/", async (c) => {
    const formData = await c.req.formData();
    const secret = formData.get("secret");
    const userId = formData.get("userId");

    console.log(formData, secret, userId)

    const realSecret = process.env.BADGE_CHECKIN_SECRET;

    if (!secret || realSecret !== secret) {
      return c.json({ error: "Unauthorized" }, 401);
    }

    if (!userId) {
      return c.json({ error: "Missing form parameter: userId" }, 400);
    }

    const user = await db
      .select()
      .from(registrationTable)
      .where(eq(registrationTable.userId, userId))
      .limit(1);

    if (!user.length) {
      return c.json({ error: "User not found" }, 404);
    }

    const result = await db.update(registrationTable).set({ checkedin: true }).where(eq(registrationTable.userId, userId)).returning()

    if (!result) {
      return c.json({ error: "Failed to update user" }, 500);
    }

    console.log(`user ${userId} is checked in via badge checkin!`)

    // Respond with a success message
    return c.json({ message: "Badge check-in successful" }, 200);
  });
