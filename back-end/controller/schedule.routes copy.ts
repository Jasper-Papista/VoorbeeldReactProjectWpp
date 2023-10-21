/**
 * @swagger
 *   components:
 *    schemas:
 *      Schedule:
 *          type: object
 *          properties:
 *            id:
 *              type: number
 *              format: int64
 *            start:
 *              type: string
 *              format: date-time
 *            end:
 *              type: string
 *              format: date-time
 *            course:
 *              $ref: '#/components/schemas/Course'
 *            lecturer:
 *              $ref: '#/components/schemas/Lecturer'
 */
import express, { Request, Response } from 'express';

const userRouter = express.Router();

export { userRouter };
