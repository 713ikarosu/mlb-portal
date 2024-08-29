-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CreateTable
CREATE TABLE "Word" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "word" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Word_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RelatedLink" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "wordId" TEXT NOT NULL,
    "linkedWordId" TEXT NOT NULL,
    "linkedWord" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RelatedLink_pkey" PRIMARY KEY ("id")
);
