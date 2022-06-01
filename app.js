


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






let imgs = document.querySelectorAll('header .img');

let currSlide = 0;

function slider(el) {
    imgs.forEach(el => el.classList.remove('active'));
    imgs[el].classList.add('active');
}

setInterval(() => {
    currSlide++
    if (currSlide === imgs.length) {
        currSlide = 0
    }
    slider(currSlide);
}, 6000);







// hamkor slider 

$(document).ready(function () {

    $('.hamkor-card').slick({
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        autoplay: true,
        slidesToScroll: 1,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

});


// hamkor slider 





window.addEventListener('scroll', () => {
    let reveals = document.querySelectorAll('.reveal');
    reveals.forEach(item => {
        let revelPosition = item.getBoundingClientRect().top;
        let revealSection = window.innerHeight / 1;

        revelPosition < revealSection ? item.classList.add('active') : item.classList.remove('active');
    });
});

