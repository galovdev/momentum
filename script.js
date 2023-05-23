$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        margin: 20,
        nav: true,
        navText: ["<i class='fa fa-angle-left fa-lg'></i>", "<i class='fa fa-angle-right fa-lg'></i>"], // You can also add custom icons instead of text
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
});

const q = document.getElementsByClassName("q");
const a = document.getElementsByClassName("a");
const arr = document.getElementsByClassName("arrow");

for (let i = 0; i < q.length; i++) {
    q[i].addEventListener("click", () => {
        a[i].classList.toggle("a-opened");
        arr[i].classList.toggle("arrow-rotated");
    });
}

$(document).ready(function () {
    $("a[href='#product-section']").click(function (e) {
        e.preventDefault();
        var headerHeight = 110;
        $("html, body").animate({
            scrollTop: $("#product-section").offset().top - headerHeight
        }, 10);
    });
});

$(document).ready(function () {
    $("a[href='#team-section']").click(function (e) {
        e.preventDefault();
        var headerHeight = 110;
        $("html, body").animate({
            scrollTop: $("#team-section").offset().top - headerHeight
        }, 10);
    });
});

$(document).ready(function () {
    $("a[href='#partnerships-section']").click(function (e) {
        e.preventDefault();
        var headerHeight = 110;
        $("html, body").animate({
            scrollTop: $("#partnerships-section").offset().top - headerHeight
        }, 10);
    });
});


$(document).ready(function () {
    $("a[href='#faq-section']").click(function (e) {
        e.preventDefault();
        var headerHeight = 110;
        $("html, body").animate({
            scrollTop: $("#faq-section").offset().top - headerHeight
        }, 10);
    });
});

$(document).ready(function () {
    $(".pfp-logo-nav").click(function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $("nav")
        }, 10);
    });
});

// Toggle submenu when parent is clicked
$('.dropdown > a').click(function (e) {
    e.preventDefault();
    $(this).parent().toggleClass('active');
});

function showMobileMenu() {
    document.getElementById("dropdown-active").style.display = "block";
    document.getElementById("dropdown-inactive").style.display = "none";
}

function closeMobileMenu() {
    document.getElementById("dropdown-active").style.display = "none";
    document.getElementById("dropdown-inactive").style.display = "block";
}

window.onresize = function (event) {
    if (window.innerWidth > 600) {
        document.getElementById("dropdown-active").style.display = "none";
        document.getElementById("dropdown-inactive").style.display = "block";
    }
};

