(function() {
    $(".menu-link").click(function() {

        $(".dropdown-outer").toggle( "slide", {direction: "up"}, 1000);
        
    })

    $("#intro").click(function() {

        $(".dropdown-outer").toggle( "slide", {direction: "up"}, 1000);
        
        $("#content").hide().html(content1).fadeIn('slow');
        
    })

     $("#experiences").click(function() {

        $(".dropdown-outer").toggle( "slide", {direction: "up"}, 1000);
        
        $("#content").hide().html(content2).fadeIn('slow');
        
    })

      $("#projects").click(function() {

        $(".dropdown-outer").toggle( "slide", {direction: "up"}, 1000);
        
        $("#content").hide().html(content3).fadeIn('slow');
        
    })

       $("#skills").click(function() {

        $(".dropdown-outer").toggle( "slide", {direction: "up"}, 1000);
        
        $("#content").hide().html(content4).fadeIn('slow');
        
    })

        $("#contact").click(function() {

        $(".dropdown-outer").toggle( "slide", {direction: "up"}, 1000);
        
        $("#content").hide().html(content5).fadeIn('slow');
        
    })
    
})();