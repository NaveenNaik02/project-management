import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { PrismaClient } from "@prisma/client";
import { createProjectSchema, IProject } from "../interfaces";

const prisma = new PrismaClient();

const createProject = async (req: Request, res: Response) => {
  try {
    const projectData: IProject = createProjectSchema.parse(req.body);
    console.log(projectData);
    const formattedStartDate = projectData.startDate
      ? new Date(projectData.startDate).toISOString()
      : null;
    const formattedEndDate = projectData.endDate
      ? new Date(projectData.endDate).toISOString()
      : null;
    const project = await prisma.project.create({
      data: {
        ...projectData,
        startDate: formattedStartDate,
        endDate: formattedEndDate,
      },
    });
    res.status(StatusCodes.CREATED).json(project);
  } catch (error: any) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: `Error while creating project: ${error.message}` });
  }
};

const getProjects = async (req: Request, res: Response) => {
  try {
    const projects = await prisma.project.findMany();
    res.status(StatusCodes.OK).json(projects);
  } catch (error: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: `Error while fetching projects: ${error.message}`,
    });
  }
};

export { createProject, getProjects };
