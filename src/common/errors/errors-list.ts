import { StatusCodes, ReasonPhrases } from 'http-status-codes';

class NotFoundError extends Error {
  status: number;
  statusText: string;
  reason: string;
  constructor(entity: string) {
    super();
    this.status = StatusCodes.NOT_FOUND;
    this.statusText = ReasonPhrases.NOT_FOUND;
    this.reason = `${entity} not found`;
  }
}

class InternalServerError extends Error {
  status: number;
  statusText: string;
  reason: string;
  constructor() {
    super();
    this.status = StatusCodes.INTERNAL_SERVER_ERROR as number;
    this.statusText = ReasonPhrases.INTERNAL_SERVER_ERROR as string;
    this.reason = 'something went wrong' as string;
  }
}

export { NotFoundError, InternalServerError };
