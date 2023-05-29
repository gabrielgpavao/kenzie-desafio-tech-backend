/*
  Warnings:

  - You are about to alter the column `phoneNumber` on the `clients` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(11)`.
  - You are about to alter the column `phoneNumber` on the `contacts` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(11)`.
  - Added the required column `password` to the `clients` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "clients" ADD COLUMN     "password" TEXT NOT NULL,
ALTER COLUMN "phoneNumber" SET DATA TYPE VARCHAR(11);

-- AlterTable
ALTER TABLE "contacts" ALTER COLUMN "phoneNumber" SET DATA TYPE VARCHAR(11);
