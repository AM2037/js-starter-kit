//chalk allows us to specify the color of the output we are displaying to the console.
//var chalk = require('chalk'); the common js pattern used for node

//use module syntax [es6] node doesnt understand this so use babel node -- change prestart command in json
import chalk from 'chalk';

console.log(chalk.green('Starting app in dev mode...'));

//added prestart to json scripts
