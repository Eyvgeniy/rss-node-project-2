import { Request, Response, NextFunction } from 'express';

interface RequestParams {
  userId: string;
}

export default (
  fn: (req: Request<RequestParams>, res: Response) => Promise<Response | void>
) => (
  req: Request<RequestParams>,
  res: Response,
  next: NextFunction
): Promise<Response | void> => fn(req, res).catch(next);
