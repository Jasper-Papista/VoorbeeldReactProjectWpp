import {
    Course as CoursePrisma,
    Lecturer as LecturerPrisma,
    Student as StudentPrisma,
    Schedule as SchedulePrisma,
    User as UserPrisma,
} from '@prisma/client';
import { Course } from './course';
import { Lecturer } from './lecturer';
import { Student } from './student';

export class Schedule {
    readonly id?: number;
    readonly start: Date;
    readonly end: Date;
    readonly course: Course;
    readonly lecturer: Lecturer;
    readonly createdAt: Date;
    readonly updatedAt: Date;

    constructor(schedule: {
        id?: number;
        start: Date;
        end: Date;
        course: Course;
        lecturer: Lecturer;
        students?: Student[];
        createdAt: Date;
        updatedAt: Date;
    }) {
        this.id = schedule.id;
        this.start = schedule.start;
        this.end = schedule.end;
        this.course = schedule.course;
        this.lecturer = schedule.lecturer;
        this.createdAt = schedule.createdAt;
        this.updatedAt = schedule.updatedAt;
    }

    equals({ id, start, end, course, lecturer, students, createdAt, updatedAt }): boolean {
        return (
            this.id === id &&
            this.start === start &&
            this.end === end &&
            this.course.equals(course) &&
            this.lecturer.equals(lecturer) &&
            this.createdAt === createdAt &&
            this.updatedAt === updatedAt
        );
    }

    static from({
        id,
        start,
        end,
        course,
        lecturer,
        createdAt,
        updatedAt,
    }: SchedulePrisma & {
        course: CoursePrisma;
        lecturer: LecturerPrisma & { user: UserPrisma};
    }) {
        return new Schedule({
            id,
            start,
            end,
            course: Course.from(course),
            lecturer: Lecturer.from(lecturer),
            createdAt,
            updatedAt,
        });
    }

}
