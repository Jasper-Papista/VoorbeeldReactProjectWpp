import { User } from '../model/user';

import database from '../../util/database';
import { UserInput } from '../../types';

const getUserByUsername = async ({ username }: UserInput): Promise<User> => {
    try {
        const userPrisma = await database.user.findFirst({
            where: {username}
        });
        return User.from(userPrisma);
    } catch (error) {
        console.log(error)
        throw new Error("Database error. See logs")
    }
};

const createUser = async ({
    username,
    password,
    firstName,
    lastName,
    email,
}: UserInput): Promise<User> => {
    try {
        const userPrisma = await database.user.create({
            data: {
                username,
                password,
                firstName,
                lastName,
                email,
            },
        });
        return User.from(userPrisma);
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};

const getAllUsers = async (): Promise<User[]> => {
    try {
        const usersPrisma = await database.user.findMany();
        return usersPrisma.map((userPrisma) => User.from(userPrisma));
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};

const getUserById = async ({ id }: UserInput): Promise<User> => {
    try {
        const userPrisma = await database.user.findUnique({
            where: { id },
        });

        return userPrisma ? User.from(userPrisma) : null;
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};

export default {
    getAllUsers,
    createUser,
    getUserById,
    getUserByUsername,
};
