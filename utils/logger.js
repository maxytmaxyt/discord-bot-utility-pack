const chalk = require("chalk");

class Logger {
  static info(msg) {
    console.log(chalk.blue("[INFO]"), msg);
  }

  static warn(msg) {
    console.log(chalk.yellow("[WARN]"), msg);
  }

  static error(msg) {
    console.log(chalk.red("[ERROR]"), msg);
  }

  static success(msg) {
    console.log(chalk.green("[SUCCESS]"), msg);
  }
}

module.exports = Logger;
