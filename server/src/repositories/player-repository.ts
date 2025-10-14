import { Player } from "@prisma/client";


export interface PlayerRepository {
    create(name: string): Promise<Player>;
    findByName(name: string): Promise<Player | null>;
    findById(id: string): Promise<Player | null>;
}