import { z } from "zod";

export const createProjectSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
});

export type IProject = z.infer<typeof createProjectSchema>;
