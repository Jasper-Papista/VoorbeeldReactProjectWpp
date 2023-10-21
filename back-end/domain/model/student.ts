import { User } from './user';
import { Schedule } from './schedule';
import { Schedule as SchedulePrisma, Student as StudentPrisma, User as UserPrisma, Lecturer as LecturerPrisma, Course as CoursePrisma } from '@prisma/client';
import { mapToSchedules } from './schedule.mapper';

export class Student {
    readonly id?: number;
    readonly user: User;
    readonly studentnumber: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly schedules: Schedule[];

    constructor(student: {
        id?: number;
        user: User;
        studentnumber: string;
        createdAt: Date;
        updatedAt: Date;
        schedules: Schedule[];
    }) {
        this.id = student.id;
        this.user = student.user;
        this.studentnumber = student.studentnumber;
        this.createdAt = student.createdAt;
        this.updatedAt = student.updatedAt;
        this.schedules = student.schedules;
    }

    equals({ id, user, studentnumber, createdAt, updatedAt }): boolean {
        return (
            this.id === id &&
            this.user.equals(user) &&
            this.studentnumber === studentnumber &&
            this.createdAt === createdAt &&
            this.updatedAt === updatedAt
        );
    }

    static from({
        id,
        user,
        studentnumber,
        createdAt,
        updatedAt,
        schedules,
    }: StudentPrisma & { user: UserPrisma} & {schedules? : SchedulePrisma[]}) {
        return new Student({
            id,
            user: User.from(user),
            studentnumber,
            createdAt,
            updatedAt,
            schedules: schedules ? mapToSchedules(schedules) : [],
        });
    }

}
