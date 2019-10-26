const chalk = require('chalk');
const DateSortedLogger = require('./DateSortedLogger.js');

module.exports = class EducationLogger extends DateSortedLogger {
    log() {
        console.log(chalk.cyan('Experience'));
        this.data.forEach((element) => {
            console.log(chalk.magenta(`${element.diploma}, ${element.field}`));
            console.log(`  ${chalk.bold(element.school)}`);
            console.log(`  ${chalk.italic(`${element.date.start.getFullYear()} - ${element.date.end.getFullYear()}`)}`);
            console.log(`  ${element.location}`);
            console.log(`  ${chalk.gray(element.description)}`);
            console.log(`  ${chalk.bgYellow(' Awards ')} ${chalk.italic(element.awards.reduce((p, c) => `${p}, ${c}`))}`);
        });
    }
};
