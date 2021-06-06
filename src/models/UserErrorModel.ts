export interface IUserError extends Error {
  reason: string;
  stack: string;
  statusText: string;
  status: number;
}
