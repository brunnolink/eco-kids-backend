import type { Request, Response } from 'express'
import { makeRankingPlayersService } from '../../services/factories/make-create-player';
 
export class RankingPlayersController {
    async get(request: Request, response: Response): Promise<Response> {
        const service = makeRankingPlayersService();
        try {
            const result = await service.getRankingPlayers();
            return response.status(200).json(result);
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json({ message: error.message });
            }
            return response.status(500).json({ message: "Internal server error" });
        }
    }
}