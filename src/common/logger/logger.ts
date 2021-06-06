import fs from 'fs';
import path from 'path';
import config from '../config';

const Reset = '\x1b[0m';

const FgRed = '\x1b[31m';
const FgGreen = '\x1b[32m';
const FgBlue = '\x1b[34m';
const FgMagenta = '\x1b[35m';
const FgWhite = '\x1b[37m';

const BgRed = '\x1b[41m';

const requestLogsPath = path.resolve(
  __dirname,
  '..',
  '..',
  '..',
  config.REQUEST_LOGS
);
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
  ms: number,
  body: string
): void => {
  const methodLog = `${FgMagenta}${method}${Reset}`;
  const queryLog = `${FgRed}Query:${Reset}${query}`;
  const bodyLog = `${FgBlue}Body:${Reset}${JSON.stringify(body)}`;
  const statusCodeLog = `${FgGreen}${statusCode}${Reset}`;

  fs.writeFileSync(
    requestLogsPath,
    `${method} ${url} Query:${query} Body:${JSON.stringify(
      body
    )} ${statusCode} [${ms}ms]\n`,
    { flag: 'a' }
  );
  console.log(
    `${methodLog} ${url} ${queryLog} ${bodyLog} ${statusCodeLog} [${ms}ms]`
  );
};

const error = (stack: string): void => {
  fs.writeFileSync(errorsLogsPath, `${stack}\n`, { flag: 'a' });
  console.error(`${BgRed}${FgWhite}Error${Reset} ${stack}`);
};

export default { info, error };
