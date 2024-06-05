import { Request, Response } from "express";
import prisma from "../lib/db/prisma";

export const getPosts = async (req: Request, res: Response) => {
  try {
    const data = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    res.send(data).status(200);
  } catch (error) {
    res.send({ error }).status(500);
  }
};

export const getPost = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const data = await prisma.post.findUnique({
      where: {
        id: id,
      },
      include: {
        comments: true,
      },
    });
    res.send(data).status(200);
  } catch (error) {
    res.send({ error }).status(500);
  }
};
