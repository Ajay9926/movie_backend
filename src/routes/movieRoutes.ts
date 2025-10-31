import express from "express";
import { addMovie, getMovies, updateMovie, deleteMovie } from "../controllers/movieController";
import { authMiddleware } from "../middlewares/auth";

const router = express.Router();

router.post("/movies", authMiddleware, addMovie);
router.get("/movies", authMiddleware, getMovies);
router.put("/movies/:id", authMiddleware, updateMovie);
router.delete("/movies/:id", authMiddleware, deleteMovie);

export default router;
