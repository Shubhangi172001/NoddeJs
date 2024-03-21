const http=require("http")
const url=require("url")
const fs=require("fs")

const myServer=http.createServer((req,res)=>{
    //res.end("Hello From Server")
    const myUrl=url.parse(req.url)
    console.log(myUrl)
    switch(myUrl.pathname){
        case '/':res.end("Home Page");break;
        case '/contact':res.end("Contact no:9087654321\nEmail id:abd@gmail.com");break;
        case '/about':res.end("I am Student of Btech ELN");break;
        default:res.end("404 Page not Found")
    }
    // console.log("Protocol=",myUrl.protocol)
    // console.log("domain=",myUrl.domain)
    // console.log("Pathname=",myUrl.Pathname)
    // console.log("Query=",myUrl.Query)
})
myServer.listen(8000,()=>{
    console.log("Server Created")
})