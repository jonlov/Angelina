/*
 *
 * Grunt reload if domain is localhost
 * 
 */

if (window.location.hostname == 'localhost')
    document.write('<script src="http://' + window.location.hostname + ':35729/livereload.js?snipver=1" type="text/javascript"><\/script>');

/*
 *
 * Renew logo watermark
 * 
 */

$(document).ready(function($) {
    var section = null,
        style = {
            'bottom': 0,
            'right': '150px',
            'height': '75px',
            'position': 'absolute',
            'z-index': 99999,
            'border': 0,
            'width': '60px',
            'border-radius': '2px'
        };

    if ($('section').length)
        section = $('section');
    else if ($('.section').length)
        section = $('.section');
    else if ($('#section').length)
        section = $('#section');

    if (section == null) throw new Error('There is not <section>, <div class="section"> or <div id="section"> to load Renew Logo.');
    section.last().css('position', 'absolute');

    section.last().append('<iframe src="https://staging.renew.studio/api/renew/isotype" id="renew"></iframe>');
    $('#renew').css(style);
});