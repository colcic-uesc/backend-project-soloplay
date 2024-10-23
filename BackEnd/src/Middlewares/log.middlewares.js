// middlewares/logEvents.js
const { Log } = require('../DataBase/models');

const logEvents = async (req, res, next) => {
  const start = Date.now();
  const clientIP = req.ip || req.connection.remoteAddress;
  const token = req.headers.authorization ? true : false;
  
  res.on('finish', async () => {
    const duration = Date.now() - start;

    try {
      await Log.create({
        ip: clientIP,
        hasToken: token,
        date: new Date(),
        method: req.method,
        url: req.originalUrl,
        duration: duration / 1000 // Convertendo para segundos
      });
    } catch (error) {
      console.error('Erro ao salvar o log:', error);
    }
  });

  next();
};

module.exports = logEvents;
