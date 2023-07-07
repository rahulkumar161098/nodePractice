const { warn, log } = require('console')
const fs = require('fs')
const path= require('path')

const dirPath= path.join(__dirname, 'files')  ;  //check dir path

// for(i=0; i<5; i++){
//     fs.writeFileSync(dirPath+"/hello"+i+".txt", 'just a simple file')
// }

// console log the directory
// fs.readdir(dirPath, (err, files)=>{
//     // console.log(files);
//     files.forEach((item)=>{
//         console.warn(item);
//     })
// })

// console.warn(dirPath);

// fs.writeFileSync('apple.text', 'this is created by code')

// curd in file system

// read files 
const filePath=`${dirPath}/hello0.txt` 
// fs.readFile(filePath, 'utf8', (err, item)=>{
//     console.log(item);
// })

// update file
// fs.appendFile(filePath, ' this is hello0.txt',(err)=>{
//     if(!err) console.log('updated');
// })

// file rename
// fs.rename(filePath, `${dirPath}/hello.txt`, (err)=>{
//     if(!err) console.log('file name is updated');
// })

// delete file
fs.unlinkSync(`${dirPath}/hello.txt`)