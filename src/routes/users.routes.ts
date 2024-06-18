import express, { Request, Response } from 'express';
import UserModel from '../models/user.js';
import { handleError } from '../utils/handleError.js';

const usersRouter = express.Router({ mergeParams: true });

usersRouter.get('/', async (req: Request, res: Response) => {
  console.log('req.baseURL', req.baseUrl);
  try {
    const usersList = await UserModel.find();
    res.status(200).send(usersList);
  } catch (error) {
    return handleError(error);
  }
});

export default usersRouter;
