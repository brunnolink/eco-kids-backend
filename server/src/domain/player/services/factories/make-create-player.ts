import { PrismaClientRustPanicError } from "@prisma/client/runtime/library";
import { PlayerService } from "../player-service";
import { PrismaPlayerRepository } from "../../../../repositories/prisma-repositories/prisma-player-repository";


export function makeCreatePlayer() {
    const playerRepository = new PrismaPlayerRepository();
    return new PlayerService(playerRepository);
}