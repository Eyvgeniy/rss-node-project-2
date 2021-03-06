import express, { Router } from 'express';
import User from './user.model';
import usersService from './user.service';
import wrapAsync from '../../common/errors/async-error-wrapper';

const router = express.Router() as Router;

router.route('/').get(
  wrapAsync(
    async (_, res): Promise<void> => {
      const users = await usersService.getAll();
      res.json(users.map(User.toResponse));
    }
  )
);

router.route('/:userId').get(
  wrapAsync(
    async (req, res): Promise<void> => {
      const userEntity = await usersService.get(req.params.userId);
      res.json(User.toResponse(userEntity));
    }
  )
);

router.route('/').post(
  async (req, res): Promise<void> => {
    const userEntity = await usersService.save(req.body);
    res.status(201).send(User.toResponse(userEntity));
  }
);

router.route('/:userId').put(
  async (req, res): Promise<void> => {
    const userEntity = await usersService.update(req.params.userId, req.body);
    res.json(User.toResponse(userEntity));
  }
);

router.route('/:userId').delete(async (req, res) => {
  const message = await usersService.remove(req.params.userId);
  res.status(204).json(message);
});

export default router;
