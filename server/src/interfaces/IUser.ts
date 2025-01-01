import { z } from "zod";

export const userSchema = z.object({
  cognitoId: z.string(),
  username: z.string(),
  profilePictureUrl: z.string().optional(),
  teamId: z.number().optional(),
});

export type IUser = z.infer<typeof userSchema>;
