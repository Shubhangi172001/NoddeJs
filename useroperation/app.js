const express=require("express")
const app=express()
const fs=require("fs")
const users=require("./MOCK_DATA.json")
const cors=require("cors")
app.use(cors())
app.get('/users',(req,res)=>{
    // return res.end(users)
    let content="<ol>"
    for(let i=0;i<users.length;i++){
        content=content+`\n<li><br>Id:${users[i].id}<br>\tFirst Name:${users[i].first_name}<br>\tLast Name:${users[i].last_name}</li>`
    }
    content=content+"</ol>"
    return res.send(content)
})
app.get('/usersid',(req,res)=>{
    const id=(number)(req.body.id);
    for(let i=0;i<users.length;i++){
        if(id==users[i].id){
            return res.send(users[i])
        }
    }
    return res.send("Record mot Found")
})
app.listen(80,()=>{
    console.log("Server started")
})
