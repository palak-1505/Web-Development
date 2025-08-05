const clock = document.querySelector('#clock');
const date = document.querySelector('#date');
const day = document.querySelector('#day');

setInterval(function(){
    let time = new Date();
    clock.innerHTML=time.toLocaleTimeString();
    date.innerHTML=time.toLocaleDateString();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let Day = weekday[time.getDay()];

    day.innerHTML=Day.toString();
},1000)
    

;

