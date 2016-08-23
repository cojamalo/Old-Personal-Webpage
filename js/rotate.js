(function() {

    var rotate = $(".rotate");
    var rotateIndex = -1;
    
    function showNextQuote() {
        ++rotateIndex;
        rotate.eq(rotateIndex % rotate.length)
            .fadeIn(2000)
            .delay(2000)
            .fadeOut(2000, showNextQuote);
    }
    
    showNextQuote();
    
})();