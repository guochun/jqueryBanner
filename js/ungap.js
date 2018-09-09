!(function () {

    var currentIndex = 0;
    var lastIndex = currentIndex;
    var $images = $('.images>img');
    var first = false;

    $images.on('transitionend', function (e) {

        if ($images.index($(this)) === lastIndex) {
            $(this).css({
                transform: 'none',
                left: '100%',
                'z-index': 0,
            });
        }

    });

     var timer =setTimeout(function swiper() {

        lastIndex = currentIndex;
       
        if (!first) {
            first = true;
            $images.eq(lastIndex).css({
                transform: 'translateX(-100%)'
            });  
        }
        else {
            $images.eq(lastIndex).css({
                transform: 'translateX(-200%)'
            });    
        } 
        currentIndex = (currentIndex + 1) % $images.length;
        $images.eq(currentIndex).css({
            transform: 'translateX(-100%)',
            'z-index': 1,
        });  
        timer = setTimeout(swiper,1000)
    
    }, 3000);

})();

