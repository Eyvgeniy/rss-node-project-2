const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/:userId').get(async (req, res) => {
  const userEntity = await usersService.get(req.params.userId);
  res.json(User.toResponse(userEntity));
});

router.route('/').post(async (req, res) => {
  const userEntity = await usersService.save(req.body);
  res.send(User.toResponse(userEntity));
});

router.route('/:userId').put(async (req, res) => {
  const userEntity = await usersService.update(req.params.userId, req.body);
  res.json(User.toResponse(userEntity));
});

router.route('/:userId').delete(async (req, res) => {
  const message = await usersService.remove(req.params.userId);
  res.json(message);
});



module.exports = router;
