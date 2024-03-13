-- CreateTable
CREATE TABLE "personality" (
    "statsId" INTEGER NOT NULL,
    "fullName" TEXT NOT NULL,
    "primaryNumber" TEXT NOT NULL,
    "birthDate" TEXT NOT NULL,
    "primaryPosition" JSONB NOT NULL,
    "batSide" TEXT NOT NULL,
    "pitchHand" TEXT NOT NULL,
    "mlbDebutDate" TEXT NOT NULL,

    CONSTRAINT "personality_pkey" PRIMARY KEY ("statsId")
);
