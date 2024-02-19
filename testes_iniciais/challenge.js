const getFlag = require("./getFlag");

console.log(process.argv)
console.log(`Oi ${getFlag('--name')}. ${getFlag('--greetings')}`)

