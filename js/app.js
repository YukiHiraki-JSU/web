jQuery(document).ready(function($) {

// hide .navbar first
 $(".navbar").hide();
// $("#main-logo").css('opacity', '0');
// $("#main-slogan").css('opacity', '0');
// $("#main-links").css('opacity', '0');
// $("#mouse-down").css('opacity', '0');


$(function () {
            var waypoint = new Waypoint({
              element: document.getElementById('map-container'),
              handler: function(direction) {
                if(direction == 'down'){
                  $(".nav").find(".active").removeClass("active");
                  $(".nav").find(".link5").addClass("active");
                } else if (direction == 'up'){
                  $(".nav").find(".active").removeClass("active");
                    $(".nav").find(".link4").addClass("active");
              }}
            });
          });

$(function () {
            var waypoint = new Waypoint({
              element: document.getElementById('mouse-down'),
              handler: function(direction) {
                if(direction == 'down'){
                  $(".nav").find(".active").removeClass("active");
                  $(".navbar").fadeIn();
                  $(".nav").find(".link1").addClass("active");
                } else if (direction == 'up'){
                  $(".nav").find(".active").removeClass("active");
                  $(".navbar").fadeOut();
              }}
            });
          });


$(function () {
            var waypoint = new Waypoint({
              element: document.getElementById('b4services'),
              handler: function(direction) {
                if(direction == 'down'){
                  $(".nav").find(".active").removeClass("active");
                  $(".nav").find(".link2").addClass("active");
                } else if (direction == "up"){
                    $(".nav").find(".active").removeClass("active");
                    $(".nav").find(".link1").addClass("active");
              }}
            });
          });


$(function () {
            var waypoint = new Waypoint({
              element: document.getElementById('oem3'),
              handler: function(direction) {
                if(direction == 'down'){
                  $(".nav").find(".active").removeClass("active");
                  $(".nav").find(".link3").addClass("active");
                } else if (direction == 'up'){
                    $(".nav").find(".active").removeClass("active");
                    $(".nav").find(".link2").addClass("active");
              }}
            });
          });

$(function () {
            var waypoint = new Waypoint({
              element: document.getElementById('b4career'),
              handler: function(direction) {
                if(direction == 'down'){
                  $(".nav").find(".active").removeClass("active");
                  $(".nav").find(".link4").addClass("active");
                } else if (direction == 'up'){
                  $(".nav").find(".active").removeClass("active");
                  $(".nav").find(".link4").removeClass("active");
                  $(".nav").find(".link3").addClass("active");
                }
              }
            });
          });



// if waypoint, start all 3 stat counters
$(function () {
            var startCount = true;
            var waypoint = new Waypoint({
              element: document.getElementById('mouse-down'),
              handler: function(direction) {
                if(direction == 'down' && startCount == true){
                   //$('html, body').animate({ 'scrollTop': $('#about2').offset().top}, 1000);
              //console.log('Direction: ' + direction)
                  $('.navbar').fadeIn();
                  $(".nav").find(".link1").addClass("active");
                  counter1();
                  counter2();
                  counter3();
                  startCount = false;
                } else if(direction == 'up'){
                  $(".nav").find(".active").removeClass("active");
                  $('.navbar').fadeOut();
                }
              }
            });
          });


          function counter1() {
            "use strict";
            function count($this){
            var current = parseInt($this.html(), 10);
            current = current + 1; 
            $this.html(++current);
              if(current > $this.data('count')){
                $this.html($this.data('count'));
              } else {    
                setTimeout(function(){count($this)}, 50);
              }

            }         
            $(".stat-count").each(function() {
              $(this).data('count', parseInt($(this).html(), 10));
              $(this).html('0');
              count($(this));
            });
          }; 

          function counter2() {
            "use strict";
            function count($this){
              var current = parseInt($this.html(), 10);
              current = current + 1; /* Where 50 is increment */  
              $this.html(++current);
                if(current > $this.data('count')){
                  $this.html($this.data('count'));
                } else {    
                  setTimeout(function(){count($this)}, 50);
                }
            }         
            $(".stat-count2").each(function() {
              $(this).data('count', parseInt($(this).html(), 10));
              $(this).html('0');
              count($(this));
            });
          };

          function counter3() {
            "use strict";
            function count($this){
            var current = parseInt($this.html(), 10);
            current = current + 150;
            $this.html(++current);
              if(current > $this.data('count')){
                $this.html($this.data('count'));
              } else {    
                setTimeout(function(){count($this)}, 50);
              }

            }         
            $(".stat-count3").each(function() {
              $(this).data('count', parseInt($(this).html(), 10));
              $(this).html('0');
              count($(this));
            });
          };


$(function() {
    $("#video").lightGallery(); 
  });

jQuery(function(){
        jQuery('.news-content').succinct({
            size: 180
        });
    });




// Menu jump animation
$(".nav a").click(function(){
            $(".nav").find(".active").removeClass("active");
            $(this).addClass("active");
/*            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
              && location.hostname == this.hostname) {
              var $target = $(this.hash);
              $target = $target.length && $target
              || $('[name=' + this.hash.slice(1) +']');
              if ($target.length) {
              var targetOffset = $target.offset().top;
              $('html,body')
              .animate({scrollTop: targetOffset}, 1000);
              return false;
              }
            }
*/          });


function scroll_to_anchor(anchor_id){
    var tag = $("#"+anchor_id+"");
    $('html,body').animate({scrollTop: tag.offset().top},1000);
}

$('.link1').click(function(){
  scroll_to_anchor('about');
});

$('.link2a').click(function(){
  scroll_to_anchor('traveldoor');
  $(".nav").find(".link2").addClass("active");
});

$('.link2b').click(function(){
  scroll_to_anchor('oems');
  $(".nav").find(".link2").addClass("active");
});

$('.link3').click(function(){
  scroll_to_anchor('news');
});

$('.link4').click(function(){
  scroll_to_anchor('career');
});

$('.link5').click(function(){
  scroll_to_anchor('map-container');
});



$('#mouse-down').click(function(){
  scroll_to_anchor('about');
});


    $(window).load(function(){
      $('.flexslider').flexslider({
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
    });


new WOW().init();


$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});


});

