/*
  Warnings:

  - You are about to drop the `Achievement` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Player" ADD COLUMN     "achievements" TEXT[];

-- DropTable
DROP TABLE "public"."Achievement";
