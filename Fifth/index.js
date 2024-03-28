const http=require("http")
const fs=require("fs")
const Server=http.createServer((req,res)=>{
    const home=fs.readFileSync("./home.html")
    const about=fs.readFileSync("./about.html")
    const contact=fs.readFileSync("./contact.html")
    const services=fs.readFileSync("./services.html")
    console.log(req.url)
    //res.end("Hello World")
    if(req.url==='/'){
        res.end(home)
    }
    else if(req.url==='/'){
        res.end(home)
    }
    else if(req.url==='/contact'){
        res.end(contact)
    }
    else if(req.url==='/about'){
        res.end(about)
    }
    else if(req.url==='/services'){
        res.end(services)
    }
    else{
        res.end("404 : Page not found")
    }
})
Server.listen(8000,()=>{
    console.log("Server Started at port 8000")
})