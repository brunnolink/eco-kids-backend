import { Player } from "@prisma/client";


export interface PlayerRepository {
    create(name: string): Promise<Player>;
    findByName(name: string): Promise<Player | null>;
    findById(id: string): Promise<Player | null>;

    savePoints(playerId: string, points: number, achievements: string[]): Promise<void>
    rankingPlayers(): Promise<any[]>
}