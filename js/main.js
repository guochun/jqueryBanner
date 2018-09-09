!(function () {

    let $images = $('.images>img');
    let currentIndex = 0;
    let imgLength = $images.length;
    let timer = null;
    function init() {
        changeCurrentState($images.eq(currentIndex))
        for(let i = 1; i < imgLength; i ++){
            changeEnterState($images.eq(i));
        }
    }
    init();

    timer = setTimeout(function swipe() {
        changeLeaveState($images.eq(currentIndex)).one('transitionend', (e) => {
            changeEnterState($(e.currentTarget) );
        });
        currentIndex = currentIndex++ < 0 ? imgLength : currentIndex >= imgLength ? currentIndex % currentIndex : currentIndex;
        changeCurrentState($images.eq(currentIndex));
        timer = setTimeout(swipe, 2000);
    }, 3000);


    function changeEnterState($node) {
        $node.removeClass('leave current').addClass('enter');
        return $node;
    }

    function changeLeaveState($node) {
        $node.removeClass('current enter').addClass('leave');
        return $node;
    }

    function changeCurrentState($node) {
        $node.removeClass('enter leave').addClass('current');
        return $node;
    }

})();

