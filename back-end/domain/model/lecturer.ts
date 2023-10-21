import { Course } from './course';
import { User } from './user';
import {
    Course as CoursePrisma,
    Lecturer as LecturerPrisma,
    User as UserPrisma,
} from '@prisma/client';

export class Lecturer {
    readonly id?: number;
    readonly user: User;
    readonly expertise: string;
    readonly courses: Course[];
    readonly createdAt: Date;
    readonly updatedAt: Date;

    constructor(lecturer: {
        id?: number;
        courses?: Course[];
        user: User;
        expertise: string;
        createdAt?: Date;
        updatedAt?: Date;
    }) {
        this.id = lecturer.id;
        this.user = lecturer.user;
        this.courses = lecturer.courses;
        this.expertise = lecturer.expertise;
        this.createdAt = lecturer.createdAt;
        this.updatedAt = lecturer.updatedAt;
    }

    equals({ id, user, courses, expertise, createdAt, updatedAt }): boolean {
        return (
            this.id === id &&
            this.user.equals(user) &&
            this.courses.every((course, index) => course.equals(courses[index])) &&
            this.expertise === expertise &&
            this.createdAt === createdAt &&
            this.updatedAt === updatedAt
        );
    }

    static from({
        id,
        user,
        expertise,
        createdAt,
        updatedAt,
    }: LecturerPrisma & { user: UserPrisma}) {
        return new Lecturer({
            id,
            user: User.from(user),
            expertise,
            createdAt,
            updatedAt,
        });
    }

}
