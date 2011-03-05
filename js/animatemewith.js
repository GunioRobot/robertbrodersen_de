$(document).ready(function(){

    var argumentURL = 'leer';

    function leseURL(){
        var seitenURL = document.URL;
        var myMatch = seitenURL.match(/#(.*)/);
        if(myMatch !== null){
            argumentURL = myMatch[1];
        } 
    }

    leseURL();

    if (argumentURL != 'leer') {
        $('#'+argumentURL).addClass('active').fadeIn('slow');
    }
    
    $('nav ul li a').click(function(){
        blendeAus(this.href.match(/#(.*)/)[1]);
    });
    
    function blendeAus(clickedPanel){
        leseURL();
        if (clickedPanel == argumentURL) {
            return;
        }
        $('footer').fadeOut('slow', function(){
            $('#' + argumentURL).removeClass('active').fadeOut('slow', function(){
                showItem(clickedPanel);
            });
        });
    }
    
    function showItem(clickedPanel){
        $('#' + clickedPanel).addClass('active').fadeIn('slow', function(){
            $('footer').fadeIn('slow');
        });
    }
    
});