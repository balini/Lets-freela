$(document).ready(function () {

    $('.m-menu').hide();
  
      
      // ATIVA BOTÃO E NAV COM O SCROLL 
      $(window).scroll(function(){
  
          
              if ($(document).scrollTop() > 200) {
                $('nav').addClass('nav--bg');
                $('#btn-nav').fadeIn('slow');
              } else {
                $('nav').removeClass('nav--bg');
                $('#btn-nav').fadeOut('slow');
                $('#btn-nav').addClass('invisible');
              }
      })
  
    // MENU HAMBURGUER 
  
    $('.responsive-menu').click(function(){
      $('.m-menu').slideToggle();
      if ($(document).scrollTop() > 200){
        $('nav').addClass('nav--bg');
      } else {
        $('nav').toggleClass('nav--bg');
      }
    })
  
  
  });