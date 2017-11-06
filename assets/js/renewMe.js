/*!
 * http://jonlov.github.io/
 * Add logo at the bottom automaticaly
 * Developed by Jonathan Lovera
 * MIT license
 */

if ("undefined" == typeof jQuery) throw new Error("Renew JavaScript requires jQuery");

/* Base64 Object */
var Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function(e) {
        var t = "";
        var n, r, i, s, o, u, a;
        var f = 0;
        e = Base64._utf8_encode(e);
        while (f < e.length) {
            n = e.charCodeAt(f++);
            r = e.charCodeAt(f++);
            i = e.charCodeAt(f++);
            s = n >> 2;
            o = (n & 3) << 4 | r >> 4;
            u = (r & 15) << 2 | i >> 6;
            a = i & 63;
            if (isNaN(r)) { u = a = 64 } else if (isNaN(i)) { a = 64 }
            t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
        }
        return t
    },
    decode: function(e) {
        var t = "";
        var n, r, i;
        var s, o, u, a;
        var f = 0;
        e = e.replace(/[^A-Za-z0-9+/=]/g, "");
        while (f < e.length) {
            s = this._keyStr.indexOf(e.charAt(f++));
            o = this._keyStr.indexOf(e.charAt(f++));
            u = this._keyStr.indexOf(e.charAt(f++));
            a = this._keyStr.indexOf(e.charAt(f++));
            n = s << 2 | o >> 4;
            r = (o & 15) << 4 | u >> 2;
            i = (u & 3) << 6 | a;
            t = t + String.fromCharCode(n);
            if (u != 64) { t = t + String.fromCharCode(r) }
            if (a != 64) { t = t + String.fromCharCode(i) }
        }
        t = Base64._utf8_decode(t);
        return t
    },
    _utf8_encode: function(e) {
        e = e.replace(/rn/g, "n");
        var t = "";
        for (var n = 0; n < e.length; n++) {
            var r = e.charCodeAt(n);
            if (r < 128) { t += String.fromCharCode(r) } else if (r > 127 && r < 2048) {
                t += String.fromCharCode(r >> 6 | 192);
                t += String.fromCharCode(r & 63 | 128)
            } else {
                t += String.fromCharCode(r >> 12 | 224);
                t += String.fromCharCode(r >> 6 & 63 | 128);
                t += String.fromCharCode(r & 63 | 128)
            }
        }
        return t
    },
    _utf8_decode: function(e) {
        var t = "";
        var n = 0;
        var r = c1 = c2 = 0;
        while (n < e.length) {
            r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r);
                n++
            } else if (r > 191 && r < 224) {
                c2 = e.charCodeAt(n + 1);
                t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                n += 2
            } else {
                c2 = e.charCodeAt(n + 1);
                c3 = e.charCodeAt(n + 2);
                t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                n += 3
            }
        }
        return t
    }
}

/*
 *
 * Permited domains, domains that don't need confirmation
 *
 */

var renewDomain = '@@renewDomain',
    permitedDomains = ['renew.studio', 'localhost', 'gitlab.io'],
    getDomain = function(url) {
        var hostName = domain = url;

        if (hostName != null) {
            var parts = hostName.split('.').reverse();

            if (parts != null && parts.length > 1) {
                domain = parts[1] + '.' + parts[0];
            }
        }

        return domain;
    },
    isPermitedDomain = function(domain) {
        var hostName = getDomain((domain) ? domain : window.location.hostname);

        for (n in permitedDomains) {
            if (hostName == permitedDomains[n])
                return true;

            else if (n == permitedDomains.length - 1) return false;
        }
    },
    localhostActive = function(cb) {
        if (window.location.hostname == 'localhost')
            $.ajax({
                type: "GET",
                url: 'http://localhost:1337/',
                success: function(res) {
                    return cb(true);
                },
                error: function(res) {
                    return cb(false);

                }
            });
        else return cb(false);
    },
    isLocalhostActive = false;

localhostActive(function(isActive) {
    isLocalhostActive = isActive;
});
/*
 *
 * Grunt reload if domain is localhost
 *
 */

if (window.location.hostname == 'localhost')
    document.write('<script src="http://' + window.location.hostname + ':35729/livereload.js?snipver=1" type="text/javascript"><\/script>');

$(document).ready(function($) {
    $(window).on("load", function() {
        document.createElement('renewLoader');
        var section = null,
            style = {
                'bottom': 0,
                'right': '150px',
                'height': '75px',
                'position': 'absolute',
                'z-index': 99999,
                'padding-top': '10px',
                'border': 0,
                'width': '60px',
                'border-radius': '2px',
                'background': '#fff',
                'text-align':'center'
            },
            ready = function() {
                $('renewLoader').css({ display: 'none' });
                // $("script").remove();
            };

ready();

        /*
         *
         * Renew logo watermark
         *
         */

        if ($('section').length)
            section = $('section');
        else if ($('.section').length)
            section = $('.section');
        else if ($('#section').length)
            section = $('#section');

        if (section == null) throw new Error('There is not <section>, <div class="section"> or <div id="section"> to load Renew Logo.');
        section.last().css('position', 'absolute');

        $('<a id="renew" href="@@renewDomainDevReal"><img src="@@renewDomainDevReal/assets/img/logo-80x82.png" width="80%" /></a>').insertAfter(section.last());

        // if (isLocalhostActive)
        //     section.last().append('<iframe src="http://localhost:1337/api/renew/isotype" id="renew"></iframe>');
        // else
        //     section.last().append('<iframe src="@@renewDomainDevReal/api/renew/isotype" id="renew"></iframe>');

        $('#renew').css(style);
    });
});
