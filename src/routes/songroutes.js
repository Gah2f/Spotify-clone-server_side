import { addSongs, listSongs } from "../controllers/songController.js";
import express from "express";

const songRouter = express.Router();

songRouter.post('/add', addSongs);
listSongs.get('/list', listSongs);

export default songRouter;