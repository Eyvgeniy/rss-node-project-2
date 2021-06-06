import logger from '../logger/logger';
import Errors from './errors-list';
import { UserError } from '../../models/UserError';

const { InternalServerError } = Errors;

const errorHandler = (
  err: UserError
): { reason: string; statusText: string; status: number } => {
  if (!err.reason) {
    logger.error(err.stack);
    err = new InternalServerError() as UserError;
  }

  const { reason, statusText, status } = err;

  return { reason, statusText, status };
};

export default errorHandler;
