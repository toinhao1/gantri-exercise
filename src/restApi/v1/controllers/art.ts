import { Request, Response, NextFunction } from 'express';

import { ArtModel, CommentModel } from '../../../models';
import { ApiError } from '../../ApiError';

// Ideally have pagintation set up for the route
// trying to spend the least amount of time on this as possible
export const getAllArt = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const art = await ArtModel.find()
      .populate({
        path: 'comments',
        populate: {
          path: 'user',
        },
      })
      .lean();

    res.json(art);
  } catch (err) {
    next(err);
  }
};

export const getSelectArt = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const art = await ArtModel.findOne({ id }).populate({
      path: 'comments',
      populate: {
        path: 'user',
      },
    });
    if (!art) {
      throw new ApiError('No art associated with the provdied id!');
    }
    res.json(art);
  } catch (err) {
    next(err);
  }
};

export const createComment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId, content } = req.body;
    const { id } = req.params;

    if (!userId || !content) {
      throw new ApiError('Missing required parameters!');
    }

    const newComment = new CommentModel({
      user: userId,
      content: content,
    });
    await newComment.save();

    const foundArt = await ArtModel.findOne({ id });
    if (!foundArt) {
      throw new ApiError('No art associated with the provdied id!');
    }

    foundArt.comments.push(newComment.id);
    await foundArt.save();

    res.status(201).json({ newComment, message: 'New comment created successfully!' });
  } catch (err) {
    next(err);
  }
};
