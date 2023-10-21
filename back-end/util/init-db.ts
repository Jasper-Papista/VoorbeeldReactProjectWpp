// Execute: npx ts-node util/init-db.ts

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const main = async () => {
    await prisma.schedule.deleteMany();
    await prisma.course.deleteMany();
    await prisma.lecturer.deleteMany({});
    await prisma.student.deleteMany();
    await prisma.user.deleteMany();

    const web4 = await prisma.course.create({
        data: {
            name: 'Web Development 4',
            description: 'Learn how to build a full stack web application.',
            phase: 2,
            credits: 3,
        },
    });

    const software_engineering = await prisma.course.create({
        data: {
            name: 'Software Engineering',
            description: 'Learn how to build a software application.',
            phase: 2,
            credits: 6,
        },
    });

    const frontend = await prisma.course.create({
        data: {
            name: 'Front-end Development',
            description: 'Learn how to build a front-end web application.',
            phase: 1,
            credits: 6,
        },
    });

    const lecturerJP = await prisma.lecturer.create({
        data: {
            expertise: 'Full Stack Development, Front-end Development, Testing',
            user: {
                create: {
                    username: 'johanp',
                    password: await bcrypt.hash('johanp123', 12),
                    firstName: 'Johan',
                    lastName: 'Pieck',
                    email: 'johan.pieck@ucll.be',
                },
            },
            courses: {
                connect: [{ id: web4.id }, { id: frontend.id }],
            },
        },
    });

    const lecturerES = await prisma.lecturer.create({
        data: {
            expertise: 'Software Engineering, Back-end Development, Testing',
            user: {
                create: {
                    username: 'elkes',
                    password: await bcrypt.hash('elkes123', 12),
                    firstName: 'Elke',
                    lastName: 'Steegmans',
                    email: 'elke.steegmans@ucll.be',
                },
            },
            courses: {
                connect: [{ id: web4.id }, { id: software_engineering.id }],
            },
        },
    });

    const student1 = await prisma.student.create({
        data: {
            studentnumber: 'r0785023',
            user: {
                create: {
                    username: 'peterp',
                    password: await bcrypt.hash('peterp123', 12),
                    firstName: 'Peter',
                    lastName: 'Parker',
                    email: 'peter.parker@ucll.be',
                },
            },
        },
    });

    const student2 = await prisma.student.create({
        data: {
            studentnumber: 'r0785024',
            user: {
                create: {
                    username: 'bruceb',
                    password: await bcrypt.hash('bruceb123', 12),
                    firstName: 'Bruce',
                    lastName: 'Banner',
                    email: 'bruce.banner@ucll.be',
                },
            },
        },
    });

    const student3 = await prisma.student.create({
        data: {
            studentnumber: 'r0785025',
            user: {
                create: {
                    username: 'sallys',
                    password: await bcrypt.hash('sallysb123', 12),
                    firstName: 'Sally',
                    lastName: 'Smith',
                    email: 'sally.smith@ucll.be',
                },
            },
        },
    });

    const student4 = await prisma.student.create({
        data: {
            studentnumber: 'r0785026',
            user: {
                create: {
                    username: 'michaelm',
                    password: await bcrypt.hash('michaelm123', 12),
                    firstName: 'Michael',
                    lastName: 'Miller',
                    email: 'michael.miller@ucll.be',
                },
            },
        },
    });

    const student5 = await prisma.student.create({
        data: {
            studentnumber: 'r0785027',
            user: {
                create: {
                    username: 'lindas',
                    password: await bcrypt.hash('lindas123', 12),
                    firstName: 'Linda',
                    lastName: 'Lawson',
                    email: 'linda.lawson@ucll.be',
                },
            },
        },
    });

    const schedule1 = await prisma.schedule.create({
        data: {
            start: new Date('2023-09-01T08:30:00'),
            end: new Date('2023-09-01T10:30:00'),
            course: {
                connect: { id: web4.id },
            },
            lecturer: {
                connect: { id: lecturerJP.id },
            },
            students: {
                connect: [{id: student1.id}]
            },
        },
    });

    const schedule2 = await prisma.schedule.create({
        data: {
            start: new Date('2023-09-01T13:30:00'),
            end: new Date('2023-09-01T14:00:00'),
            course: {
                connect: { id: web4.id },
            },
            lecturer: {
                connect: { id: lecturerES.id },
            },
            students:{
                connect: [{id: student2.id}]
            },
        },
    });

    const schedule3 = await prisma.schedule.create({
        data: {
            start: new Date('2023-09-03T13:30:00'),
            end: new Date('2023-09-01T15:30:00'),
            course: {
                connect: { id: frontend.id },
            },
            lecturer: {
                connect: { id: lecturerJP.id },
            },
        },
    });

    const schedule4 = await prisma.schedule.create({
        data: {
            start: new Date('2023-09-05T16:00:00'),
            end: new Date('2023-09-05T18:00:00'),
            course: {
                connect: { id: software_engineering.id },
            },
            lecturer: {
                connect: { id: lecturerES.id },
            },
            students:{
                connect: [{id: student1.id}, {id: student3.id}]
            }
        },
    });
};

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
