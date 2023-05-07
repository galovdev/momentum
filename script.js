$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:20,
      nav:true,
      navText: ["<i class='fa fa-angle-left fa-lg'></i>", "<i class='fa fa-angle-right fa-lg'></i>"], // You can also add custom icons instead of text
      responsive:{
        0:{
          items:1
        },
        600:{
          items:3
        },
        1000:{
          items:5
        }
      }
    });
  });

const q = document.getElementsByClassName("q");
const a = document.getElementsByClassName("a");
const arr = document.getElementsByClassName("arrow");

for(let i = 0; i < q.length; i++) {
    q[i].addEventListener("click", () => {
        a[i].classList.toggle("a-opened");
        arr[i].classList.toggle("arrow-rotated");     
    });
} 


  