#!/usr/bin/env node

const program = require('commander');
const AboutMeLogger = require('./loggers/AboutMeLogger.js');
const ExperienceLogger = require('./loggers/ExperienceLogger.js');
const EducationLogger = require('./loggers/EducationLogger.js');

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
new AboutMeLogger(summaryData, program.aboutMe || program.all).log();

if (program.experience || program.all) {
    console.log();
    const experienceData = require('../assets/experience.json');
    new ExperienceLogger(experienceData).log();
}
console.log();

if (program.education || program.all) {
    console.log();
    const educationData = require('../assets/education.json');
    new EducationLogger(educationData).log();
}
console.log();

if (!process.argv.slice(2).length) {
    program.outputHelp();
}
