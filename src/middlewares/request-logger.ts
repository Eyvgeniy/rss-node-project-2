import { finished } from 'stream';
import { Request, Response, NextFunction } from 'express';
import logger from '../common/logger/logger';

const loggerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { method, url, query, body } = req;
  const start = Date.now();

  next();

  finished(res, () => {
    const ms = Date.now() - start;
    const { statusCode } = res;
    const querytoString = JSON.stringify(query);
    logger.info(method, url, querytoString, statusCode, ms, body);
  });
};

export default loggerMiddleware;
