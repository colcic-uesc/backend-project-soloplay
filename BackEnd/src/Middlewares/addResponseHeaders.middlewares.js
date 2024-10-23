// middlewares/addResponseHeaders.js
const addResponseHeaders = (request, response, next) => {
    response.setHeader('X-APP-NAME', 'BackEnd-Project-SoloPlay');
    response.setHeader('X-APP-API-VERSION', '0.1');
    next();
};

module.exports = addResponseHeaders;
