const fs=require("fs")
let content=fs.readFileSync("./text1.txt","utf-8")
console.log("content of file:",content)
fs.appendFileSync("./text1.txt","All The Best")