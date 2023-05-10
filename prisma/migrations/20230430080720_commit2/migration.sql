/*
  Warnings:

  - You are about to drop the `Lists_Investors` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Lists_Jobs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Lists_Wallets` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "username" TEXT;

-- DropTable
DROP TABLE "Lists_Investors";

-- DropTable
DROP TABLE "Lists_Jobs";

-- DropTable
DROP TABLE "Lists_Wallets";

-- CreateTable
CREATE TABLE "Credential" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT,
    "externalId" TEXT NOT NULL,
    "publicKey" BYTEA NOT NULL,
    "signCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Credential_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Credential_externalId_key" ON "Credential"("externalId");

-- CreateIndex
CREATE UNIQUE INDEX "Credential_publicKey_key" ON "Credential"("publicKey");

-- CreateIndex
CREATE INDEX "Credential_externalId_idx" ON "Credential"("externalId");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Credential" ADD CONSTRAINT "Credential_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
