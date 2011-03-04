$(document).ready(function(){

	function readURL(){
		var urlArg = '';
		var siteUrl = document.URL;
		//alert('URL '+siteUrl);
    	var myMatch = siteUrl.match(/#(.*)/);
		//alert('myMatch '+myMatch);
    	if(myMatch[1] && myMatch[1] != ''){
			urlArg = myMatch[1];
		} else {
			urlArg = '1';
		}
		alert(urlArg);
	}
	
	//readURL();
	
	if (urlArg == '1') {
        $('#networks').fadeIn('slow');
    }
    else {
        $('#'+urlArg).fadeIn('slow');
    }
    
    $('.nav').click(function(){
		$('#networks').toggle();
		//readURL();
        //hideItem(urlArg);
    });
    
    function hideItem(clickedPanel){
        if (clickedPanel == urlArg) {
			return;
		}
        $('#footer').fadeOut('slow');
		readURL();
        $('#' + urlArg).fadeOut('slow', function(){
            showItem(clickedPanel)
        });
    }
    
    function showItem(clickedPanel){
        urlArg = clickedPanel;
        $('#' + urlArg).fadeIn('slow');
        $('#footer').fadeIn('slow');
    }
    
	// toggle #imprint visible/non visible by clicking
    $('.itoggle').click(function(){
        $('.imprint').slideToggle('slow');
    });
	
});

