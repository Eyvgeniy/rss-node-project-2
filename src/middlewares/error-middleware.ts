import { Request, Response, NextFunction } from 'express';

const errorMiddleware = (
  err: Error,
  _: Request,
  res: Response,
  next: NextFunction
): void => {
  res.status(404).send(err.message);
  next();
};

export default errorMiddleware;
