/*
  Warnings:

  - You are about to drop the `Bin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EventGame` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Item` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."EventGame" DROP CONSTRAINT "EventGame_binId_fkey";

-- DropForeignKey
ALTER TABLE "public"."EventGame" DROP CONSTRAINT "EventGame_itemId_fkey";

-- DropForeignKey
ALTER TABLE "public"."EventGame" DROP CONSTRAINT "EventGame_playerId_fkey";

-- DropTable
DROP TABLE "public"."Bin";

-- DropTable
DROP TABLE "public"."EventGame";

-- DropTable
DROP TABLE "public"."Item";

-- DropEnum
DROP TYPE "public"."TrashType";
