

(function() {
    var winHeight = $(window).height(); 

    $(document).ready(function() {

        $(".main").css("height", winHeight - 20);
        $(".middle-bg").css("height", winHeight - 20);
        $(".inner").css("height", winHeight);
        $(".btn-bar").css("height", winHeight - 20);
        $(".middle").css("height", winHeight - 20);
        $(".outer").css("height", winHeight - 20);
            
          
    })

    
    $(window).resize(function() {
    	$(".main").css("height", window.innerHeight - 20);
       	$(".middle-bg").css("height", window.innerHeight - 20);
       	$(".inner").css("height", window.innerHeight);
        $(".btn-bar").css("height", window.innerHeight - 20);
        $(".middle").css("height", window.innerHeight - 20);
        $(".outer").css("height", window.innerHeight - 20);
    })
    

    
})();