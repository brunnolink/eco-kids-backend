import { PlayerRepository } from "../../../repositories/player-repository";

export class PlayerService {
  private readonly playerRepository: PlayerRepository;

  constructor(playerRepository: PlayerRepository) {
    this.playerRepository = playerRepository; 
  }

  async createPlayer(name: string) {
    if (!name.trim()) {
      throw new Error("The name is required");
    }

    const existing = await this.playerRepository.findByName(name);
    if (existing) {
      throw new Error("This name already exists");  
    }

    return this.playerRepository.create(name);
  }
}
