import type { Request, Response } from 'express'
import { makeSavePointsService } from '../../services/factories/make-create-player';


export class SavePointsController {
    async create(request: Request, response: Response): Promise<Response> {
        const { playerId, points } = request.body;
        const service = makeSavePointsService();
        try {
            const player = service.savePlayerPoints(playerId, points);
            return response.status(201).json(player);
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json({ message: error.message });
            }
            return response.status(500).json({ message: "Internal server error" });
        }
    }
}