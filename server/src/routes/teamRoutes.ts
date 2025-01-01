import { Router } from "express";
import { getTeams } from "../controllers";

export const teamRouter = Router();
teamRouter.get("/", getTeams);
