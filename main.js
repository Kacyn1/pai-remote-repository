const hamburger = document.querySelector('.hamburger');

const navBar = document.querySelector('.nav-bar');

const handleClick = () => {
    hamburger.classList.toggle('hamburger-active');
    navBar.classList.toggle('nav-active');
    
}

hamburger.addEventListener('click', handleClick);

window.addEventListener('click', e => {
    if(!hamburger.contains(e.target) && !navBar.contains(e.target)){
        hamburger.classList.remove('hamburger-active');
        navBar.classList.remove('nav-active');
    }
})

var id=0;
var zdjecia = document.querySelectorAll('#imgs img');
var memy = document.getElementById('imgs');
function slider() {
    id++;
    if(id>=zdjecia.length) {
        id=0;
    }
    memy.style.transform=`translateX(${-id*1000}px)`;
}
setInterval(slider,2000);