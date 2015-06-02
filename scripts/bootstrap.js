new WOW().init();


var site_config = {
    viewports: {
        small: 750
    }
};


$(".nav-button").click(function(elem) {
    /*
    Toggle if in mobile
     $('#toggle_navbar').click();
    */
    var target_element = elem.currentTarget.attributes.href.value;
    $('html, body').animate({
        scrollTop: $(target_element).offset().top - 50
    }, 1200);
});

$('.read-more').on('click', function() {
    var modal_name = $(this).data('modalName');
    var content = $('.read-more-modal.' + modal_name);
    content.find('.modal').modal('show');
});

$('.nav-button').on('click', function() {
    var win_width = $(window).width();
    if (win_width < site_config.viewports.small) {
        $('#toggle_navbar').trigger('click');
    }
});



/*
var nav_elems = ["home", "about", "life_coach", "inspirational_speaker", "homicide_speaker", "consultant", "contact"];

$(window).scroll(function() {

    var nav_elems_in_view = _.filter(nav_elems, function(curr) {
        var element = $("."+ curr + ".nav-wrapped-content");
        return element ? isScrolledIntoView(element) : false;
    });

    console.log(nav_elems_in_view);

});


var isScrolledIntoView = function(el) {

        //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && 
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
    );
};

*/