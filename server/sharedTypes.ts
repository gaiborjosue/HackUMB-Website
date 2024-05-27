import { insertAnnouncementSchema } from "./db/schema/announcements";
import { z } from "zod";

export const createAnnouncement = insertAnnouncementSchema.omit({ userId:true, createdAt: true, id: true })

export type CreateAnnouncement = z.infer<typeof createAnnouncement>;