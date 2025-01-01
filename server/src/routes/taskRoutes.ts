import { Router } from "express";
import {
  createTask,
  getTasks,
  updateTaskStatus,
  getUserTasks,
} from "../controllers";

export const taskRouter = Router();

taskRouter.post("/", createTask);
taskRouter.get("/", getTasks);
taskRouter.patch("/:taskId/status", updateTaskStatus);
taskRouter.get("/user/:userId", getUserTasks);
