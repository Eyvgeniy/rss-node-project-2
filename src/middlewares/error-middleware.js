const errorMiddleware = (err, req, res) => {
  res.status(404).send(err.message);
}

module.exports = errorMiddleware;
