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
    $('.js-screen-height').css('height', (windowHeight));
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
//  WINDOW LOAD
//
// -----------------------------------------------------------------------------

$(window).load(function () {

  // ---------------------------------------------------------------------------
  //  PRELOADER OVERLAY
  // ---------------------------------------------------------------------------

  $('.overlay').fadeOut(600);
});

// -----------------------------------------------------------------------------
//
//  DOCUMENT READY
//
// -----------------------------------------------------------------------------

$(document).ready(function(){

  // Toggle Panel
  $('.js-toggle-panel').click(function() {
    panelTime();
  });

  // Set the height of all viewport equal height elements
  setHeight();
}); // END DOCUMENT READY

$( window ).resize(function() {
  setHeight();
});
