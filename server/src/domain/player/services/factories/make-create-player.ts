import { PlayerService, RankingPlayersService, SavePointsService } from "..";
import { PrismaPlayerRepository } from "../../../../repositories/prisma-repositories/prisma-player-repository";
 
export function makeCreatePlayer() {
    const playerRepository = new PrismaPlayerRepository();
    return new PlayerService(playerRepository);
}

export function makeSavePointsService() {
    const playerRepository = new PrismaPlayerRepository();
    return new SavePointsService(playerRepository);
}

export function makeRankingPlayersService() {
    const playerRepository = new PrismaPlayerRepository();
    return new RankingPlayersService(playerRepository);
}
