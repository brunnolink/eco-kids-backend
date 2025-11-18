import { Router } from "express";
import { CreatePlayerController } from "./controllers/create-player-controller";
import { verifyServiceKey } from "../../../http/middlewares/verify-token-service";
import { SavePointsController } from "./controllers/save-points-controller";

export const playersRoute = Router();

const createPlayerController = new CreatePlayerController();
const savePlayerPointsController = new SavePointsController();

playersRoute.post('/', verifyServiceKey, createPlayerController.create.bind(createPlayerController));

playersRoute.post('/save-points', verifyServiceKey, savePlayerPointsController.create.bind(createPlayerController));