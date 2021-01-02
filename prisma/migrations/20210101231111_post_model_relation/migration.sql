/*
  Warnings:

  - You are about to drop the column `postId` on the `users` table. All the data in the column will be lost.
  - The migration will add a unique constraint covering the columns `[userId]` on the table `Post`. If there are existing duplicate values, the migration will fail.
  - Added the required column `userId` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_postId_fkey";

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "postId";

-- CreateIndex
CREATE UNIQUE INDEX "Post_userId_unique" ON "Post"("userId");

-- AddForeignKey
ALTER TABLE "Post" ADD FOREIGN KEY("userId")REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
