[-] Introduction
[-] Streams are not ONLY for Streaming videos/Audios
[-] Understanding streams and Buffers
[-] Create http server
const PORT = process.env.PORT || 5700;
server.listen(PORT, () => {
    console.log(`Listining on PORT ${PORT}`)
})
[-] Downloading big files from server (a good way and a bad way)

     //Downloading Big File Bad Way
    // const file = fs.readFileSync('jS.pdf');
    // res.writeHead(200, { 'content-Type': 'tsxt/pdf' })
    // return res.end(file)

       //Downloading Big File Good Way (Streams)
        const readableStream = fs.createReadStream('jS.pdf')
        res.writeHead(200, { 'content-Type': 'tsxt/pdf' })

    //readableStream -> Writeable Stream  pipe methdo
    readableStream.pipe(res);
[-] copy files on file system (a good way and a bad way)
//Copy Big File Good Way (Steams)
    const readStream = fs.createReadStream('jS.pdf')
    const WriteStream = fs.createWriteStream('outptu.pdf')

    readStream.on('data', (chunk) => {
        console.log('Chunk:', chunk.toString())
        WriteStream.write(chunk)
    })

  // // Copy Big File using bad Way
    // const file = fs.readFileSync('jS.pdf')
    // fs.writeFileSync('output.pdf', file) //if file does not exist is create
    // res.end()
[-] create custom steams (Readable/ Writeble/Transform)
const readableStream = new Readable({
    highWaterMark: 2, //interenl Buffer Memory Set Krne Ke Liye 2byte
    read() { }
})

readableStream.on('data', (chunk) => {  //on hota ahi listener ke liye
    console.log('Data Coming: ', chunk.toString())
})

// readableStream.push("Hello BlackProgrammer")
console.log(readableStream.push("h")) //true
//Writeable Stream
const writeableStream = new Writable({
    write(s) {
        console.log('writing: ', s.toString())
    }
})

writeableStream.write('hello')
//processing
    const sampleFileStream = fs.createReadStream('js.txt')
    const outputWriteableStream = fs.createWriteStream('jsoutput.txt')

    sampleFileStream.on('data', (chunk) => {
        console.log('data received: ', chunk.toString())
        //Proces
        // const upperCaseString = chunk.toString().toUpperCase()
        // const finalString = upperCaseString.replaceAll(/console/gi, 'print')
        const finalString = chunk.toString().replaceAll(/console/gi, 'print').toUpperCase();
        //writeable
        outputWriteableStream.write(finalString)

    })

    res.end()
[-] String processing (a good way and a bad way)
[-] pipes
[-] Types of Streams
[-] Object mode in Streams
[-] Handle error in streams
