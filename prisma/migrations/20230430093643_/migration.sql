/*
  Warnings:

  - The primary key for the `Credential` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `externalId` on the `Credential` table. All the data in the column will be lost.
  - You are about to drop the column `publicKey` on the `Credential` table. All the data in the column will be lost.
  - You are about to drop the column `signCount` on the `Credential` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[credentialID]` on the table `Credential` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[credentialPublicKey]` on the table `Credential` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `credentialID` to the `Credential` table without a default value. This is not possible if the table is not empty.
  - Added the required column `credentialPublicKey` to the `Credential` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Credential_externalId_idx";

-- DropIndex
DROP INDEX "Credential_externalId_key";

-- DropIndex
DROP INDEX "Credential_publicKey_key";

-- AlterTable
ALTER TABLE "Credential" DROP CONSTRAINT "Credential_pkey",
DROP COLUMN "externalId",
DROP COLUMN "publicKey",
DROP COLUMN "signCount",
ADD COLUMN     "counter" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "credentialBackedUp" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "credentialDeviceType" TEXT,
ADD COLUMN     "credentialID" BYTEA NOT NULL,
ADD COLUMN     "credentialPublicKey" BYTEA NOT NULL,
ADD COLUMN     "transports" TEXT[],
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Credential_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Credential_id_seq";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "currentChallenge" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Credential_credentialID_key" ON "Credential"("credentialID");

-- CreateIndex
CREATE UNIQUE INDEX "Credential_credentialPublicKey_key" ON "Credential"("credentialPublicKey");

-- CreateIndex
CREATE INDEX "Credential_credentialID_idx" ON "Credential"("credentialID");
