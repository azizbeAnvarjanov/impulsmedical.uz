

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


// video box ================
let playBtn = document.querySelector('.play-btn');
let video = document.querySelector('video');
let videoBox = document.querySelector('.video-box');
playBtn.innerHTML = '<i class="fa-solid fa-circle-play"></i>'

video.removeAttribute('controls');


function video_play() {
    if (video.paused) {
        video.play();
        playBtn.innerHTML = '<i class="fa-solid fa-circle-pause"></i>';
        video.toggleAttribute('controls');
        setTimeout(() => {
            playBtn.style.opacity = 0;
            playBtn.style.visibility = 'hidden'
        }, 5000);
    } else {
        playBtn.innerHTML = '<i class="fa-solid fa-circle-play"></i>';
        video.pause();
        video.removeAttribute('controls');
    }
}






playBtn.addEventListener('click', video_play)





// video box ================










// =========================== galereya



let galereyaBox = document.querySelector('.galereya-box');
let imgPreview = document.querySelector('.img-preview');
let imgPreviewImg = document.querySelector('.img-preview img');
let closeBtn = document.querySelector('.closeBtn');
let body = document.querySelector('body');

galereyaBox.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        imgPreview.classList.add('active');
        body.classList.add('active');
        imgPreviewImg.src = e.target.src; 
    }
});


closeBtn.addEventListener('click', () => {
    imgPreview.classList.remove('active');
    body.classList.remove('active');
});



// =========================== galereya
