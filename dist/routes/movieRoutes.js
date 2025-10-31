"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const movieController_1 = require("../controllers/movieController");
const auth_1 = require("../middlewares/auth");
const router = express_1.default.Router();
router.post("/movies", auth_1.authMiddleware, movieController_1.addMovie);
router.get("/movies", auth_1.authMiddleware, movieController_1.getMovies);
router.put("/movies/:id", auth_1.authMiddleware, movieController_1.updateMovie);
router.delete("/movies/:id", auth_1.authMiddleware, movieController_1.deleteMovie);
exports.default = router;
