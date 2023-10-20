-- CreateTable
CREATE TABLE "Costume" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Costume_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Votos" (
    "id" SERIAL NOT NULL,
    "costumeId" INTEGER,

    CONSTRAINT "Votos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Costume_name_key" ON "Costume"("name");

-- AddForeignKey
ALTER TABLE "Votos" ADD CONSTRAINT "Votos_costumeId_fkey" FOREIGN KEY ("costumeId") REFERENCES "Costume"("id") ON DELETE SET NULL ON UPDATE CASCADE;
