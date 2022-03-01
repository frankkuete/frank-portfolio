$(document).ready(function () {
    $(window).scroll(function () {
        if (scrollY > 20) {
            $('.navbar').addClass('sticky');
        }
        else {
            $('.navbar').removeClass('sticky');
        }
        if (scrollY > 500) {
            $('.scroll-up-btn').addClass('show');
        }
        else {
            $('.scroll-up-btn').removeClass('show');
        }
    })

    $('.scroll-up-btn').click(function () {
        $("html, body").animate({ scrollTop: "0" });
    })

    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass('active')
        $('.navbar .menu-btn i').toggleClass('active')
    })
})