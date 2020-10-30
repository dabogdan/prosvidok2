
(function (document, history, location) {
    const navbarHeight = document.getElementsByClassName('navbar')[0].clientHeight;

    /* we need to scroll to the top of the window first, because the browser will always jump to the anchor first before JavaScript is ready, thanks Stack Overflow: http://stackoverflow.com/a/3659116 */
    window.scrollTo(0, 0);



let HISTORY_SUPPORT = !!(history && history.pushState);
let anchorScrolls = {
    ANCHOR_REGEX: /^#[^ ]+$/,
    OFFSET_HEIGHT_PX: navbarHeight,

    /**
     * Establish events, and fix initial scroll position if a hash is provided.
     */
    init: function () {
        this.scrollToCurrent();
        $(window).on('hashchange', $.proxy(this, 'scrollToCurrent'));
        $('body').on('click', 'a', $.proxy(this, 'delegateAnchors'));
    },

    /**
     * Return the offset amount to deduct from the normal scroll position.
     * Modify as appropriate to allow for dynamic calculations
     */
    getFixedOffset: function () {
        return this.OFFSET_HEIGHT_PX;
    },

    // /**
    //  * If the provided href is an anchor which resolves to an element on the
    //  * page, scroll to it.
    //  * @param  {String} href
    //  * @return {Boolean} - Was the href an anchor.
    //  */
    scrollIfAnchor: function (href, pushToHistory) {
        let match, anchorOffset;

        if (!this.ANCHOR_REGEX.test(href)) {
            return false;
        }

        match = document.getElementById(href.slice(1));

        if (match) {
            anchorOffset = $(match).offset().top - this.getFixedOffset();
            $('html, body').animate({scrollTop: anchorOffset});

            // Add the state to history as-per normal anchor links
            if (HISTORY_SUPPORT && pushToHistory) {
                history.pushState({}, document.title, location.pathname + href);
            }
        }

        return !!match;
    },

    /**
     * Attempt to scroll to the current location's hash.
     */
    scrollToCurrent: function (e) {
        if (this.scrollIfAnchor(window.location.hash) && e) {
            e.preventDefault();
        }
    },

    /**
     * If the click event's target was an anchor, fix the scroll position.
     */
    delegateAnchors: function (e) {
        let elem = e.target;

        if (this.scrollIfAnchor(elem.getAttribute('href'), true)) {
            e.preventDefault();
        }
    }
};

$(document).ready($.proxy(anchorScrolls, 'init'));
})
(window.document, window.history, window.location);


// JUST IN CASE ABOVE FUN DOES NOT WORK - scroll js function
//
//
// // JQuery scroll function
//
// $(document).ready(function () {
// // scroll to Top button enable/disable
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 250) {
//             $('.scrollTop').fadeIn(500);
//         } else {
//             $('.scrollTop').fadeOut(500);
//         }
//     });
// // scroll to top func
//     $('.scrollTop').click(function (event) {
//         event.preventDefault();
//         $('html, body').animate({
//             scrollTop: 0
//         }, 300);
//     });
// // scroll to #victims
//     $('.victims-link').click(function (event) {
//         event.preventDefault();
//         $('html, body').animate({
//             scrollTop: $('#victims')[0].offsetTop - navbarHeight
//         }, 300);
//     });
//     // scroll to #welcome
//     $('.arrow').click(function (event) {
//         event.preventDefault();
//         $('html, body').animate({
//             scrollTop: $('#welcome')[0].offsetTop - navbarHeight
//         }, 300);
//     });
//
// // scroll to #Crime-info
//     $('.crime-info').click(function (event) {
//         event.preventDefault();
//         $('html, body').animate({
//             scrollTop: $('#crime-info')[0].offsetTop - navbarHeight
//         }, 300);
//     });
// });
//


