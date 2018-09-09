!(function () {

    function controllBanner(step, interval) {

        var currentIndex = 0;
        var $buttons = $('.buttons>button');
        var $image = $('.images')
        var imageAount = $buttons.length;
        var timer;
        var lastIndex = currentIndex;

        $('.container').on('mouseenter', function () {
            clearInterval(timer);
        });

        $('.container').on('mouseleave', function () {
            autoPlay(interval);
        });

        var registerButtonEvent = function () {
            $buttons.on('click', function (e) {
                var index = $(this).index();
                var value = index * -step;
                currentIndex = index;
                selectButton();
                lastIndex = currentIndex;
                $image.css({ transform: 'translateX(' + value + 'px)' });
            });
        }

        var setPlay = function () {

            selectButton();
            $buttons.eq(currentIndex).trigger('click')
        }

        var selectButton = function () {

            $buttons.eq(lastIndex).removeClass('selected');
            $buttons.eq(currentIndex).addClass('selected');
        }

        var autoPlay = function (interval) {
            timer = setInterval(function () {
                currentIndex = (currentIndex+1) % imageAount;
                setPlay();
                lastIndex = currentIndex;
            }, interval);
        }

        setPlay();
        registerButtonEvent();
        autoPlay(interval);
    }

    controllBanner(300, 2000);

})();

