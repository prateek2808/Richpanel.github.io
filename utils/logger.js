const winston = require('winston');
const {timestamp, label, combine, printf, colorize}= winston.format;
const customFormat = printf(({level, message,label, timestamp})=>{
    return `${timestamp} [${label}] ${level}: ${message}`;
});



module.exports = function(moduleName){
    return logger = winston.createLogger({
        level:'debug',
        format: combine(
            label({ label: moduleName }),
            timestamp(),
            customFormat

          ),

        transports: [

            new winston.transports.File({
                filename: 'logs/error.log',
                 level: 'error',

                  maxsize: 20971520, 
                  maxFiles:5

                 }),
            new winston.transports.File({
                filename: 'logs/combined.log',

                 maxsize: 20971520,
                 maxFiles:5
                }),
          ]
    });
}