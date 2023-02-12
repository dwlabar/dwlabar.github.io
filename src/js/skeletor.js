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

  // ---------------------------------------------------------------------------
  //  CUSTOM SCROLLBAR
  // ---------------------------------------------------------------------------

  // $('.menu, .panel').mCustomScrollbar({
  //   setWidth:false,
  //   setHeight:false,
  //   setTop:0,
  //   setLeft:0,
  //   axis:"y",
  //   scrollbarPosition:"inside",
  //   scrollInertia:100, // 950 is default
  //   autoDraggerLength:true,
  //   autoHideScrollbar:false,
  //   autoExpandScrollbar:false,
  //   alwaysShowScrollbar:0,
  //   snapAmount:null,
  //   snapOffset:0,
  //   mouseWheel:{
  //     enable:true,
  //     scrollAmount:"auto",
  //     axis:"y",
  //     preventDefault:false,
  //     deltaFactor:"auto",
  //     normalizeDelta:false,
  //     invert:false,
  //     disableOver:["select","option","keygen","datalist","textarea"]
  //   },
  //   scrollButtons:{
  //     enable:false,
  //     scrollType:"stepless",
  //     scrollAmount:"auto"
  //   },
  //   keyboard:{
  //     enable:true,
  //     scrollType:"stepless",
  //     scrollAmount:"auto"
  //   },
  //   contentTouchScroll:25,
  //   advanced:{
  //     autoExpandHorizontalScroll:false,
  //     autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
  //     updateOnContentResize:true,
  //     updateOnImageLoad:true,
  //     updateOnSelectorChange:false,
  //     releaseDraggableSelectors:false
  //   },
  //   theme:"minimal-dark",
  //   callbacks:{
  //     onInit:false,
  //     onScrollStart:false,
  //     onScroll:false,
  //     onTotalScroll:false,
  //     onTotalScrollBack:false,
  //     whileScrolling:false,
  //     onTotalScrollOffset:0,
  //     onTotalScrollBackOffset:0,
  //     alwaysTriggerOffsets:true,
  //     onOverflowY:false,
  //     onOverflowX:false,
  //     onOverflowYNone:false,
  //     onOverflowXNone:false
  //   },
  //   live:false,
  //   liveSelector:null
  // });
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
