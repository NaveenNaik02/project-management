import { z } from "zod";

export interface IInitialState {
  success: boolean;
  data?: INewProject;
  error?: {
    ProjectName: string;
    StartDate: string;
    EndDate: string;
  };
}

export type INewProject = z.infer<typeof newProjectSchema>;

export const newProjectSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Project name must be at least 3 characters long" }),
  description: z.string().optional(),
  startDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Start date must be a valid date",
  }),
  endDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "End date must be a valid date",
  }),
});
