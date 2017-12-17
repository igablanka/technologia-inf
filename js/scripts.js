function scrollTo(place) {
    if ($(place).length === 0) {
        var top = $('a[name="' + place + '"]').offset().top - 71;
    } else {
        var top = $(place).offset().top;
    }
    $('html, body').animate({
        scrollTop: top,
        duration: 400,
        easing: 'swing'
    });
}
$(document).ready(function () {

    $('p > a[href^="#"]:not(.menu-burger)').on('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();

        var target = $(this).attr('href').replace('#', '');

        scrollTo(target);

        return false;
    });

    $('a.scroll-link').on('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();

        scrollTo($(this).attr('href'));
        return false;
    });

    $(window).on('scroll load', function (event) {
        if ($(window).scrollTop() === 0) {
            if (!$('.menu').hasClass('open')) {
                $('.navbar').addClass('on-top');
            }
            $('#to-top').fadeOut(100);
        } else {
            $('#to-top').fadeIn(200);
            $('.navbar').removeClass('on-top');
        }
    });

    $(".slider").flipster({
        loop: true
    });

    $('a.menu-burger').on('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();

        $('.menu').toggleClass('open');

        if ($('.menu').hasClass('open') && $('.navbar').hasClass('on-top')) {
            $('.navbar').removeClass('on-top');
        } else if (!$('.menu').hasClass('open') && $(window).scrollTop() === 0) {
            $('.navbar').addClass('on-top');
        }

        return false;
    });

    $('#to-top a').on('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();

        $('html, body').animate({
            scrollTop: 0,
            duration: 400,
            easing: 'swing'
        });

        return false;
    })
});
