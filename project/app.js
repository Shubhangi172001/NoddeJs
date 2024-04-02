const express=require('express')
const app=express()
app.use(cors())
const fs=require("fs")
const home=fs.readFileSync("./home.html");
const about=fs.readFileSync("./about.html");
const contact=fs.readFileSync("./contact.html");
const service=fs.readFileSync("./services.html");
app.get('/',(req,res)=>{
    res.send(home)
})
app.get('/about',(req,res)=>{
    res.send(about)
})
app.get('/contact',(req,res)=>{
    res.send(contact)
})
app.get('/service',(req,res)=>{
    res.send(service)
})
app.listen(80,()=>{
    console.log("Server Started")
})