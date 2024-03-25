const express=require("express")
const app=express()
app.get('/',(req,res)=>{
    return res.send("Home Page")
})
app.get('/contact',(req,res)=>{
    return res.send("contact no : +918798767654")
})
app.get('/about',(req,res)=>{
    return res.send("Hello I am Shubhangi")
})
app.listen(8000,()=>{
    console.log("Server Created")
})