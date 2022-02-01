import { ErrorRequestHandler } from 'express';
import expressWinston from 'express-winston';
import { createLogger, transports } from 'winston';

const logger = createLogger({
    transports: [
        new transports.File({filename:'./Logs/eventlog.log', level:'error'}),
        new transports.Console()
    ]
});

const errLogger:ErrorRequestHandler = expressWinston.errorLogger({
    winstonInstance: logger,
    msg:'HTTP: {{err.msg}}, {{res.statusCode}} {{req.method}}'
})

export default errLogger;