const chalk = require('chalk');
const DateSortedLogger = require('./DateSortedLogger.js');

module.exports = class ExperienceLogger extends DateSortedLogger {
    log() {
        console.log(chalk.cyan('Experience'));
        this.data.forEach((exp) => {
            const titleSuffix = exp.type !== 'Full-time' ? `, ${exp.type}` : '';
            console.log(chalk.magenta(exp.title + titleSuffix));
            if (exp.company !== undefined) {
                console.log(`  ${chalk.bold(exp.company)}`);
            }
            const startDate = exp.date.start.toDateString();
            const endDate = exp.date.end !== undefined ? exp.date.end.toDateString() : 'Present';
            console.log(`  ${chalk.italic(`${startDate} - ${endDate}`)}`);
            console.log(`  ${exp.location}`);
            console.log(`  ${chalk.gray(exp.description)}`);
        });
    }
};
