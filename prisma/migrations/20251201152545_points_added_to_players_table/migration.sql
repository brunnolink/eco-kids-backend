/*
  Warnings:

  - You are about to drop the `Score` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Score" DROP CONSTRAINT "Score_playerId_fkey";

-- AlterTable
ALTER TABLE "Player" ADD COLUMN     "points" INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "public"."Score";
