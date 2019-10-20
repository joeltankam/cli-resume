#!/usr/bin/env node --experimental-modules

const program = require('commander');

program
    .option('-a, --about-me', 'output information about me 👨🏽‍💼')
    .option('-e, --experience', 'output my professional experience 💻')
    .option('-d, --education', 'output my education 👨‍🎓')
    .option('-s, --skills', 'output my skill highlights 👨‍💻')
    .option('-c, --awards', 'output my awards and certifications 🏆')
    .option('-l, --languages', 'output my language skills 🌍')
    .option('-r, --references', 'output my references 👨‍⚖️')
    .option('-o, --hobbies', 'output my hobbies 🕺');
