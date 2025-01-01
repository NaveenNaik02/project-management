import { Router } from "express";
import { getUser, getUsers, postUser } from "../controllers";

export const userRouter = Router();
userRouter.post("/", postUser);
userRouter.get("/:cognitoId", getUser);
userRouter.get("/", getUsers);
