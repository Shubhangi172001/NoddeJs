function homeFunc(){
    const result=document.getElementById("result")
    let homeBtn=document.getElementById("menu1")
    homeBtn.addEventListener('click',()=>{
        fetch('http://localhost')
        .then(responce=>console.log(responce))
        .then(data=>console.log(data))
        .then(error=>console.error(error))
    })
}

function aboutFunc(){
    const result=document.getElementById("result")
    let homeBtn=document.getElementById("menu1")
    homeBtn.addEventListener('click',()=>{
        fetch('http://localhost')
        .then(responce=>console.log(responce))
        .then(data=>console.log)
        .then(error=>console.error(error))
    })
}