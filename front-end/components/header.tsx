import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Header: React.FC = () => {
    const [username, setUsername] = useState<string | null>(null);

    const handleClick= () =>{
        sessionStorage.clear();
        setUsername(null);
    }

    
    const getUsernameFromStrorage = () => {
        const username = sessionStorage.getItem("username");
        if (username) {
            setUsername(username);
        }
    }

    useEffect(() => {
        getUsernameFromStrorage();
    }, []);

    return (
        <header className="p-3 mb-3 border-bottom bg-dark bg-gradient">
            <a className="fs-2 d-flex justify-content-center mb-2 mb-lg-0 text-white-50 text-decoration-none">
                {" "}
                Courses App
            </a>
            <nav className="nav justify-content-center">
                <Link href="/" className="nav-link px-4 fs-5 text-white">
                    Home
                </Link>
                <Link
                    href="/students"
                    className="nav-link px-4 fs-5 text-white"
                >
                    Students
                </Link>     
                <Link
                        href="/login"
                        className="nav-link px-4 fs-5 text-white"
                    >
                        Login
                </Link>
                <a
                    href="/login"
                    onClick={handleClick}
                    className="nav-link px-4 fs-5 text-white"
                >
                    Logout
                </a>

                {username && (
                <div className="text-white ms-5 mt-2 pt-1">
                    Welcome, {username}!
                </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
