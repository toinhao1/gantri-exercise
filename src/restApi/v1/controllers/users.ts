import { Request, Response, NextFunction } from 'express';

import { UserModel } from '../../../models';
import { ApiError } from '../../ApiError';

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, location, age } = req.body;

    if (!name || !location || !age) {
      throw new ApiError('Missing required parameters!');
    }

    const user = new UserModel({
      age,
      location,
      name,
    });

    await user.save();
    res.status(201).json({ user, message: 'New user created successfully!' });
  } catch (err) {
    next(err);
  }
};

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await UserModel.find().lean();

    res.json({ users });
  } catch (err) {
    next(err);
  }
};
