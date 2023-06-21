import { Request, Response, NextFunction } from 'express';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
  console.error({
    message: error?.message,
    metadata: {
      url: req.originalUrl,
      body: req.body,
      params: req.params,
      error,
    },
  });
  res.status(error.code).json({
    type: error.type,
    message: error.message,
  });
};
