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

function showItem(clickedPanel) {
    $(clickedPanel).addClass('active').fadeIn('slow', function () {
        $('footer').fadeIn('slow');
    });
}

function blendeAus(clickedPanel) {
    $('footer').fadeOut('fast', function () {
        $('article').removeClass('active').fadeOut('slow');
        showItem(clickedPanel);
    });
}

$(document).ready(function () {
    
    handleHash();
    
    $('nav ul li a').click(function () {
        $('nav li').removeClass('active');
        $(this).parent().addClass('active');
        blendeAus($(this).attr('href'));
    });
});
