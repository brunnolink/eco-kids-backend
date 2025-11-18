import { PlayerRepository } from "../../../repositories/player-repository";

export class SavePointsService {
  private readonly playerRepository: PlayerRepository;

  constructor(playerRepository: PlayerRepository) {
    this.playerRepository = playerRepository; 
  }

  async savePlayerPoints(playerId: string, points: number) {
    const existing = await this.playerRepository.findById(playerId);
    if (!existing) {
      throw new Error("None player found");  
    }
    
    await this.playerRepository.savePoints(playerId, points);
  }
}
