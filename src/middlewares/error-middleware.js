/* eslint-disable no-unused-vars */
/**
 * Expree Error middleware
 * @param {Object} err Express error object
 * @param {Object} req express Request object
 * @param {Object} res Express Resonce object
 * @param {function} next Express next function
 */
const errorMiddleware = (err, req, res, next) => {
  res.status(404).send(err.message);
  next();
};

module.exports = errorMiddleware;
