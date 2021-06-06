import { Request, Response, NextFunction } from 'express';
import errorHandler from '../common/errors/error-handler';

const errorMiddleware = (
  err: Error,
  _: Request,
  res: Response,
  next: NextFunction
): void => {
  const { reason, statusText, status } = errorHandler(err);
  res.status(status).send({ reason, statusText });
  next();
};

export default errorMiddleware;
