const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');
const wrapAsync = require('../../common/errors/async-error-wrapper');

router.route('/').get(async (req, res) => {
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

module.exports = router;
