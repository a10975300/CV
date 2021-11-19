window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})


// 文字特效
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

// 點，特效
var isShow = false;
function show22() {
    if(!isShow) {
        isShow = true;
       document.getElementById('hide22').style.display='';
        document.getElementById('hide33').style.display='none';
       document.getElementById('hide44').style.display='none';
       document.getElementById('show22').innerText = "活動緣起與目的";
   }
   else {
       isShow = false;
       document.getElementById('hide22').style.display='none';
       document.getElementById('show22').innerText = "活動緣起與目的";
   }
}

var isShow = false;
function show33() {
    if(!isShow) {
        isShow = true;
       document.getElementById('hide33').style.display='';
       document.getElementById('hide22').style.display='none';
       document.getElementById('hide44').style.display='none';
       document.getElementById('show33').innerText = "活動規劃";
   }
   else {
       isShow = false;
       document.getElementById('hide33').style.display='none';
       document.getElementById('show33').innerText = "活動規劃";
   }
}


var isShow = false;
function show44() {
    if(!isShow) {
        isShow = true;
        document.getElementById('hide33').style.display='none';
       document.getElementById('hide22').style.display='none';
       document.getElementById('hide44').style.display='';
       document.getElementById('show44').innerText = "活動議程";
   }
   else {
       isShow = false;
       document.getElementById('hide44').style.display='none';
       document.getElementById('show44').innerText = "活動議程";
   }
}
