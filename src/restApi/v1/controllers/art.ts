import { Request, Response, NextFunction } from 'express';

import { ArtModel, CommentModel } from '../../../models';
import { ApiError } from '../../ApiError';

export const createComment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, location, age } = req.body;

    if (!name || !location || !age) {
      throw new ApiError('Missing required parameters!');
    }

    const user = new CommentModel({
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

// Ideally have pagintation set up for the route
// trying to spend the least amount of time on this as possible
export const getAllArt = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const art = await ArtModel.find().lean();

    res.json({ art });
  } catch (err) {
    next(err);
  }
};

export const getSelectArt = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const art = await ArtModel.find({ id });

    res.json({ art });
  } catch (err) {
    next(err);
  }
};
