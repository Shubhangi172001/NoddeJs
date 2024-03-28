const express=require("express")
const users=require("./MOCK_DATA.json")
const app=express()
app.get('/users',(req,res)=>{
    return res.json(users)
})
// app.get('/users/:id',(req,res)=>{
//     let id=req.params.id;
//     const user=users.find(user=>id===users.id)
//     //return res.send("user with id 1")
//     return res.json(user)
// })
app.get('/users/:first_name',(req,res)=>{
    let first_name=req.params.first_name;
    const user=users.find(user=>(first_name===users.first_name))
    // console.log()
    // return res.send("user with fname shubhangi")
    return res.json(user)
})
// app.post('/users',(req,res)=>{
//     return res.send("This is Post Method")
// })
app.listen(8000,()=>{
    console.log("Server Created")
})