import chalk from "chalk";

export default class Logger {
  static info(...args: any[]) {
    console.log(chalk.blue("[INFO]"), ...args);
  }

  static warn(...args: any[]) {
    console.log(chalk.yellow("[WARN]"), ...args);
  }

  static error(...args: any[]) {
    console.log(chalk.red("[ERROR]"), ...args);
  }

  static success(...args: any[]) {
    console.log(chalk.green("[SUCCESS]"), ...args);
  }
}
