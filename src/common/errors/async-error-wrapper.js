/**
 * Async wrapper to redirect error from router to error middleware
 * @param {function} fn Function to wrap
 * @returns {function} Express middleware
 */
const wrapAsync = (fn) =>
  /**
   * Express middleware
   * @param {Object} req Express Request
   * @param {Object} res Express Responce
   * @param {function} next Express next function
   * @returns {Promise}
   */
  (req, res, next) => fn(req, res).catch(next);

module.exports = wrapAsync;
