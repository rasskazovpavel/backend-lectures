#!/usr/bin/env node
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

let input = new Date();
let output = input;

let months = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December',
}

if (argv.year || argv.y) output = input.getFullYear();
if (argv.month || argv.m) output = months[input.getMonth() + 1];
if (argv.date || argv.d) output = input.getDate();
const coef = argv['_'].includes('add') ? 1 : argv['_'].includes('sub') ? -1 : 0;
if (coef) {
    if (argv.year || argv.y) {
        let addYear = argv.year || argv.y;
        input.setFullYear(input.getFullYear() + coef * addYear);
        output = input.getFullYear();
    }
    if (argv.month || argv.m) {
        let addMonth = argv.month || argv.m;
        input.setMonth(input.getMonth() + coef * addMonth);
        output = months[input.getMonth() + 1];
    }
    if (argv.date || argv.d) {
        let addDate = argv.date || argv.d;
        input.setDate(input.getDate() + coef * addDate);
        output = input.getDate();
    }
}
console.log(output);
