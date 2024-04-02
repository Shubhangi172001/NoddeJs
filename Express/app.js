// const express=require('express')
// const app=express()
// app.get('/',(req,res)=>{
//     res.send("Home Page")
// })
// app.get('/about',(req,res)=>{
//     res.send("About Page")
// })
// app.post('/',(req,res)=>{
//     res.send("Post Method Request")
// })
// app.listen(80,()=>{
//     console.log("Server Started")
// })

const express=require('express')
const app=express()
const fs=require("fs")
const page=fs.readFileSync("./page.html");
const home=fs.readFileSync("./home.html");
const about=fs.readFileSync("./about.html");
const contact=fs.readFileSync("./contact.html");
const service=fs.readFileSync("./services.html");
app.get('/',(req,res)=>{
    res.send(page)
})
app.get('/home',(req,res)=>{
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