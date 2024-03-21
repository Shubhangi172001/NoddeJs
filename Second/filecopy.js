const fs=require("fs")
fs.cpSync("./temp.txt","./student.txt")
fs.unlinkSync("./temp.txt")