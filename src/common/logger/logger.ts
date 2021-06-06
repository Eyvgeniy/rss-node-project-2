import fs from 'fs';
import path from 'path';
import config from '../config';

const requestLogsPath = path.resolve(
  __dirname,
  '..',
  '..',
  '..',
  config.REQUEST_LOGS
);
console.log(requestLogsPath);
const errorsLogsPath = path.resolve(
  __dirname,
  '..',
  '..',
  '..',
  config.ERRORS_LOGS
);

const info = (
  method: string,
  url: string,
  query: string,
  statusCode: number,
  ms: number
): void => {
  fs.writeFileSync(
    requestLogsPath,
    `${method} ${url} ${query} ${statusCode} [${ms}ms]\n`,
    { flag: 'a' }
  );
  console.log(`${method} ${url} ${query} ${statusCode} [${ms}ms]`);
};

const error = (stack: string): void => {
  fs.writeFileSync(errorsLogsPath, `${stack}\n`, { flag: 'a' });
  console.error(`${stack}`);
};

export default { info, error };
