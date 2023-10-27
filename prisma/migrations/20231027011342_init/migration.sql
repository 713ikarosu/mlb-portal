-- CreateTable
CREATE TABLE "player" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "fullNameKana" TEXT NOT NULL,

    CONSTRAINT "player_pkey" PRIMARY KEY ("id")
);
