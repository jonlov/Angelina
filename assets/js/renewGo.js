if ("undefined" == typeof jQuery) throw new Error("RenewGo JavaScript requires jQuery");

window.renewGo = function() {
    var loaded = false,
        active = function(path) {
            $('a[go]').removeClass('active');
            setTimeout(function() {
                $('a[go="' + path + '"]').addClass('active');
            });
        },
        historyPush = function(path) {
            if (loaded) window.history.pushState('', '', '/' + path);
            active(path);
        },
        goTo = function(path) {
            (path.split('#').length > 1) ? path = path.split('#')[1]: path = path;

            if (!path) path = 'home';

            if ($('#' + path).length == 1 || $.fn.pagepiling) {
                (!$.fn.pagepiling) ?
                $('html, body').animate({
                    scrollTop: $('#' + path).offset().top
                }, 1000): $.fn.pagepiling.moveTo(path);
            }

            active(path);
        };

    $('*[go]').each(function(index, el) {
        $(this).click(function(e) {
            var go = $(this).attr('go').toString();

            goTo(go);
        });
    });

    $(document).ready(function() {
        $(window).on("load", function() {
            console.log(window.location.pathname.split('/')[1]);

            goTo(window.location.pathname.split('/')[1]);

            setTimeout(function() {   
                loaded = true;
            });
        });
    });

    return {
        historyPush: historyPush,
        goTo: goTo
    }
}