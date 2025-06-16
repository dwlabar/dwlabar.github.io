// -----------------------------------------------------------------------------
//
//  FUNCTIONS
//
// -----------------------------------------------------------------------------

// ---------------------------------------------------------------------------
//  SET HEIGHT
// ---------------------------------------------------------------------------

// This is used for when there is not enough content in .the-pit
function setHeight() {
  windowHeight = $(window).height();
  if (windowHeight > 250) {
    $('.js-screen-height').css('height', windowHeight);
  }
};

// ---------------------------------------------------------------------------
//  PANEL TIME
// ---------------------------------------------------------------------------

function panelTime() {
  if ($('html').hasClass('panel--is-off')) {
   $('html').removeClass('panel--is-off');
   $('html').addClass('panel--is-on');
  } else {
   $('html').removeClass('panel--is-on');
   $('html').addClass('panel--is-off');
  }
 }

// -----------------------------------------------------------------------------
//
//  PRELOADER OVERLAY
//
// -----------------------------------------------------------------------------

$(window).on('load', function () {
  $('.overlay').fadeOut(600);
});

// set timeout function to fade out preloader element after 5 seconds
setTimeout(function () {
  $('.overlay').fadeOut(600);
}, 5000);

// -----------------------------------------------------------------------------
//
//  DOCUMENT READY
//
// -----------------------------------------------------------------------------

$(function () {

  // Toggle Panel
  $('.js-toggle-panel').click(function() {
    panelTime();
  });

  // Set the height of all viewport equal height elements
  setHeight();
});

$(window).on('resize', function() {
  setHeight();
});
