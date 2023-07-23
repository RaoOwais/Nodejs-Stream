const { Transform } = require('stream')

// TRANSFORM STREAM 
const uppercaseWordProcessing = new Transform({
    transform(chunk, encoding, callback) {
        callback(null, chunk.toString().toUpperCase())
        // console.log('chunk', chunk.toString())
    }
})

module.exports = uppercaseWordProcessing