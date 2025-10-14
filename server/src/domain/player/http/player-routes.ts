import { Router } from "express";
import { CreatePlayerController } from "./controllers/create-player-controller";


export const playersRoute = Router();

const createPlayerController = new CreatePlayerController();

playersRoute.post('/', createPlayerController.create.bind(createPlayerController));