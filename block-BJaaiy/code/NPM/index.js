const lodash = require("lodash");
var moment = require('moment'); // require
moment().format(); 

let time = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(time)

console.log(moment().format('dddd'))
console.log(moment().format("MMM Do YY"))

console.log(moment(). add(7, 'days'))
console.log(moment(). add(7, 'months'))
console.log(moment(). add(7, 'years'))

console.log(moment(). subtract(7, 'days'))
console.log(moment(). subtract(7, 'months'))
console.log(moment(). subtract(7, 'years'))
