$(document).ready(function() {



    $hieuung = $('.noidung').isotope({
        // options
        itemSelector: '.khoianh',
        layoutMode: 'masonry'
    });
    $hieuung.imagesLoaded().progress(function() {
        $hieuung.isotope('layout');
    });



    $(window).scroll(function(event) {
        // console.log('xu ly');
        // console.log($(this).scrollTop());
        var vitri = $(this).scrollTop();
        if (vitri >= 500) {
            console.log('dc r')
            $('.menu').addClass('bienhinh');
        } else {
            $('.menu').removeClass('bienhinh');
        }
    });
})