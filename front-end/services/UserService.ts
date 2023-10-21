import { User } from "../types";

const loginUser = (user: User) => {
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: user.username,
            password: user.password
        })
    });
};

const UserService = {
    loginUser,
};

export default UserService;
