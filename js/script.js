const displayTime = document.getElementsByClassName("data")[0];
const displayDate = document.getElementsByClassName("data")[1];
let imgName=""
let imie=""

document.querySelector('.addActivity').addEventListener('click',()=>{
  document.querySelector(".name img").src="img/a"+imgName+".png"
  document.querySelector('.activitybtn').src='img/check.png'
  document.querySelector('.activityModal').style.display="none"
})

function zegar() {
  date = new Date();
  mounth = date.getMonth() + 1;
  day = date.getDate();
  hour = date.getHours();
  minute = date.getMinutes();
  displayTime.innerHTML =
    (hour < 10 ? "0" + hour : hour) +
    ":" +
    (minute < 10 ? "0" + minute : minute);
  displayDate.innerHTML =
    (day < 10 ? "0" + day : day) +
    "." +
    (mounth < 10 ? "0" + mounth : mounth) +
    "." +
    date.getFullYear();
}
zegar();
setInterval(zegar, 1000);
nameModal = document.querySelector(".nameModal");
otwarte = false;
document.querySelector(".option").addEventListener("click", () => {
  if (otwarte == false) {
    console.log(otwarte);
    nameModal.style.display = "block";

    otwarte = true;
  }
});

function save() {
  console.log(otwarte);
  nameModal.style.display = "none";
  imie = document.querySelector(".nameModal input").value;
  if (imie == "") {
    document.querySelector(".option span").innerHTML = "add name"
    document.querySelector('.namer').src='img/add.png'
  }else{
    document.querySelector(".option span").innerHTML = imie;
    document.querySelector('.namer').src='img/check.png'
  }

  setTimeout(() => {
    otwarte = false;
  }, 1);
}

document.querySelector(".saver").addEventListener("click", save);
document.addEventListener("keydown", function (event) {
  
  if (event.key == 'Enter' && otwarte == true) {
    console.log(event);
    save();
  }
});

descriptionModal = document.querySelector(".descriptionmodal");
document.querySelectorAll(".option")[1].addEventListener("click", () => {
  descriptionModal.style.display = "block";
});

function closeDesc() {
    descriptionModal.style.display = "none";
}
document.querySelector(".x").addEventListener("click",closeDesc);
document.querySelector(".save").addEventListener("click",closeDesc);

document.querySelector(".save").addEventListener("click", () => {
  document.querySelector(".desc").src = "img/check.png";
  document.querySelector(".desctext").innerHTML="description added"
});


activityModal=document.querySelector('.activityModal')


document.querySelectorAll(".option")[2].addEventListener('click',()=>{
  activityModal.style.display='block';
})

document.querySelector('.x1img').addEventListener('click', ()=>{
  activityModal.style.display='none';
})
let timevalue=30;
let TimeInterval
let timevalueconst
$(function () {
  $("#slider1").roundSlider({
    radius: 80,
    width: 9,
    handleSize: "+8",
    sliderType: "min-rage",
    startAngle: 90,
    value: 30,
    max: 120,
    editableTooltip: false,
    step: 5,
    change: function (args) {
      timevalue=args.value
   } 
  });
});

function startCount(){
  var countdownNumberEl = document.getElementById('countdown-number');

  timevalue*=60;
  var countdown = timevalue;
  TimeInterval=setInterval(function() {
  minutes = countdown/60;
  seconds=countdown-(Math.floor(minutes)*60)
  countdownNumberEl.textContent = (Math.floor(minutes)<10?"0"+Math.floor(minutes):Math.floor(minutes))+":"+(((seconds)<10) ? "0"+seconds:seconds) 
  console.log(Math.floor(minutes)+" "+(countdown-(Math.floor(minutes)*60)))
  countdown = --countdown
  if (countdown<0) {
    clearInterval(TimeInterval);
    animationRun()
    document.querySelector(".doneActivityModal-container div img").src=(imgName=="")?"img/check.png": "img/a"+imgName+".png"
    document.querySelector(".doneActivityModal-container div h3").innerHTML=(imie=="")?"Activity":imie;
    document.querySelector(".doneActivityModal h4 span").innerHTML=timevalue/60
    // document.querySelector(".descriptionSpan").innerHTML=
    document.querySelector(".doneActivityModal").style.display="block"
    document.querySelector(".countdownModal").style.display="none"
    }
  }, 1000);
}

for(i=0;i<document.querySelectorAll(".modalOptions img").length;i++){
  document.querySelectorAll(".modalOptions img")[i].addEventListener('click',function(){
    imgName=this.getAttribute('alt')
    document.querySelector(".modalText").innerHTML=imgName
    document.querySelector(".choosenImg img").src="img/a"+imgName+".png"
  })
}
document.querySelector('.startButton').addEventListener('click',()=>{

  animationRun(0.3)
  document.querySelector(".name span").innerHTML = (document.querySelector(".option span").textContent=="add name") ? "activity":document.querySelector(".option span").textContent;
  document.querySelector(".descriptionText span").innerHTML=(document.querySelector("textarea").value=="")?"no description is here":document.querySelector("textarea").value
  document.querySelector(".countdownModal").style.display='block';

  startCount()
  document.querySelector(".circle").style.animation =" countdown "+timevalue+"s linear  forwards"
})

document.querySelector(".addActivity").addEventListener('click',()=>{
  document.querySelector(".activityBtn").src="../img/check.png"
})
let animation="";
function animationRun(time){
  if (animation!="") {
    document.querySelector('.animation').remove()
  }
  animation=document.createElement('div')
  animation.className="animation"
  animation.style.animationDelay=time+"s";
  let clock=document.createElement('div')
  clock.className="clock"
  document.querySelector('body').appendChild(animation)
  document.querySelector('.animation').appendChild(clock)
}
// animationRun(0.5)

function setTime(time){
  clearInterval(TimeInterval);
  timevalue=time
  startCount()
}
document.querySelector(".closeBtn").addEventListener('click',()=>{
  document.querySelector(".doneActivityModal").style.display="none"
  animationRun(0.2)
})


