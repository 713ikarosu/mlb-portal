/*
  Warnings:

  - The primary key for the `personality` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "personality" DROP CONSTRAINT "personality_primaryPositionCode_fkey";

-- DropForeignKey
ALTER TABLE "player" DROP CONSTRAINT "player_statsId_fkey";

-- AlterTable
ALTER TABLE "personality" DROP CONSTRAINT "personality_pkey",
ALTER COLUMN "statsId" SET DATA TYPE TEXT,
ADD CONSTRAINT "personality_pkey" PRIMARY KEY ("statsId");

-- AlterTable
ALTER TABLE "player" ALTER COLUMN "statsId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "player" ADD CONSTRAINT "player_statsId_fkey" FOREIGN KEY ("statsId") REFERENCES "personality"("statsId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "primary_position" ADD CONSTRAINT "primary_position_code_fkey" FOREIGN KEY ("code") REFERENCES "personality"("statsId") ON DELETE RESTRICT ON UPDATE CASCADE;
