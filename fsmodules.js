const fs=require('fs');//access.import file systems in node.js
fs.readFile('index.js','utf-8',(err,data)=>{
if(err) return console.error(err);//if error occurs, it will be printed
console.log(data);//if no error, it will print the data from index.js
    console.log(err,data);
});



// Class FileHandle
// Class fs.Dir
// Class fs.Dirent
// Class fs.FSWatcher
// Class fs.ReadStream
// Class fs.StatFs
// Class fs.Stats
// Class fs.StatWatcher
// Class fs.WriteStream
// dir.close()
// dir.close()
// dir.closeSync()
// dir.path
// dir.read()
// dir.read()
// dir.readSync()
// dir[Symbol.asyncDispose]()
// dir[Symbol.asyncIterator]()
// dir[Symbol.Dispose]()
// dirent.isBlockDevice()
// dirent.isCharacterDevice()
// dirent.isDirectory()
// dirent.isFIFO()...etc,