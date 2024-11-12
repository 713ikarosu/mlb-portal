/*
  Warnings:

  - The primary key for the `RelatedLink` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `RelatedLink` table. All the data in the column will be lost.
  - You are about to drop the column `linkedWord` on the `RelatedLink` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `RelatedLink` table. All the data in the column will be lost.
  - You are about to drop the column `wordId` on the `RelatedLink` table. All the data in the column will be lost.
  - The `id` column on the `RelatedLink` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `originWordId` to the `RelatedLink` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `linkedWordId` on the `RelatedLink` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "RelatedLink" DROP CONSTRAINT "RelatedLink_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "linkedWord",
DROP COLUMN "updatedAt",
DROP COLUMN "wordId",
ADD COLUMN     "originWordId" UUID NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "linkedWordId",
ADD COLUMN     "linkedWordId" UUID NOT NULL,
ADD CONSTRAINT "RelatedLink_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE INDEX "RelatedLink_originWordId_idx" ON "RelatedLink"("originWordId");

-- CreateIndex
CREATE INDEX "RelatedLink_linkedWordId_idx" ON "RelatedLink"("linkedWordId");

-- AddForeignKey
ALTER TABLE "RelatedLink" ADD CONSTRAINT "RelatedLink_originWordId_fkey" FOREIGN KEY ("originWordId") REFERENCES "Word"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RelatedLink" ADD CONSTRAINT "RelatedLink_linkedWordId_fkey" FOREIGN KEY ("linkedWordId") REFERENCES "Word"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
