$(document).ready(function () {

    function leseURL() {
        var seitenURL = document.URL;
        var myMatch = seitenURL.match(/#(.*)/);
        if (myMatch !== null) {
            argumentURL = myMatch[1];
        }
    }

    leseURL();

    if (argumentURL !== 'leer') {
        $('#' + argumentURL).addClass('active').fadeIn('slow', function () {
            $('nav li a').each(function () {
                if (this.href.match(/#(.*)/)[1] === argumentURL) {
                    $(this).parent().addClass('active');
                }
            });
        });
    }

    // ... und her mit dem neuen
    function showItem(clickedPanel) {
        $('#' + clickedPanel).addClass('active').fadeIn('slow', function () {
            $('footer').fadeIn('slow');
        });
    }

    // Weg mit dem Alten ...
    function blendeAus(clickedPanel) {
        leseURL();
        switch (argumentURL) {
        case clickedPanel:
            return;
        case 'leer':
            showItem(clickedPanel);
            break;
        }
        $('footer').fadeOut('slow', function () {
            $('#' + argumentURL).removeClass('active').fadeOut('slow', function () {
                showItem(clickedPanel);
            });
        });
    }

    // Hmm, navigiere, navigiere ...
    $('nav ul li').click(function () {
        $('nav li').removeClass('active');
        $(this).addClass('active');
        blendeAus(this.href.match(/#(.*)/)[1]);
    });

    // Target _blank jQuery-Style
    $('article ul li a').click(function () {
        window.open(this.href);
        return false;
    });
});
