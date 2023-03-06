$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:20,
      nav:true,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"], // You can also add custom icons instead of text
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
  