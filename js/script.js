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
  document.querySelector(".nameModal").style.display = "none";
  nameModal.style.display = "none";
  imie = document.querySelector(".nameModal input").value;
  if (imie == "") {
    document.querySelector(".option span").innerHTML = "add name"
    document.querySelector('.namer').src='../img/add.png'
  }else{
    document.querySelector(".option span").innerHTML = imie;
    document.querySelector('.namer').src='../img/check.png'
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
  document.querySelector(".desc").src = "../img/check.png";
});

activityOption = document.querySelector(".option")[2];

// $("#slider").roundSlider({
//     sliderType: "min-range",
// });
