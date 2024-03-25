const http=require("http")
const url=require("url")
function ReqHandler(req,res){
    const myUrl=url.parse(req.url)
    switch(myUrl.pathname){
        case '/':res.end("Home Page");break;
        case '/contact':res.end("Contact no - +918907654321");break;
        case '/about':res.end("Hello i am Shubhangi");break;
        default: res.end("404 page not found")
    }
}
const myServer=http.createServer(ReqHandler)
myServer.listen(8000,()=>{
    console.log("Server Created")
})