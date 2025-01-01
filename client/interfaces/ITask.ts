import { z } from "zod";

export enum Tab {
  Board = "Board",
  List = "List",
  Timeline = "Timeline",
  Table = "Table",
}

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
  authorUserId: z.number().optional(),
  assignedUserId: z.number().optional(),
});

export type ITask = z.infer<typeof createTaskSchema>;

export interface ITaskInitialState {
  success: boolean;
  data?: ITask;
  error?: {
    title: string;
    projectId: string;
  };
}
