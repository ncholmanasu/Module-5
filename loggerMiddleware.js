const loggerMiddleware = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} request made to: ${req.url}`);
  next(); // Passes control to the next middleware
};

module.exports = loggerMiddleware;