let btn=document.getElementById("btn")
let result=document.getElementById("reult")
btn.addEventListener("click",()=>{
    let city=document.getElementById("input").value
    let apiKey=""
    let api=``
    fetch(api)
    .then(x=>x.json())
    .then(y=>{
        console.log(y)
        if(y.cod==="404"){
            result.innerHTML="<h2>City Not Found</h2>"
        }
        else{
            result.innerHTML=`
            <h3>${y.name}, ${y.sys.country}</h3>
            <p>Temperature : ${y.main.temp}</p>
            <p>Wind Speed : ${y.wind.speed}</p>
            <p>Description:${y.weather[0].description}</P
            `
        }    
    })
    .catch(err=>console.log(err))
})