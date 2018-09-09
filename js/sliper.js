!(function () {

    function Sliper(el, config) {

        this.el = el;
        this.duration = config.duration || 2000;
        this.autoPlay = config.autoPlay || true;
        this.step = config.step || 300;
        this.images = config.imgItems || [];
      
        this.currentIndex = config.currentIndex || 0;
        this.lastIndex = this.currentIndex;
        this.imageWraper = $('<div>').addClass('images');
    }


    Sliper.prototype.init = function () {

        for (let i = 0; i < this.images.length; i++) {
            let src = this.images[i].src;
            let alt = this.images[i].alt;
            let width = this.images[i].width;
            this.images[i] = $('<img>')
            this.images[i].attr({
                'src': src,
                'width': width,
                'alt': alt
            });
            this.imageWraper.append(this.images[i]);
        }

        this.el.append(this.imageWraper);

    }



    // function controllBanner(step, interval) {

    //     var currentIndex = 0;
    //     var $buttons = $('.buttons>button');
    //     var $image = $('.images')
    //     var imageAount = $buttons.length;
    //     var timer;
    //     var lastIndex = currentIndex;

    //     $('.container').on('mouseenter', function () {
    //         clearInterval(timer);
    //     });

    //     $('.container').on('mouseleave', function () {
    //         autoPlay(interval);
    //     });

    //     var registerButtonEvent = function () {
    //         $buttons.on('click', function (e) {
    //             var index = $(this).index();
    //             var value = index * -step;
    //             currentIndex = index;
    //             selectButton();
    //             lastIndex = currentIndex;
    //             $image.css({ transform: 'translateX(' + value + 'px)' });
    //         });
    //     }

    //     var setPlay = function () {

    //         selectButton();
    //         $buttons.eq(currentIndex).trigger('click')
    //     }

    //     var selectButton = function () {

    //         $buttons.eq(lastIndex).removeClass('selected');
    //         $buttons.eq(currentIndex).addClass('selected');
    //     }

    //     var autoPlay = function (interval) {
    //         timer = setInterval(function () {
    //             currentIndex = (currentIndex+1) % imageAount;
    //             setPlay();
    //             lastIndex = currentIndex;
    //         }, interval);
    //     }

    //     setPlay();
    //     registerButtonEvent();
    //     autoPlay(interval);
    // }

    // controllBanner(300, 2000);

    window.Sliper = Sliper;

})();

let swiper = new Sliper($('.banner'), {
    imgItems: [
        { src: './img/1.png', width: 300, alt: "1" },
        { src: './img/2.png', width: 300, alt: "2" },
        { src: './img/3.png', width: 300, alt: "3" },
    ]
});

swiper.init();