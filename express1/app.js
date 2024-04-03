const express=require("express")
const app=express()
const cors=require("cors")
const port=8000
app.use(cors())
const fs=require("fs")
const home=fs.readFileSync("./home.html")
const about=fs.readFileSync("./about.html")
const contact=fs.readFileSync("./contact.html")
const service=fs.readFileSync("./service.html")
app.get('/',(req,res)=>{
    return res.end("This is Home page")
})
app.get('/about',(req,res)=>{
    return res.end("This is About page")
})
app.get('/contact',(req,res)=>{
    return res.end("This is Contact page")
})
app.get('/service',(req,res)=>{
    return res.end("This is Service page")
})
app.listen(port,()=>{
    console.log("Server Started at port",port)
})