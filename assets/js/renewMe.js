if (window.location.hostname == 'localhost')
    document.write('<script src="http://' + window.location.hostname + ':35729/livereload.js?snipver=1" type="text/javascript"><\/script>');


// var elems = $('section').nextAll(),
//     count = elems.length,
//     animations = ['#slideInRight'],
//     loaded = false;

// elems.each(function(i) {
//     for (var i = animations.length - 1; i >= 0; i--) {
//         $(this).find(animations[i]).css({ 'display': 'none' });
//     }

//     $(this).waypoint({
//         handler: function() {
//             $(function() {
//                 for (var i = animations.length - 1; i >= 0; i--) {
//                     if (!loaded) {
//                         console.log('re')
//                         $(this)
//                             .find(animations[i])
//                             .removeClass('animated slideInRight')
//                             .css({ 'display': 'block', 'opacity': '0 ' })
//                             .animate({ 'opacity': '1' }, 300)
//                             .addClass('animated slideInRight')
//                             .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
//                                 $(this).removeClass('animated slideInRight');
//                             });
//                     }
//                 }
//             });

//             // console.log(direction)
//         }
//     });
//     if (!--count) loaded = true;
// });

// if (direction == 'up') {
//     $('#music #line')
//         .removeClass('animated slideOutLeft')
//         .addClass('animated slideOutLeft')
//         .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
//             $(this).removeClass('animated slideOutLeft');
//         })
//         .css({ 'display': 'block', 'opacity': '1' })
//         .animate({ 'opacity': '0' }, 300);

//     $('#music #letters').each(function(i) {
//         $(this)
//             .removeClass('animated slideOutLeft')
//             .addClass('animated slideOutLeft')
//             .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
//                 $(this).removeClass();
//             })
//             .css({ 'display': 'block', 'opacity': '1' })
//             .animate({ 'opacity': '0' }, 300);
//     });
// } else {