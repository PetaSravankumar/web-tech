let btn=document.getElementById("btn")
let result=document.getElementById("reult")
btn.addEventListener("click",()=>{
    let city=document.getElementById("input").value
    let apiKey="bab11adb04e51cf78a2a79e2720b22a0"
    let api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
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