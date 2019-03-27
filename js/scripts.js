jQuery(document).ready(function($) { 
    
    $.fn.scrollTo = function( target, options, callback ){
      if(typeof options == 'function' && arguments.length == 2){ callback = options; options = target; }
      var settings = $.extend({
        scrollTarget  : target,
        offsetTop     : 50,
        duration      : 500,
        easing        : 'swing'
      }, options);
      return this.each(function(){
        var scrollPane = $(this);
        var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
        var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
        scrollPane.animate({scrollTop : scrollY }, parseInt(settings.duration), settings.easing, function(){
          if (typeof callback == 'function') { callback.call(this); }
        });
      });
    }
    
    $(".student-text").click(function(){
        $(this).prev().children().first().next().fadeToggle(200);
        $(this).prev().children().first().next().next().fadeToggle(200);
    });
    
    $(".student-image").click(function(){
        $(this).children().first().next().fadeToggle(200);
        $(this).children().first().next().next().fadeToggle(200);
    });
    
    $("#scroll-about").click(function(){
        $('body').scrollTo('#aboutUs');
    });
    $("#scroll-platform").click(function(){
        $('body').scrollTo('#platform');
    });
    $("#scroll-thanks").click(function(){
        $('body').scrollTo('#thanks');
    });
    $("#scroll-contact").click(function(){
        $('body').scrollTo('#contact');
    });
    $("#scroll-top").click(function(){
        window.scrollTo(0, 0);
    });
    
    
});