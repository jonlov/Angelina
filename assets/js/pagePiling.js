$(document).ready(function() {
    $('#loading').addClass('hide');
    $('nav').css({ opacity: 1 });

    $('*[bounceInLeft], *[bounceInRight], *[bounceInDown], *[bounceInUp]').each(function() {
        $(this).css({ opacity: 0 });
    });

    var section = '',
        showAnimation = function(index, anchorLink) {
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

            // Navbar menu selected section
            // console.log(anchorLink);
            $('nav a').removeClass('active');
            $('nav a[href="#' + anchorLink + '"]').addClass('active');
        };

    setTimeout(function() {
        showAnimation(1);
    }, 10);


    $('#pagepiling').pagepiling({
        verticalCentered: false,
        css3: false,
        navigation: false,
        anchors: ['home', 'bio', 'music', 'galery', 'videos', 'contact'],
        afterLoad: function(anchorLink, index) {
            showAnimation(index, anchorLink);
        }
    });
    
    $('.nav a').on('click', function() {
        $('.btn-navbar').click(); //bootstrap 2.x
        $('.navbar-toggle').click() //bootstrap 3.x by Richard
    });

});

// DO NOT DELETE
// window.history.pushState('object or string', 'Title', '/new-url');