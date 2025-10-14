import { Router } from "express"
import { playersRoute } from "../domain/player/http/player-routes";

export const appRouter = Router()
 
appRouter.use('/players', playersRoute);