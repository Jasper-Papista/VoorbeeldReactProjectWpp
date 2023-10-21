import React, { useState } from "react";
import { Student } from "../../types";

type Props = {
    students: Array<Student>;
    setSelectedStudent: (student: Student) => void;
};

const StudentOverviewTable: React.FC<Props> = ({students, setSelectedStudent}: Props) => {

    return (
        <>
            {students && (
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Firstname</th>
                            <th scope="col">Lastname</th>
                            <th scope="col">Studentnumber</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr
                                key={index}
                                role="button"
                                onClick={() => {setSelectedStudent(student)}}
                            >
                                <td>{student.user.firstName}</td>
                                <td>{student.user.lastName}</td>
                                <td>{student.studentnumber}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
};

export default StudentOverviewTable;
