const displayTime=document.getElementsByClassName("data")[0]
const displayDate=document.getElementsByClassName("data")[1]


function zegar() {
    date=new Date()
    mounth=date.getMonth()+1
    day=date.getDate()
    hour=date.getHours()
    minute=date.getMinutes();
    displayTime.innerHTML=(hour<10?"0"+hour:hour)+":"+(minute<10?"0"+minute:minute)
    displayDate.innerHTML=(day<10?"0"+day:day)+"."+(mounth<10 ?"0"+mounth: mounth)+"."+date.getFullYear();
}
zegar()
setInterval(zegar, 1000);

// $("#slider").roundSlider({
//     sliderType: "min-range",
// });
