const http = require('http')
const fs = require('fs')
const { Transform, pipeline } = require('stream')
const replaceWordProcessing = require('./repalceWordProcessor')
const uppercaseWordProcessing = require('./uppercaseWordProcessor')
const { error } = require('console')


const server = http.createServer((req, res) => {
    // Write Code Here
    if (req.url !== '/') {
        return res.end();
    }
    // //Downloading Big File Bad Way
    // const file = fs.readFileSync('jS.pdf');
    // res.writeHead(200, { 'content-Type': 'tsxt/pdf' })
    // return res.end(file)

    // //Downloading Big File Good Way (Streams)
    // const readableStream = fs.createReadStream('jS.pdf')
    // res.writeHead(200, { 'content-Type': 'tsxt/pdf' })

    // //readableStream -> Writeable Stream  pipe methdo
    // readableStream.pipe(res);
    // console.log('request coming', req.url)

    // // Copy Big File using bad Way
    // const file = fs.readFileSync('jS.pdf')
    // fs.writeFileSync('output.pdf', file) //if file does not exist is create 
    // res.end()

    // //Copy Big File Good Way (Steams)
    // const readStream = fs.createReadStream('jS.pdf')
    // const WriteStream = fs.createWriteStream('outptu.pdf')

    // readStream.on('data', (chunk) => {
    //     console.log('Chunk:', chunk.toString())
    //     WriteStream.write(chunk)
    // });


    // // String Processing audio,Video anyfile Processing
    // const sampleFileStream = fs.createReadStream('js.txt')
    // const outputWriteableStream = fs.createWriteStream('jsoutput.txt')


    //PIPELINE METHOD
    // pipeline(sampleFileStream,
    //     replaceWordProcessing,
    //     uppercaseWordProcessing,
    //     outputWriteableStream,
    //     (err) => {
    //         if (err) {
    //             console.log('Error Handling Here...', err)
    //         }
    //     }
    // )

    // // TRANSFORM STREAM 
    // const replaceWordProcessing = new Transform({
    //     transform(chunk, encoding, callback) {
    //         const finalString = chunk.toString().replaceAll(/console/gi, 'print').toUpperCase();
    //         callback(null, finalString)
    //         // console.log('chunk', chunk.toString())
    //     }
    // })

    // sampleFileStream.on('data', (chunk) => {
    //     console.log('data received: ', chunk.toString())
    //     //Proces
    //     // const upperCaseString = chunk.toString().toUpperCase()
    //     // const finalString = upperCaseString.replaceAll(/console/gi, 'print')
    //     const finalString = chunk.toString().replaceAll(/console/gi, 'print').toUpperCase();
    //     //writeable
    //     outputWriteableStream.write(finalString)

    // })


    // //PIPE METHOD leftside hone hai readable stream and rightside ho writeable stream
    // sampleFileStream
    //     .pipe(replaceWordProcessing)
    //     .on('error', (err) => {
    //         console.log(err)
    //     })
    //     .pipe(uppercaseWordProcessing)
    //     .on('error', (err) => {
    //         console.log(err)
    //     })
    //     .pipe(outputWriteableStream)
    //     .on('error', (err) => {
    //         console.log(err)
    //     })

    res.end()


})

const PORT = process.env.PORT || 5700;
server.listen(PORT, () => {
    console.log(`Listining on PORT ${PORT}`)
})