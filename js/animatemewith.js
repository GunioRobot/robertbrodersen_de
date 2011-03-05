$(document).ready(function(){

    var argumentURL = 'leer';
    var seitenURL = document.URL;

    function leseURL(){
        var myMatch = seitenURL.match(/#(.*)/);
        if(myMatch[1] != 'leer'){
            argumentURL = myMatch[1];
        } 
    }

    leseURL();

    if (argumentURL != 'leer') {
        $('#'+argumentURL).fadeIn('slow');
    }
    
    $('nav ul li a').click(function(){
        alert('argument.click '+argumentURL);
        blendeAus(this.href.match(/#(.*)/)[1]);
    });
    
    function blendeAus(clickedPanel){
        alert('blendeaus.clickedPanel '+clickedPanel);
        leseURL();
        if (clickedPanel == argumentURL) {
            return;
        }
        $('footer').fadeOut('slow');
        alert('argument.fadeOut '+argumentURL);
        $('#' + argumentURL).fadeOut('slow', function(){
            showItem(clickedPanel);
        });
    }
    
    function showItem(clickedPanel){
        argumentURL = clickedPanel;
        $('#' + argumentURL).fadeIn('slow');
        $('footer').fadeIn('slow');
    }
    
});