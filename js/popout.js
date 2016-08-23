(function() {
    $(".inner").click(function() {

        $(".outer").toggle( "slide", {direction: "right"}, 1000);
        
        $(".click-tab").delay( 1000 ).toggle( "fade" );
    })

    $(".tab").click(function() {

        $(".outer").toggle( "slide", {direction: "right"}, 1000);
        
        $(".click-tab").delay( 1000 ).toggle( "fade" );
    })

    $(".click-tab").click(function() {

        $(".click-tab").toggle( "fade" );

        $(".outer").delay( 500 ).toggle( "slide", {direction: "right"}, 1000);
        
    })


})();

   /* function() {
    $(".inner").click(function() {
    $(".inner").toggle( "slide", {direction: "right"}, 1000);
    $(".click-tab").toggle( "fade" );
    }) 

     $(".click-tab").click(function() {
    $(".inner").toggle( "slide", {direction: "right"}, 1000);
    $(".click-tab").toggle( "fade" );
    }) */


