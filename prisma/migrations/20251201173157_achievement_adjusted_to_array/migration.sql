/*
  Warnings:

  - You are about to drop the column `description` on the `Achievement` table. All the data in the column will be lost.
  - You are about to drop the column `icon` on the `Achievement` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Achievement` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Achievement" DROP COLUMN "description",
DROP COLUMN "icon",
DROP COLUMN "title",
ADD COLUMN     "achievements" TEXT[];
