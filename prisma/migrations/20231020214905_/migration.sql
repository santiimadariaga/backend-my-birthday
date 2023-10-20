/*
  Warnings:

  - You are about to drop the column `costumeId` on the `Votos` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[miVoto]` on the table `Votos` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `miVoto` to the `Votos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Votos" DROP CONSTRAINT "Votos_costumeId_fkey";

-- AlterTable
ALTER TABLE "Votos" DROP COLUMN "costumeId",
ADD COLUMN     "miVoto" VARCHAR(255) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Votos_miVoto_key" ON "Votos"("miVoto");
