// jquery
$(document).ready(() => {
  // toggle menu
  $(".menu-btn").click(() => {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
  $(".navbar .nav-link").click(() => {
    $(".navbar .menu").removeClass("active");
    $(".menu-btn i").removeClass("active");
  });


//video play-pause btn
    $(".play-btn .play-img").on("click",()=>{
        $(".play-btn .play-img").fadeOut();
        $(".play-btn .pause-img").fadeIn();
        $("#dentist-video")[0].play();
    })
    $(".play-btn .pause-img").on("click",()=>{
        $(".play-btn .pause-img").fadeOut();
        $(".play-btn .play-img").fadeIn();
        $("#dentist-video")[0].pause();
        if ("#dentist-video"[0].end()) {
          $(".play-btn .pause-img").fadeIn();
          $(".play-btn .play-img").fadeOut();
        }
    })
    
    // carousel
    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        600: {
          items: 1,
          nav: false,
        },
        700: {
          items: 2,
          nav: false,
        },
        1000: {
          items: 2,
          nav: false,
        },
        1200: {
          items: 2,
          nav: false,
        },
        1600: {
          items: 2,
          nav: false,
        },
      },
    });
});


// slider
let slider = document.querySelector(".slider-items").children;
let prevSlide = document.querySelector(".left-slide");
let nextSlide = document.querySelector(".right-slide");
let index = 0;
let totalSlides = slider.length;

nextSlide.onclick = function(){
    console.log("next click");
    next("next");
}
prevSlide.onclick = function(){
    console.log("prev click");
    next("next");
}

function next(direction){
    if(direction=="next"){
        index++;
        if(index==totalSlides){
            index=0;
        }
    }
    else{
        if(index==0){
            index=totalSlides-1
        }
        else{
            index--;
        }
    }
    for(i=0;i<slider.length;i++){
        slider[i].classList.remove("active")
    }
    slider[index].classList.add("active");
}

// Accordion
const accordionitemheaders = document.querySelectorAll(
  ".accordion-item-header"
);
accordionitemheaders.forEach((accordionitemheaders) => {
  accordionitemheaders.addEventListener("click", (event) => {
    accordionitemheaders.classList.toggle("active");
    const accordionitembody = accordionitemheaders.nextElementSibling;
    if (accordionitemheaders.classList.contains("active")) {
      accordionitembody.style.maxHeight = accordionitembody.scrollHeight + "px";
    } else {
      accordionitembody.style.maxHeight = 0;
    }
  });
});


//scroll to top cusdor
topbtn = document.getElementById("top-btn");
window.onscroll=function(){scrollFunction()};
function scrollFunction(){
    if(document.body.scrollTop >200 || document.documentElement.scrollTop>200){
        topbtn.style.display="block";
    }else{
        topbtn.style.display="none";
    }
}

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop=0;
}