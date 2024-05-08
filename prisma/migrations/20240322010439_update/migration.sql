/*
  Warnings:

  - You are about to drop the column `primaryPosition` on the `personality` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "personality" DROP COLUMN "primaryPosition",
ADD COLUMN     "primaryPositionCode" TEXT NOT NULL DEFAULT '0';

-- CreateTable
CREATE TABLE "primary_position" (
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "abbreviation" TEXT NOT NULL,

    CONSTRAINT "primary_position_pkey" PRIMARY KEY ("code")
);

-- AddForeignKey
ALTER TABLE "player" ADD CONSTRAINT "player_statsId_fkey" FOREIGN KEY ("statsId") REFERENCES "personality"("statsId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "personality" ADD CONSTRAINT "personality_primaryPositionCode_fkey" FOREIGN KEY ("primaryPositionCode") REFERENCES "primary_position"("code") ON DELETE RESTRICT ON UPDATE CASCADE;
