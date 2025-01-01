import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { IUser, userSchema } from "../interfaces";

const prisma = new PrismaClient();

const postUser = async (req: Request, res: Response) => {
  try {
    const {
      username,
      cognitoId,
      profilePictureUrl = "i1.jpeg",
      teamId,
    }: IUser = userSchema.parse(req.body);
    const newUser = await prisma.user.create({
      data: {
        username,
        cognitoId,
        profilePictureUrl,
        teamId,
      },
    });
    res.status(StatusCodes.CREATED).json(newUser);
  } catch (error: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: `Error while creating user: ${error.message}`,
    });
  }
};

const getUser = async (req: Request, res: Response) => {
  const { cognitoId } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: {
        cognitoId,
      },
    });
    res.status(StatusCodes.OK).json(user);
  } catch (error: any) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: `Error while fetching user info: ${error.message}` });
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.status(StatusCodes.OK).json(users);
  } catch (error: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: `Error while fetching the users: ${error.message}`,
    });
  }
};
export { postUser, getUser, getUsers };
