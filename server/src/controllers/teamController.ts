import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const prisma = new PrismaClient();

const getTeams = async (req: Request, res: Response) => {
  try {
    const teams = await prisma.team.findMany();
    const teamsWithUsernames = await Promise.all(
      teams.map(async (team) => {
        let productOwner;
        let projectManager;
        if (team.productOwnerUserId) {
          productOwner = await prisma.user.findUnique({
            where: {
              userId: team.productOwnerUserId,
            },
          });
        }
        if (team.projectManagerUserId) {
          projectManager = await prisma.user.findUnique({
            where: {
              userId: team.projectManagerUserId,
            },
          });
        }
        return {
          ...team,
          productOwnerName: productOwner?.username || null,
          projectManagerName: projectManager?.username || null,
        };
      })
    );
    res.status(StatusCodes.OK).json(teamsWithUsernames);
  } catch (error: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: `Error while fetching teams info: ${error.message}`,
    });
  }
};

export { getTeams };
