import express from 'express';
import swaggerUI from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';

import userRouter from './resources/users/user.router';
import boardRouter from './resources/boards/board.router';
import taskRouter from './resources/tasks/task.router';

import errorMiddleware from './middlewares/error-middleware';
import loggerReqMiddleware from './middlewares/request-logger';
import logger from './common/logger/logger';

import { IUserError } from './models';

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());
app.use(loggerReqMiddleware);

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);
app.use('/boards', boardRouter);
boardRouter.use('/:boardId/tasks', taskRouter);
app.use(errorMiddleware);

process.on('uncaughtException', (error: IUserError): void => {
  logger.error(error.stack);
  process.exit(1);
});

process.on('unhandledRejection', (error: IUserError) => {
  logger.error(error.stack);
});

export default app;
