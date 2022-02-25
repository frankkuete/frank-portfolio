$(document).ready(function(){
    $(window).scroll(function(){
        if(scrollY > 20){
            $('.navbar').addClass('sticky');
        }
        else{
            $('.navbar').removeClass('sticky');
        }
    })
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active')
        $('.navbar .menu-btn i').toggleClass('active')
    })
})