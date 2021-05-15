/* eslint-disable no-unused-vars */
const errorMiddleware = (err, req, res, next) => {
  res.status(404).send(err.message);
};

module.exports = errorMiddleware;
