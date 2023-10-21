const getAllStudents = () => {
    const token = sessionStorage.getItem("token");
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/students`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
};

const StudentService = {
    getAllStudents,
};

export default StudentService;
