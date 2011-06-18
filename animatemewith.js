/*jslint white: true, onevar: true, browser: true, undef: true, nomen: true, regexp: true, plusplus: true, bitwise: true, newcap: true, strict: true, maxerr: 50, indent: 4 */
/*globals $ */
"use strict";

function handleHash() {
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
    $(clickedPanel).addClass('active').fadeIn('slow', function () {
        $('footer').fadeIn('slow');
    });
}

// Weg mit dem Alten ...
function blendeAus(clickedPanel) {
    $('footer').fadeOut('fast', function () {
        $('article').removeClass('active').fadeOut('slow');
        showItem(clickedPanel);
    });
}

$(document).ready(function () {
    
    // Ist die Seite mit einem Hash aufgerufen worden?
    handleHash();
    
    // Navigiere, navigiere ...
    $('nav ul li a').click(function () {
        $('nav li').removeClass('active');
        $(this).parent().addClass('active');
        blendeAus($(this).attr('href'));
    });
});
