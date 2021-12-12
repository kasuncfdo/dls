$(document).ready(function() {
    $('.carousel').slick({
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        centerPadding: '60px',
        slidesToShow: 4,
        responsive: [{
            breakpoint: 2400,
            settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },{
            breakpoint: 1600,
            settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
            }
        }, {
            breakpoint: 880,
            settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }, {
            breakpoint: 768,
            settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }]
    });

    $('#announcement-list').paginate({ itemsPerPage: 3 });
    $('#news-list').paginate({ itemsPerPage: 3 });
    $('#events-list').paginate({ itemsPerPage: 3 });

   if ($('#announcement-list').children().length <= 3) {
        $('#announcement-list-previous,#announcement-list-next').addClass('disabled');
    }
											 
											 
    if ($('#events-list').children().length <= 3) {
        $('#events-list-previous,#events-list-next').addClass('disabled');
    }

    if ($('#news-list').children().length <= 3) {
        $('#news-list-previous,#news-list-next').addClass('disabled');
    }
});
