const { Transform } = require('stream')
// TRANSFORM STREAM 
const replaceWordProcessing = new Transform({
    transform(chunk, encoding, callback) {
        // replaceWordProcessing.emit('error', new Error('Something Went Wrong'))
        const finalString = chunk.toString().replaceAll(/console/gi, 'print');
        callback(null, finalString)
        // console.log('chunk', chunk.toString())
    }
})

module.exports = replaceWordProcessing;