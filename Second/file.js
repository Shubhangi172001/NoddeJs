const fs=require("fs")
//create file
//fs.writeFileSync("./test.txt","Hello World")
//create file async 
let filename="./text1.txt"
let content="Hello World"
fs.writeFile(filename,content,()=>{
    console.log("File created successfully name=",filename,"and content written in file =",content)
})