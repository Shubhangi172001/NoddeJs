const http=require("http")
const myServer=http.createServer((req,res)=>{
    console.log("Request is received from server")
    res.end("Hello World")
})
myServer.listen(8000,()=>{
    console.log("Server is created at port 8000")
})