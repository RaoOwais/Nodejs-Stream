const fs = require('fs')

//termianl wala file per show karta hai
// const writeableStream = fs.createWriteStream('log.txt')
// process.stdin.pipe(writeableStream)

//File ko Terminal Per Show Karta hai
const readableStream = fs.createReadStream('log.txt')
readableStream.pipe(process.stdout)