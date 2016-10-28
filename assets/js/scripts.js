$(document).ready(function() {
    $('*[bounceInLeft], *[bounceInRight], *[bounceInDown], *[bounceInUp]').each(function() {
        $(this).css({ opacity: 0 });
    });

    var section = '',
        showAnimation = function(index) {
            section = '#section' + index;

            $(section + ' *[bounceInLeft]').each(function() {
                $(this).addClass('animated bounceInLeft go');
            });

            $(section + ' *[bounceInRight]').each(function() {
                $(this).addClass('animated bounceInRight go');
            });

            $(section + ' *[bounceInDown]').each(function() {
                $(this).addClass('animated bounceInDown go');
            });

            $(section + ' *[bounceInUp]').each(function() {
                $(this).addClass('animated bounceInUp go');
            });
        };

    setTimeout(function() {
        showAnimation(1);
    }, 10);


    $('#pagepiling').pagepiling({
        verticalCentered: false,
        css3: false,
        navigation: false,
        anchors: ['home', 'about', 'music', 'galery', 'videos', 'contact'],
        afterLoad: function(anchorLink, index) {
            showAnimation(index);
        }
    });
});

// DO NOT DELETE
// window.history.pushState('object or string', 'Title', '/new-url');