import jwt from 'jsonwebtoken';

const generateJwtToken = (username: string): string => {
    const options = { expiresIn: `${process.env.JWT_EXPIRES_HOURS}h`, issuer: 'Courses' };
    const jwtSecret = process.env.JWT_SECRET;
    
    try {
        return jwt.sign({ username }, jwtSecret, options);
    }catch (error) {
        console.log(error);
        throw new Error('Error generating JWT token, see server log for details.');
    }
};

export { generateJwtToken };
