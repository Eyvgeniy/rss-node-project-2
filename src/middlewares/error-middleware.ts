import { Request, Response, NextFunction } from 'express';
import errorHandler from '../common/errors/error-handler';
import { IUserError } from '../models';

const errorMiddleware = (
  err: IUserError,
  _: Request,
  res: Response,
  next: NextFunction
): void => {
  const { reason, statusText, status } = errorHandler(err);
  res.status(status).send({ reason, statusText });
  next();
};

export default errorMiddleware;
