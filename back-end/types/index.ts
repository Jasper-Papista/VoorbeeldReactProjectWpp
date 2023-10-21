type UserInput = {
    id?: number;
    username?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
};

type LecturerInput = {
    id?: number;
    user?: UserInput;
    expertise?: string;
    courses?: CourseInput[];
};

type StudentInput = {
    id?: number;
    user?: UserInput;
    studentnumber?: string;
    schedules?: ScheduleInput[]
};

type CourseInput = {
    id?: number;
    name?: string;
    description?: string;
    phase?: number;
    credits?: number;
};

type ScheduleInput = {
    id?: number;
    start?: Date;
    end?: Date;
    course?: CourseInput;
    lecturer?: LecturerInput;
    students?: StudentInput[];
};

type EnrollmentInput = {
    schedule: ScheduleInput;
    students: StudentInput[];
};

export { LecturerInput, UserInput, StudentInput, CourseInput, ScheduleInput, EnrollmentInput };
