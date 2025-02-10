$(document).ready(function() {
  $(".loading").css({
    "display": "none"
});
  /*$('.first-carousel').owlCarousel({
    items:4,
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:2500,
      autoplayHoverPause:true,
      smartSpeed: 800,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
    
  })*/
  $('.second-carousel').owlCarousel({
    margin:10,
    nav:true,
    autoplay:true,
      autoplayTimeout:2500,
      autoplayHoverPause:true,
      loop:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  })
  $('.third-carousel').owlCarousel({
    margin:10,
    nav:true,
    autoplay:true,
      autoplayTimeout:2500,
      autoplayHoverPause:true,
      loop:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  })
  
  // Sidebar JS
  
  const sidebarToggleNav = document.querySelector('.sidebar-toggle-nav');
  const sidebarToggleSide = document.querySelector('.sidebar-toggle-side');
  const sidebar = document.querySelector('.sidebar');
  const sideLinks = document.querySelectorAll('.sidebar-link');
  
  sidebarToggleNav.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      sidebar.classList.remove('close');
  })
    sidebarToggleSide.addEventListener('click', function() {
      sidebar.classList.toggle('close');
      sidebar.classList.remove('open');
    });
    
    sideLinks.forEach(link => {
      link.addEventListener('click', function() {
        sidebar.classList.toggle('close');
        sidebar.classList.remove('open');
      });
      
    })
  
    // About menu
  
    const aboutButton = $('.about-us');
  const aboutMenu = $('.about-popup');
  const darkOverlay = $('.background-darken');
  
  const contactsButton = $('.contacts');
  const contactsMenu = $('.contacts-popup');
  
  // About button functionality
  aboutButton.on('click', () => {
    aboutMenu.toggle(500);
    darkOverlay.fadeToggle(500);
  });
  
  // Contacts button functionality
  contactsButton.on('click', () => {
    contactsMenu.toggle(500);
    darkOverlay.fadeToggle(500);
  });
  
  // Close the About menu when the overlay is clicked
  darkOverlay.on('click', () => {
    aboutMenu.hide(500);
    contactsMenu.hide(500); // Close contacts menu if it's open
    darkOverlay.fadeOut(500);
  });
  
});
