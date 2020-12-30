/*global $ */
/* eslint-env browser */



/*  for the sticky navigation part of the header*/
$(document).ready(function () {
    "use strict";

    $('.js--features').waypoint(function (direction) {
        if (direction === 'down') {
            $('nav').addClass('sticky');
        }
                    else {
                $('nav').removeClass('sticky');

            }

    } )
        }, {
                offset: '25%;'
            });


            /* Scroll animations on button*/
            $('.js--scroll-to-feedback').click(function(){
                $('html,body').animate({scrollTop: $('.js--feedback').offset().top},1000);
            });

            $('.js--scroll-to-features').click(function(){
                $('html,body').animate({scrollTop: $('.js--features').offset().top},1000);
            });


       
        /* Animations at scroll */

/* eslint-disable */

          $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    


/* eslint-enable */



/* to check further on this*/

                      
/* Mobile Nav */
$('.js--header-nav').click(function(){
    var nav= $('.js--main-nav');
   // var icon=$('.js--header-nav ion-icon');
    nav.slideToggle(200);
    
});  

/* <ion-icon name="close-outline"></ion-icon> */


