

const menuBtn = document.querySelector('.menu');
const navigation = document.querySelector('.navigation');
const navigationLi = document.querySelectorAll('.navigation li a');


menuBtn.addEventListener('click', function () {
    this.classList.toggle('active');
    navigation.classList.toggle('active');
});

navigationLi.forEach(el => {
    el.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        navigation.classList.remove('active');
    });
});



// ============= toggle menu navigation



// ==================== navbar sticky effect

let nav = document.querySelector('.navbar');
let navTopInfo = document.querySelector('.nav-top-info');


window.addEventListener('scroll', function () {
    navTopInfo.classList.toggle('active', scrollY > 0);
    nav.classList.toggle('active', scrollY > 0);
});


// ==================== navbar sticky effect








const btnUp = document.querySelector('.btn-up');

btnUp.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
});



let accordion = document.querySelectorAll('.accordion');
let preview = document.querySelectorAll('.preview');



accordion.forEach(el => {
    el.addEventListener('click', () => {
        accordion.forEach(el => el.classList.remove('active'));
        el.classList.add('active');
    });
});













