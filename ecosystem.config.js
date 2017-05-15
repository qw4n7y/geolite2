module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    {
      name      : 'APP',
      script    : 'index.js',
      watch:    false,
      exec_mode   : 'cluster',
      instances   : 8,
      log_date_format : "YYYY-MM-DD HH:mm:ss",
      error_file  : 'logs/node.stderr.log',
      out_file    : 'logs/node.stdout.log',
      pid_file    : 'tmp/node.pid',
      combine_logs: true
    }
  ]
};
