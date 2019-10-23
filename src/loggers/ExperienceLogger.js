const chalk = require('chalk');

module.exports = class ExperienceLogger {
    constructor(data, showDetails) {
        const experienceArray = ExperienceLogger.ProcessData(data);
        this.data = experienceArray;
        this.showDetails = showDetails;
    }

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

    static ProcessData(data) {
        const experienceArray = Array.from(data);
        experienceArray.map((element) => {
            const exp = { ...element };
            exp.date.start = new Date(exp.date.start);
            if (exp.date.end !== undefined) {
                exp.date.end = new Date(exp.date.end);
            }
            return element;
        });
        experienceArray.sort((exp1, exp2) => {
            const exp1StartDate = exp1.date.start.getTime();
            const exp2StartDate = exp2.date.start.getTime();
            if (exp1StartDate > exp2StartDate) {
                return -1;
            }
            if (exp2StartDate > exp1StartDate) {
                return 1;
            }
            return 0;
        });
        return experienceArray;
    }
};
