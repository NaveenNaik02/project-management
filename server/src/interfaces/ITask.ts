import { z } from "zod";

export const createTaskSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  status: z.string().optional(),
  priority: z.string().optional(),
  tags: z.string().optional(),
  startDate: z.string().optional(),
  dueDate: z.string().optional(),
  points: z.number().optional(),
  projectId: z.number(),
  authorUserId: z.number(),
  assignedUserId: z.number().optional(),
});

export type ITask = z.infer<typeof createTaskSchema>;
