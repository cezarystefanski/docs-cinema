// Avoid `console` errors in browsers that lack a console.
// setInterval(() => console.info($('.logo-hero').innerHeight()), 100);

(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
function headroomHeader() {
    var options = {
        "offset": 205,
        "tolerance": 5
    };
    var headNav = document.querySelector('.nav');
    var headroom = new Headroom(headNav, options);
    headroom.init();
}

document.addEventListener('DOMContentLoaded', headroomHeader);

// makes the parallax elements
function parallaxIt() {

  if(window.innerHeight < $('.first-hero').innerHeight()) {
    return;
  }

  // create variables
  var $fwindow = $(window);
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // on window scroll event
  $fwindow.on('scroll resize', function() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  }); 

  // for each of content parallax element
  $('[data-type="content"]').each(function (index, e) {
    var $contentObj = $(this);
    var fgOffset = parseInt($contentObj.offset().top);
    var yPos;
    var speed = ($contentObj.data('speed') || 1 );

    $fwindow.on('scroll resize', function (){
      yPos = fgOffset - scrollTop / speed; 

      $contentObj.css('top', yPos);
    });
  });

  // for each of background parallax element
  $('[data-type="background"]').each(function(){
    var $backgroundObj = $(this);
    var bgOffset = parseInt($backgroundObj.offset().top);
    var yPos;
    var coords;
    var speed = ($backgroundObj.data('speed') || 0 );

    $fwindow.on('scroll resize', function() {
      yPos = - ((scrollTop - bgOffset) / speed); 
      coords = '50% '+ yPos + 'px';

      $backgroundObj.css({ backgroundPosition: coords });
    }); 
  }); 

  // triggers winodw scroll for refresh
  $fwindow.trigger('scroll');
};

$(window).load(function() {
  var $loader = $('.loading-in-progress');
  var $content = $('.site-content');
  var $logo = $('.logo-hero');
  var $logoText = $('.container.has-text-centered.hidden-vis');
  var $logoheading = $('.logo-heading');

  setTimeout(function() {
    $content.show();
    parallaxIt();
    $loader.fadeOut(1000);
  }, 500);

  setTimeout(function() {
    $logo.addClass('logo-hero-after');
    $logo.removeClass('logo-hero');
    $logoheading.fadeOut(1000);
  }, 1500);

  setTimeout(function() {
    $logoText.removeClass('hidden-vis');
  }, 2500);
});

$('.zapisz').click(function() {
  $(this).addClass('hidden');
  $(this).siblings().eq(1).removeClass('hidden');
})

$('.kontaktButton').click(function() {
  $(this).addClass('hidden');
  $(this).siblings().eq(5).removeClass('hidden');
});

$('.hamburger').click(function() {
  $('.nav-menu').toggleClass('is-active');
})