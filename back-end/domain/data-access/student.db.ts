import { StudentInput } from '../../types';
import database from '../../util/database';
import { Student } from '../model/student';

const getAllStudents = async (): Promise<Student[]> => {
    try {
        const studentsPrisma = await database.student.findMany({ 
            include: { 
                user: true, 
                schedules: {include :{course: true, lecturer: {include:{user:true}}}},
            } 
        });
        return studentsPrisma.map((studentPrisma) => Student.from(studentPrisma));
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};

export default {
    getAllStudents,
};
