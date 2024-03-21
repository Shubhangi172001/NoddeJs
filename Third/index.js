const http=require("http")

http.createServer((req,res)=>{
    console.log("New Request Arrived")
    res.end("Hello World")
})