import { PrismaClient } from '@prisma/client';
import { PlayerRepository } from '../player-repository';

const prismaClient = new PrismaClient();

export class PrismaPlayerRepository implements PlayerRepository {
  async create(name: string) {
    try {
      return prismaClient.player.create({
        data: { name },
        select: {
          id: true,
          name: true,
          points: true,
          createdAt: true,
          updatedAt: true,
        },
      });

    } catch (error) {
      throw new Error("Failed to create player");
    }
  }

  async findByName(name: string) {
    return prismaClient.player.findFirst({
      where: { name },
    });
  }

  async findById(id: string) {
    return prismaClient.player.findUnique({
      where: { id },
    });
  }

  async savePoints(playerId: string, points: number): Promise<void> {
    try {
      const player = await prismaClient.player.findUnique({
        where: { id: playerId },
      });
      if (!player) {
        throw new Error("Player not found");
      }
      await prismaClient.player.update({
        where: { id: player.id },
        data: {
          points: points,
        },
      });
    } catch (error) {
      throw new Error("Failed to save points");
    }
  }

  async rankingPlayers(): Promise<any[]> {
    return prismaClient.player.findMany({
      orderBy: {
        points: 'desc',
      },
      select: {
        id: true,
        name: true,
        points: true,
      },
      take: 10,
    });
  }
}