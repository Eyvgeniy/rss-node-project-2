import logger from '../logger/logger';
import { InternalServerError } from './errors-list';
import { IUserError } from '../../models';

const errorHandler = (
  err: IUserError
): { reason: string; statusText: string; status: number } => {
  if (!err.reason) {
    logger.error(err.stack);
    err = new InternalServerError() as IUserError;
  }

  const { reason, statusText, status } = err;

  return { reason, statusText, status };
};

export default errorHandler;
