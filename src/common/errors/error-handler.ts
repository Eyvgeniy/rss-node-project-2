import logger from '../logger/logger';
import Errors from './errors-list';

const { NotFoundError } = Errors;

const errorHandler = (
  err: any
): { reason: string; statusText: string; status: number } => {
  if (!err.reason) {
    logger.error(err.stack);
    err = new Errors.InternalServerError();
  }

  const { reason, statusText, status } = err;

  return { reason, statusText, status };
};

export default errorHandler;
