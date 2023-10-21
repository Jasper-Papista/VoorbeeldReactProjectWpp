import bcrypt from 'bcrypt';
import { User } from '../domain/model/user';
import userDB from '../domain/data-access/user.db';
import { UserInput } from '../types';
import { error } from 'console';
import { generateJwtToken } from '../util/jwt';

const authenticate = async ({ username, password }: UserInput): Promise<string> => {
    const user = await userDB.getUserByUsername({username});
    const match = await bcrypt.compare(password, user.password);
    if(!match){
        throw new error('Incorrect username or password.')
    }
    return generateJwtToken(username);
};

export default { authenticate };
