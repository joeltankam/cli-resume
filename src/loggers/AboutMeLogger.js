const chalk = require('chalk');

module.exports = class AboutMeLogger {
    constructor(data, showDetails) {
        this.data = data;
        this.showDetails = showDetails;
    }

    log() {
        console.log(chalk.cyan.bold(this.data.fullName));
        console.log(chalk.italic(this.data.title));

        if (!this.showDetails) return;
        console.log();
        console.log(chalk.cyan('About me'));
        console.log(chalk.gray(this.data.summary));
        AboutMeLogger.logContact(this.data.contact);
        AboutMeLogger.logSocial(this.data.social);
    }

    static logContact(contactData) {
        console.log(chalk.magenta('Contact'));
        console.log(`  ${contactData.email}`);
        console.log(`  ${contactData.phone}`);
    }

    static logSocial(socialData) {
        console.log(chalk.magenta('Social'));
        socialData.forEach((element) => {
            console.log(`  ${chalk.gray(`${element.website}:`)} ${element.username} (${element.url}${element.username})`);
        });
    }
};
