import type { Request, Response } from 'express'
import { makeCreatePlayer } from '../../services/factories/make-create-player';

export class CreatePlayerController {
    async create(request: Request, response: Response): Promise<Response> {
        const { name } = request.body;
        const service = makeCreatePlayer();
        try {
            const player = await service.createPlayer(name);
            return response.status(201).json(player);
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json({ message: error.message });
            }
            return response.status(500).json({ message: "Internal server error" });
        }
    }
}