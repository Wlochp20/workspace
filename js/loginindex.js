openn=false
document.querySelector(".register").addEventListener('click',()=>{
    if (openn==false) {
        document.querySelector(".ac").style.display='block';
        document.querySelector('.arrow').src="../img/upArrow.png"
        document.querySelector('.register').style.borderRadius='15px 15px 0 0';
        openn=true
    }else{
        document.querySelector(".ac").style.display='none';
        document.querySelector('.arrow').src="../img/downArrow.png"
        document.querySelector('.register').style.borderRadius='15px';
        openn=false
    }
})
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
            console.log(timevalue);
     } 
    });
  });

