function homeFunc(){
    const homeBtn=document.getElementById("homeBtn")
    const result=document.getElementById("result")
    homeBtn.addEventListener('click',()=>{
        fetch('http://localhost:8000')
        .then(Response=>{return Response.text()})
        .then(data=>result.innerHTML=data)
        .then(error=>console.error(error))
    })
}
function aboutFunc(){
    const aboutBtn=document.getElementById("aboutBtn")
    const result=document.getElementById("result")
    aboutBtn.addEventListener('click',()=>{
        fetch('http://localhost:8000/about')
        .then(Response=>{return Response.text()})
        .then(data=>result.innerHTML=data)
        .then(error=>console.error(error))
    })
}
function contactFunc(){
    const contactBtn=document.getElementById("contactBtn")
    const result=document.getElementById("result")
    contactBtn.addEventListener('click',()=>{
        fetch('http://localhost:8000/contact')
        .then(Response=>{return Response.text()})
        .then(data=>result.innerHTML=data)
        .then(error=>console.error(error))
    })
}function serviceFunc(){
    const serviceBtn=document.getElementById("serviceBtn")
    const result=document.getElementById("result")
    serviceBtn.addEventListener('click',()=>{
        fetch('http://localhost:8000/service')
        .then(Response=>{return Response.text()})
        .then(data=>result.innerHTML=data)
        .then(error=>console.error(error))
    })
}