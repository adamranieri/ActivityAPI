import winston from 'winston';
import expressWinston from 'express-winston';

const requestLogger = expressWinston.logger({
    transports: [new winston.transports.Console(), new winston.transports.File({filename:'./logs/eventlog.log'})],
    expressFormat:true
});

export default requestLogger;