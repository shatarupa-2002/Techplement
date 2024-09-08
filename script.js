let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

// Toggle menu when the button is clicked
menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');  // Toggle icon between bars and X
    navbar.classList.toggle('active');     // Toggle the active class to show/hide the navbar
}

// Ensure the menu closes when scrolling
window.onscroll = () => {
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".Course-slider" ,{
    spaceBetween:20,
    grabCursor:true,
    loop:true,


    pagination : {
        el: ".swiper-pagination",
        clickable:true,
    },
    breakpoints: {
        450: {
            slidesPerView:1,
        },
        630: {
            slidesPerView:2,
        },
        750: {
            slidesPerView:3,
        },
    },
});

var swiper = new Swiper(".Teachers-slider" ,{
    spaceBetween:20,
    grabCursor:true,
    loop:true,


    pagination : {
        el: ".swiper-pagination",
        clickable:true,
    },
    breakpoints: {
        450: {
            slidesPerView:1,
        },
        630: {
            slidesPerView:2,
        },
        750: {
            slidesPerView:3,
        },
    },
});