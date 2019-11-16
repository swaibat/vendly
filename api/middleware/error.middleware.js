const ErrorMiddleware = {
  methodError(req, res, next) {
    const error = new Error('Ooops this method is not allowed');
    error.status = 405;
    next(error);
  },

  serverError(error, req, res, next) {
    res.status(error.status || 500).send({ status: error.status || 500, error: error.message });
    next();
  }

};

export default ErrorMiddleware;

