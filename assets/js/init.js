(function( $ ) {
  'use strict';

  //
  // Preloader
  jQuery(window).load(function() {
    jQuery(".preloader").delay(1000).fadeOut("slow");
  });

  $(document).ready(function(){

    //
    // Off-canvas Nav
    var body = $("body"),
        showBtn   = $(".navbar-show-btn"),
        closeBtn  = $(".navbar-close-btn, .nav > li > a");

    showBtn.on("click", function(e) {
      e.preventDefault();
      body.addClass("navbar-show");
    });
    closeBtn.on("click", function(e) {
      e.preventDefault();
      body.removeClass("navbar-show");
    });

    //
    // Smooth Scrolling
    $('a[href*=#]:not([href=#]), a.scroll-top[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 30
          }, 500);
          return false;
        }
      }
    });

    //
    // ScrollSpy
    body.scrollspy({
      target  : '.scrollspy',
      offset  : 35
    });

    //
    // mixItUp
    var portfolioGallery = $("#portfolioGallery");
    portfolioGallery.mixItUp({
      animation: {
        duration: 400,
        effects: 'translateZ(-360px) fade stagger(34ms) translateX(10%)',
        easing: 'cubic-bezier(0.39, 0.575, 0.565, 1)'
      }
    });

    //
    // Image Popup
    portfolioGallery.magnificPopup({
      delegate: 'a',
      type: 'image',
      closeOnContentClick: false,
      closeBtnInside: false,
      mainClass: 'mfp-with-zoom mfp-img-mobile',
      image: {
        verticalFit: true,
        titleSrc: function(item) {
          return item.el.attr('title');
        }
      },
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        duration: 500, // don't foget to change the duration also in CSS
        opener: function(element) {
          return element.find('img');
        }
      }
    });

    //
    // Clients
    $('.review-area').owlCarousel({
      loop            : true,
      autoplay        : true,
      autoplayTimeout : 5000,
      margin          : 30,
      items           : 1,
      nav             : true,
      navText       : ['<i class="fa fa-chevron-left"><i/>','<i class="fa fa-chevron-right"><i/>']
    });

    //
    // Contact
    var contact         = $('.contact-form'),
      successMessage    = $('.contact-success'),
      errorMessage      = $('.contact-error');

    contact.validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        email: {
          required: true,
          email: true
        },
        message: {
          required: true
        }
      },
      messages: {
        name: {
          required: "Come on! Enter your name",
          minlength: "your name must consist of at least 2 characters"
        },
        email: {
          required: "no email, no message"
        },
        message: {
          required: "You have to write something to send this form.",
          minlength: "thats all? really?"
        }
      },
      submitHandler: function(form) {
        $(form).ajaxSubmit({
          type:"POST",
          data: $(form).serialize(),
          url:"assets/php/contact.php",
          success: function() {
            successMessage.fadeIn();
          },
          error: function() {
            contact.fadeTo( "slow", 0.15, function() {
              errorMessage.fadeIn();
            });
          }
        });
      }
    });

    // hide #back-top first
    $("#back-top").hide();

    //
    // ScrollTop
    $(function () {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
          $('#goTop').fadeIn();
        } else {
          $('#goTop').fadeOut();
        }
      });

      $('#goTop').click(function () {
        $('body,html').animate({
          scrollTop: 0
        }, 800);
        return false;
      });
    });

    //$(window).scroll();

  });

})(window.jQuery);