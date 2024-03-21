const fs=require("fs")
//fs.writeFileSync("./student.txt","Shubhangi kompelli")
let filename="./institute.txt"
let content="Shubhangi Kompelli"
fs.writeFile(filename,content,()=>{
    console.log("File created successfully name=",filename,"and content written in file =",content)
})