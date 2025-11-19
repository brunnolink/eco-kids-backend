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
          createdAt: true,
          updatedAt: true,
          scores: true,
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
      await prismaClient.score.create({
        data: {
          playerId,
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
        scores: {
          _count: 'desc',
        },
      },
      take: 10,
    });
  }
}