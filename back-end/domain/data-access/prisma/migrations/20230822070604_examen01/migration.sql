/*
  Warnings:

  - You are about to drop the `_ScheduleToStudent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ScheduleToStudent" DROP CONSTRAINT "_ScheduleToStudent_A_fkey";

-- DropForeignKey
ALTER TABLE "_ScheduleToStudent" DROP CONSTRAINT "_ScheduleToStudent_B_fkey";

-- DropTable
DROP TABLE "_ScheduleToStudent";
