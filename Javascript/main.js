const toggle = document.querySelector('#toggle')
const bgc = document.querySelector('.inner-section')
const nav = document.querySelector('.upper-navbar')
const icon = document.querySelector('.icon')

toggle.addEventListener("click", myfunction);
function myfunction(){
    toggle.classList.toggle('active');
    bgc.classList.toggle('lightbgc');
    nav.classList.toggle('lightbgc');
    icon.classList.toggle('light-icon');
}
