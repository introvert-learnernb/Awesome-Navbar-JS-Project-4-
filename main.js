const menuBtn = document.querySelector('.toggle');
const menu = document.querySelector('.links');

menuBtn.addEventListener('click', ()=>{
    menu.classList.toggle('show__links');
})