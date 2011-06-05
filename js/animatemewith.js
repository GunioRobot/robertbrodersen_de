/*jshint jquery: true, browser: true, bitwise: true, curly: true, eqeqeq: true, noempty: true, onevar: true, plusplus: true, undef: true, strict: true, white: true */

function handleHash() {
    "use strict";
    var urlHash = location.hash;
    if (urlHash !== "") {
        $(urlHash).addClass('active').fadeIn('slow');
        $('nav li a').each(function () {
            if ($(this).attr('href') === urlHash) {
                $(this).parent().addClass('active');
            }
        });
    }
}

// ... und her mit dem neuen
function showItem(clickedPanel) {
    "use strict";
    console.log(clickedPanel);
    $(clickedPanel).addClass('active').fadeIn('slow', function () {
        $('footer').fadeIn('slow');
    });
}

// Weg mit dem Alten ...
function blendeAus(clickedPanel) {
    "use strict";
    $('footer').fadeOut('slow', function () {
        $('article').removeClass('active').fadeOut('slow', function () {
            showItem(clickedPanel);
        });
    });
}

$(document).ready(function () {
    "use strict";
    
    // Ist die Seite mit einem Hash aufgerufen worden?
    handleHash();
    
    // Navigiere, navigiere ...
    $('nav ul li a').click(function () {
        $('nav li').removeClass('active');
        $(this).parent().addClass('active');
        blendeAus($(this).attr('href'));
    });
    
    // Target _blank jQuery-Style
    $('article ul li a').click(function () {
        window.open(this.href);
        return false;
    });
});
