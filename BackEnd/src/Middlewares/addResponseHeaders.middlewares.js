// middlewares/addResponseHeaders.js
const addResponseHeaders = (request, response, next) => {
  res.setHeader('X-APP-NAME', 'BackEnd-Project-SoloPlay');
  res.setHeader('X-APP-API-VERSION', '0.1');
  next();
};

module.exports = addResponseHeaders;
