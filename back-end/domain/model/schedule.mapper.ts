import { Schedule as SchedulePrisma } from "@prisma/client";
import { Schedule } from "./schedule";

export const mapToSchedules = (schedulePrisma: SchedulePrisma[]): Schedule[] =>
    schedulePrisma.map(Schedule.from);