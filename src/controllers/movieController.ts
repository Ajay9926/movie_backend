import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const addMovie = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    if (!userId)
      return res.status(401).json({ message: "Unauthorized: userId missing" });

    const { title, type, director, budget, location, duration, year } = req.body;

    if (!title || !type || !director || !budget || !location || !duration || !year) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const movie = await prisma.movie.create({
      data: { title, type, director, budget, location, duration, year, userId },
    });

    res.status(201).json({ message: "Movie added successfully", movie });
  } catch (error: any) {
    res.status(500).json({ message: "Failed to add movie", error: error.message });
  }
};

export const getMovies = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    const search = (req.query.search as string) || "";

    const where: any = { userId };
    if (search) {
      where.OR = [
        { title: { contains: search } },
        { type: { contains: search } },
        { director: { contains: search } },
      ];
    }

    const movies = await prisma.movie.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    res.status(200).json(movies);
  } catch (error: any) {
    res.status(500).json({ message: "Failed to fetch movies", error: error.message });
  }
};

export const updateMovie = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    const { id } = req.params;
    const { title, type, director, budget, location, duration, year } = req.body;

    const movie = await prisma.movie.findUnique({ where: { id: Number(id) } });
    if (!movie) return res.status(404).json({ message: "Movie not found" });
    if (movie.userId !== userId)
      return res.status(403).json({ message: "Unauthorized" });

    const updatedMovie = await prisma.movie.update({
      where: { id: Number(id) },
      data: { title, type, director, budget, location, duration, year },
    });

    res.status(200).json({ message: "Movie updated successfully", updatedMovie });
  } catch (error: any) {
    res.status(500).json({ message: "Failed to update movie", error: error.message });
  }
};

export const deleteMovie = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    const { id } = req.params;

    const movie = await prisma.movie.findUnique({ where: { id: Number(id) } });
    if (!movie) return res.status(404).json({ message: "Movie not found" });
    if (movie.userId !== userId)
      return res.status(403).json({ message: "Unauthorized" });

    await prisma.movie.delete({ where: { id: Number(id) } });
    res.status(200).json({ message: "Movie deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ message: "Failed to delete movie", error: error.message });
  }
};
