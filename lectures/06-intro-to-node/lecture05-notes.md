# Terminology
  - Buffer
    - Temporary storage location for data in the process of being moved from one place to another.
    - Intentionally kept small.
  - Stream
    - A sequence of pieces data made available over time that eventually form into a whole.
    - Can be from one computer to another or from one process to another inside the same computer
      - Popular streaming services: Netflix, Hulu, YouTube, Spotify.
  - Chunk
    - A piece of data being sent through a stream.
  - Pipe
    - A connection between two streams.
  - Binary Data
    - Data stored in binary (0s and 1s).

# Buffers in Node
  - Buffers
    - Created on the C++ side of Node, and is made available to the JavaScript side.
    - Available globally in Node without a require statement
  - Buffer Content
    - Buffers hold raw binary data, but we can apply encodings in order to convert the binary data into forms that make sense to people.
    - Despite being stored as binary data, when raw buffer content is logged, it logs as hexadecimal.
      - Any eight digit binary number can be stored as a two digit hexadecimal number.
    - <Buffer 54 68 69 73 20 69 73 20 73 6f 6d 65 20 74 65 78 74 0a>
  - Buffer Creation
    - Look at [Node buffer docs](https://nodejs.org/dist/latest-v6.x/docs/api/buffer.html)
    - Old creation methods at top are deprecated, but often, if you look at them, they will tell you what method(s) have replaced them.
    - Node has multiple methods of buffer creation - look through docs at different constructors
    ```js
    let buf1 = Buffer.from('Buffer Demo');
    let buf2 = Buffer.from(buf1);
    ```
  - More Buffer Examples
    - To string, default encoding is UTF8
    - To JSON makes a JSON object with two properties, the type and data.
    - You can use buffers similarly to arrays and access it via positional notation
    - You can write to buffers, however the buffer is limited in size, so writing to it causes it to loop around and overwrite content.
      - This is because it's assumed that as the buffer fills up, you're pulling data out and processing it elsewhere.
    ```js
    let buf1 = Buffer.from('Buffer Demo');

    console.log(buf1);
    console.log(buf1.toString());
    console.log(buf1.toJSON());
    console.log(buf1[2]);

    buf1.write(' No 1');
    console.log(buf1.toString());
    ```
  - Buffer Use
    - We won't often create buffers ourselves, but rather, buffers are something that we receive from another operation and have to handle.
    - However, we need to know what they are and how to use them.

# Streams in Node
  - Streams and Data
    - Data is split into chunks and sent through a stream.
    - Data isn't being downloaded in its entirety before being processed or operated upon in some manner.
      - You're watching movies on Netflix and its being processed, displayed to you, as its downloading.
      - When you're done streaming, the data is not on your computer.
    - Often used with a buffer so that the waiting process has enough data to operate on before passing that data along and collecting more.
      - YouTube buffering.
  - Event Emitter
    - The Stream module in Node inherits from the event emitter.
    - Any streams created have access to methods such as on or emit.
  - Types of Streams
    - Writable  Streams
      - Streams to which data can be written.
    - Readable Streams
      - Streams from which data can be read.
    - Duplex Streams
      - Streams that are both readable and writable.
    - Transform Streams
      - Streams that are both readable and writable that can also modify data as it is read or written.
    - These types of streams are all from the perspective of node.
  - Working with Streams
    - Instead of working directly with Stream, or even Readable, Writable, etc., when using streams, you create your own custom stream object that will inherit from the type of stream you want to create.
    - These custom streams are usually created for the purpose of accomplishing a specific task, and via inheritance, it will have all the functionality of the built in stream and specific stream type, as well as the event emitter.
  - Readable Stream Demo
    - Look at [createReadStream in the file system module](https://nodejs.org/dist/latest-v6.x/docs/api/fs.html#fs_fs_createreadstream_path_options).
      - Takes two parameters, path and options, and returns a [ReadStream object](https://nodejs.org/dist/latest-v6.x/docs/api/fs.html#fs_class_fs_readstream).
      - The [Readable Stream](https://nodejs.org/dist/latest-v6.x/docs/api/stream.html#stream_class_stream_readable) listens for various events, we're concerned with the [data event](https://nodejs.org/dist/latest-v6.x/docs/api/stream.html#stream_event_data).
      - The callback expected by the data event will be passed a parameter called chunk.
    - Create a large text file using [a lorem ipsum generator](http://www.lipsum.com/) and generate a large amount of text (60000 bytes or so)
    - Because the event emitter is in our inheritance chain, once we have our stream object created, we can listen for events using the on method. We want to make sure to comply with the documentation we looked at above.
    - The on method itself accepts two argument, a string that is the name of the event we're listening for, and a callback function.
    - The readable stream will now fill a buffer with the contents of the file that it's reading, in our case, lorem.txt.
      - If the contents of the file is smaller or the same size as the buffer, you'll get all of the data at once. But if there is more data in the file than the buffer can hold, you'll get the file broken up into pieces the size of the buffer.
        - It will read the text file until the buffer is full, and emit the data event, run the listener callbacks, then start the process again, reading the file where it left off, fill up the buffer, emit the data event, run the listener callbacks, and so on until it finishes the file.
        - When it emits the data event and calls the listener callbacks, it will pass the data in the buffer to that function.
        - The file read stream default buffer size is 64 kilobytes, so enough to read the whole file.
    ```js
    let fs = require('fs');

    let filename = 'lorem.txt';

    let readable = fs.createReadStream(filename);

    readable.on('data', function(chunk) {
      console.log(chunk);
    });
    ```
    - We can use options to specify an encoding.
    ```js
    let fs = require('fs');

    let filename = 'lorem.txt';

    let options = {
      encoding: 'utf8'
    }

    let readable = fs.createReadStream(filename, options);

    readable.on('data', function(chunk) {
      console.log(chunk.length);
      console.log(chunk);
    });
    ```
    - We can also adjust the size of buffer using the highWaterMark option by using whatever size we want multiplied by 1024.
    ```js
    let fs = require('fs');

    let filename = 'lorem.txt';

    let options = {
      encoding: 'utf8',
      highWaterMark: 2 * 1024
    }

    let readable = fs.createReadStream(filename, options);

    readable.on('data', function(chunk) {
      console.log(chunk.length);
    });
    ```
- By making the buffer size progressively smaller, we can see the behavior of the read stream.

- We can capture the entire file by making a variable to hold the contents and writing every chunk to it
    ```js
    let fs = require('fs');

    let filename = 'lorem.txt';

    let fileData = '';

    let readable = fs.createReadStream(filename);

    readable.on('data', function(chunk) {
      fileData += chunk;
    });

    readable.on('end', function() {
        console.log(fileData);
    });
    ```
  - Writable Stream Demo
    - Copy the contents of the file we just read into a file named loremcopy.txt.
    ```js
    let fs = require('fs');

    let filename = 'lorem.txt';
    let copyfilename = 'loremcopy.txt';

    let options = {
      encoding: 'utf8',
      highWaterMark: 8 * 1024
    }

    let readable = fs.createReadStream(filename, options);
    let writeable = fs.createWriteStream(copyfilename);

    readable.on('data', function(chunk) {
      writeable.write(chunk.length);
    });
    ```

# Pipes in Node
  - Pipes and Streams
    - Pipes are used for connecting a Readable Stream to Writable Stream, sending the data from one to the other.
    - If the source of the Readable Stream is larger than the buffer, the data transfer will happen in chunks.
  - Pipe Chaining
    - If the Writable Stream is also Readable (Duplex Stream), it can be piped again to another Writable Stream.
    - Pipes can be chained indefinitely so long as you start out with a stream that is readable, and subsequent streams be both writable and readable.
  - Pipe Demo 1
    - Pipe is a [method available on Readable Streams](https://nodejs.org/dist/latest-v6.x/docs/api/stream.html#stream_readable_pipe_destination_options).
      - This function returns a value that is the destination, the Writable stream to where we have piped our data.
    ```js
    let fs = require('fs');

    let filename = 'lorem.txt';
    let copyfilename = 'loremcopypipe.txt';

    let options = {
      encoding: 'utf8',
      highWaterMark: 8 * 1024
    }

    let readable = fs.createReadStream(filename, options);
    let writeable = fs.createWriteStream(copyfilename);

    readable.pipe(writeable);
    ```
  - Pipe Chain Demo
    - We want to copy the contents of, and separately, create a zipped version of the file.
    - The zlib library allows up access to the gzip zipping mechanisms within Node via a Transform Stream.
    - Remember, the pipe method returns a stream that we can call pipe on again.
    ```js
    let fs = require('fs');
    let zlib = require('zlib');

    let filename = 'lorem.txt';
    let copyfilename = 'loremchainpipe.txt';
    let zippedfilename = 'lorem.zip';

    let options = {
      encoding: 'utf8',
      highWaterMark: 8 * 1024
    }

    let readable = fs.createReadStream(filename, options);
    let writeable = fs.createWriteStream(copyfilename);
    let compressed = fs.createWriteStream(zippedfilename);
    let gzip = zlib.createGzip();

    readable.pipe(writeable);
    readable.pipe(gzip).pipe(compressed);
    ```
  - Pipe Exercise
    - Unzip a gzip file and write its contents to a few file.
    ```js
    let fs = require('fs');
    let zlib = require('zlib');

    let filename = 'text.txt';
    let zippedfilename = 'lorem.zip';

    let compressed = fs.createReadStream(zippedfilename);
    let uncompressed = fs.createWriteStream(filename);
    let gzip = zlib.createGunzip();

    compressed.pipe(gzip).pipe(uncompressed);
    ```
