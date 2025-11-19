import { PlayerRepository } from "../../../repositories/player-repository";
 
export class RankingPlayersService {
    private readonly playerRepository: PlayerRepository;

    constructor(playerRepository: PlayerRepository) {
        this.playerRepository = playerRepository;
    }

    async getRankingPlayers() {
        return this.playerRepository.rankingPlayers();
    }
}