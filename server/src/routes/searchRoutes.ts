import { Router } from "express";
import { search } from "../controllers";

export const searchRouter = Router();
searchRouter.get("/", search);
