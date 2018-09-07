!(function () {

    function controllBanner(step, interval) {

        var currentIndex = 0;
        var $buttons = $('.buttons>button');
        var $image = $('.images')
        var imageAount = $buttons.length;
        var timer;
        $('.container').on('mouseenter', function() {
            clearInterval(timer);
        });
        $('.container').on('mouseleave', function() {
            autoPlay(interval);
        });
        var registerButtonEvent = function () {
            $buttons.on('click', function (e) {
                var index = $(this).index();
                var value = index * -step;
                currentIndex = index;
                selectButton();
                $image.css({ transform: 'translateX(' + value + 'px)' });
            });
        }

        var setPlay = function() {
          
            selectButton();
            $buttons.eq(currentIndex).trigger('click')  
        }

        var selectButton = function() {
            var prevIndex = currentIndex !=0 ? currentIndex - 1 : imageAount - 1;
            currentIndex = currentIndex  % imageAount;
            $buttons.eq(prevIndex).removeClass('selected');
            $buttons.eq(currentIndex).addClass('selected');  
        }

        var autoPlay = function (interval) {
            timer = setInterval(function () {
                currentIndex++;
                setPlay();
            }, interval); 
        }

        setPlay();
        registerButtonEvent();
        autoPlay(interval);
    }

    controllBanner(300, 3000);

})();