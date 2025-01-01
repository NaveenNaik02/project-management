import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ITask, createTaskSchema } from "../interfaces";

const prisma = new PrismaClient();

const createTask = async (req: Request, res: Response) => {
  try {
    const taskData: ITask = createTaskSchema.parse(req.body);
    const { startDate, dueDate } = taskData;
    const formattedStartDate = startDate
      ? new Date(startDate).toISOString()
      : null;
    const formattedDueDate = dueDate ? new Date(dueDate).toISOString() : null;
    const task = await prisma.task.create({
      data: {
        ...taskData,
        startDate: formattedStartDate,
        dueDate: formattedDueDate,
      },
    });
    res.status(StatusCodes.CREATED).json(task);
  } catch (error: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: `Error while creating task: ${error.message}`,
    });
  }
};

const getTasks = async (req: Request, res: Response) => {
  const { projectId } = req.query;
  try {
    const tasks = await prisma.task.findMany({
      where: {
        projectId: Number(projectId),
      },
      include: {
        author: true,
        assignee: true,
        comments: true,
        attachments: true,
      },
    });
    res.status(200).json(tasks);
  } catch (error: any) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: `Error while trying to fetch task: ${error.message}` });
  }
};

const updateTaskStatus = async (req: Request, res: Response) => {
  const { taskId } = req.params;
  const { status } = req.body;
  try {
    const task = await prisma.task.update({
      where: {
        id: Number(taskId),
      },
      data: {
        status,
      },
    });
    res.status(StatusCodes.OK).json(task);
  } catch (error: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: `Error while updating the task: ${error.message}`,
    });
  }
};

const getUserTasks = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const tasks = await prisma.task.findMany({
      where: {
        OR: [
          { authorUserId: Number(userId) },
          { assignedUserId: Number(userId) },
        ],
      },
      include: {
        author: true,
        assignee: true,
      },
    });
    res.status(StatusCodes.OK).json(tasks);
  } catch (error: any) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: `Error while fetching the tasks: ${error.message}` });
  }
};

export { createTask, getTasks, updateTaskStatus, getUserTasks };
