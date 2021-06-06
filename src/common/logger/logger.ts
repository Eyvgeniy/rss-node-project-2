const info = (
  method: string,
  url: string,
  query: string,
  statusCode: number,
  ms: number
): void => {
  console.log(`${method} ${url} ${query} ${statusCode} [${ms}ms]`);
};

const error = (stack: string): void => {
  console.error(`${stack}`);
};

export default { info, error };
