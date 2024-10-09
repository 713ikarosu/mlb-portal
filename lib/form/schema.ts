import { z } from "zod";

export const wordSchema = z.object({
  word: z.string(),
  description: z.string(),
});
