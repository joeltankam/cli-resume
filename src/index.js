#!/usr/bin/env node --experimental-modules

const program = require('commander');
const AboutMeLogger = require('./loggers/AboutMeLogger.js');

program
    .name('joeltankam')
    .option('-m, --about-me', 'output information about me 👨🏽‍💼')
    .option('-e, --experience', 'output my professional experience 💻')
    .option('-d, --education', 'output my education 👨‍🎓')
    .option('-s, --skills', 'output my skill highlights 👨‍💻')
    .option('-c, --awards', 'output my awards and certifications 🏆')
    .option('-l, --languages', 'output my language skills 🌍')
    .option('-r, --references', 'output my references 👨‍⚖️')
    .option('-o, --hobbies', 'output my hobbies 🕺')
    .option('-a, --all', 'output everything ⚛');

program.parse(process.argv);

const summaryData = require('../assets/about.json');
new AboutMeLogger(summaryData, program.aboutMe).log();

console.log();
if (!process.argv.slice(2).length) {
    program.outputHelp();
}
