import express from 'express';
import Task from './task.model';
import tasksService from './task.service';
import wrapAsync from '../../common/errors/async-error-wrapper';

const router = express.Router({ mergeParams: true });

router.route('/').get(async (_, res) => {
  const tasks = await tasksService.getAll();
  res.json(tasks.map(Task.toResponse));
});

router.route('/:taskId').get(
  wrapAsync(async (req, res) => {
    const taskEntity = await tasksService.get(req.params.taskId);
    res.json(Task.toResponse(taskEntity));
  })
);

router.route('/').post(async (req, res) => {
  const taskEntity = await tasksService.save(req.params.boardId, req.body);
  res.status(201).send(Task.toResponse(taskEntity));
});

router.route('/:taskId').put(async (req, res) => {
  const taskEntity = await tasksService.update(req.params, req.body);
  res.json(Task.toResponse(taskEntity));
});

router.route('/:taskId').delete(async (req, res) => {
  const message = await tasksService.remove(req.params);
  res.status(204).json(message);
});

export default router;
