function showFunc(){
    const showBtn=document.getElementById("showBtn");
    const result=document.getElementById("result");
    showBtn.addEventListener('click',()=>{
        fetch("http://localhost/users")
        .then(Response=>{return Response.text()})
        .then(data=>result.innerHTML=data)
        .then(error=>console.error(error))
    })
}
function formFunc(){
    const userForm=document.getElementById("userForm");
    const idInput=document.getElementById("idInput");
    const id=idEntered.value;
    const reqBody={id:idEntered}
    const result=document.getElementById("result")
    fetch("http://localhost/usersid",{body:{"id":id}})
    .then(Response=>{return Response.text})
    .then(data=>result.innerHTML=data)
    .then(error=>console.error(error))
}