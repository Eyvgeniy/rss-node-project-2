export interface UserError extends Error {
  reason: string;
  stack: string;
  statusText: string;
  status: number;
}
