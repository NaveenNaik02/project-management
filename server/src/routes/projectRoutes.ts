import { Router } from "express";
import { createProject, getProjects } from "../controllers";

export const projectRouter = Router();

projectRouter.post("/", createProject);
projectRouter.get("/", getProjects);
