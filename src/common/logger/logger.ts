const info = (
  method: string,
  url: string,
  query: string,
  statusCode: number,
  ms: number
): void => {
  console.log(`${method} ${url} ${query} ${statusCode} [${ms}ms]`);
};

const error = (status: string, reason: string, statusText: string): void => {
  console.error(`Error ${reason} ${statusText} ${status}`);
};

export default { info, error };
