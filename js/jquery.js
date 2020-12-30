var _window = $(window),
    _header = $('.nav'),
    imgBottom;

_window.on('scroll',function(){
    imgBottom = 100px;
    if(_window.scrollTop() > imgBottom){
        _header.addClass('fixed');
    }
    else{
        _header.removeClass('fixed');
    }
});

_window.trigger('scroll');
