// middlewares/addResponseHeaders.js
const addResponseHeaders = (req, res, next) => {
  res.setHeader('X-APP-NAME', 'MyExpressApp');
  res.setHeader('X-APP-API-VERSION', '0.1');
  next();
};

module.exports = addResponseHeaders;
