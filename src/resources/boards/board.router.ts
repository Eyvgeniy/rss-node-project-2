import express from 'express';
import Board from './board.model';
import boardsService from './board.service';
import wrapAsync from '../../common/errors/async-error-wrapper';

const router = express.Router();

router.route('/').get(async (_, res) => {
  const boards = await boardsService.getAll();
  res.json(boards.map(Board.toResponse));
});

router.route('/:boardId').get(
  wrapAsync(async (req, res) => {
    const boardEntity = await boardsService.get(req.params.boardId);
    res.json(Board.toResponse(boardEntity));
  })
);

router.route('/').post(async (req, res) => {
  const boardEntity = await boardsService.save(req.body);
  res.status(201).send(Board.toResponse(boardEntity));
});

router.route('/:boardId').put(async (req, res) => {
  const boardEntity = await boardsService.update(req.params.boardId, req.body);
  res.json(Board.toResponse(boardEntity));
});

router.route('/:boardId').delete(async (req, res) => {
  const message = await boardsService.remove(req.params.boardId);
  res.status(204).json(message);
});

export default router;
