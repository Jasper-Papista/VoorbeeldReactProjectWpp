import Head from "next/head";
import StudentsOverviewTable from "../../components/students/StudentOverviewTable";
import { useState, useEffect } from "react";
import { Student } from "../../types";
import Header from "../../components/header";
import ScheduleOverviewTable from "../../components/schedules/ScheduleOverview";
import StudentService from "../../services/StudentService";
import { setEngine } from "crypto";

const Students: React.FC = () => {
    const [error, setError] = useState<String>("");
    const [students, setStudents] = useState<Array<Student>>()
    const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

    const getStudents = async () =>{

        setError("");
        const res = await StudentService.getAllStudents();


        if(!res.ok){
            if(res.status === 401){
                setError("You are not authorized to view this page. please login first.")
            }else{
                setError(res.statusText)
            }
        }else{
            const resJSON = await res.json();
            setStudents(resJSON);
        }
    }

    useEffect(() => {
        getStudents();
    }, [])

    return (
        <>
            <Head>
                <title>Students</title>
            </Head>
            <Header />
            <main className="d-flex flex-column justify-content-center align-items-center">
                <h1>Students</h1>
                <section>
                    {error && <div className="text-danger">{error}</div>}
                    {students && (
                        <StudentsOverviewTable students={students} setSelectedStudent={setSelectedStudent}
                        />
                    )}
                </section>
                {selectedStudent && (
                    <section className="mt-5">
                        <h2>Schedule of {selectedStudent.user.firstName}:</h2>
                        <ScheduleOverviewTable schedules={selectedStudent.schedules}
                        />
                    </section>
                )}
            </main>
        </>
    );
};

export default Students;
