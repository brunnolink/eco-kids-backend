import { PrismaClient } from '@prisma/client';
import { PlayerRepository } from '../player-repository';

const prismaClient = new PrismaClient();

export class PrismaPlayerRepository implements PlayerRepository {
  async create(name: string) {
    return prismaClient.player.create({
      data: { name },
    });
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
}