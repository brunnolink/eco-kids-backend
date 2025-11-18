import { PrismaClientRustPanicError } from "@prisma/client/runtime/library";
import { PlayerService } from "../player-service";
import { PrismaPlayerRepository } from "../../../../repositories/prisma-repositories/prisma-player-repository";
import { SavePointsService } from "../save-points-service";


export function makeCreatePlayer() {
    const playerRepository = new PrismaPlayerRepository();
    return new PlayerService(playerRepository);
}

export function makeSavePointsService() {
    const playerRepository = new PrismaPlayerRepository();
    return new SavePointsService(playerRepository);
}