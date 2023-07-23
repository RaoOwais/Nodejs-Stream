const { Readable, Writable } = require('stream')

const readableStream = new Readable({
    objectMode: true,
    highWaterMark: 7, //interenl Buffer Memory Set Krne Ke Liye 2byte
    read() { }
})

// // Writeable Function // or write: function(){ } 
// const writeableStream = new Writable({
//     write(s) {
//         console.log('writing: ', s.toString())
//     }
// })

// writeableStream.write('hello')

readableStream.on('data', (chunk) => {  //on hota ahi listener ke liye
    console.log('data: ', chunk)
    // console.log('Data Coming: ', chunk.toString())
    // writeableStream.write(chunk)
})

// readableStream.push("Hello BlackProgrammer")
// console.log(readableStream.push("hello")) //true

//Object Pass

console.log(readableStream.push({
    name: 'Rukesh'
}))



