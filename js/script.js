const displayTime = document.getElementsByClassName("data")[0];
const displayDate = document.getElementsByClassName("data")[1];

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


for(i=0;i<document.querySelectorAll(".modalOptions img").length;i++){
  document.querySelectorAll(".modalOptions img")[i].addEventListener('click',function(){
    imgName=this.getAttribute('alt')
    document.querySelector(".modalText").innerHTML=imgName
    document.querySelector(".choosenImg img").src="../img/a"+imgName+".png"
  })
}
document.querySelector('.startButton').addEventListener('click',()=>{
  document.querySelector(".name span").innerHTML = (document.querySelector(".option span").textContent=="add name") ? "activity":document.querySelector(".option span").textContent;
  document.querySelector(".descriptionText span").innerHTML=(document.querySelector("textarea").value=="")?"no description is here":document.querySelector("textarea").value

  document.querySelector(".countdownModal").style.display='block';
  var countdownNumberEl = document.getElementById('countdown-number');

  console.log("open")
  timevalue*=60;
  var countdown = timevalue*60;

  countdownNumberEl.textContent = countdown;

  var TimeInterval=setInterval(function() {
  console.log("working :<")
  countdown = --countdown <= 0 ? 0 : countdown;
  countdownNumberEl.textContent = countdown;
  if (countdown==0) {
    clearInterval(TimeInterval);
  }
  }, 1000);

  document.querySelector(".circle").style.animation =" countdown "+timevalue+"s linear  forwards"
})



