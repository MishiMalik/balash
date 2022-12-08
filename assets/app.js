
$('.logo-slider').owlCarousel({
    loop: true,
    margin:10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    responsive: {

        0: {
            items: 1,
            nav: true
        },
        768: {
            items: 4,
            nav: false
        },
        1000: {
            items: 6,
            nav: false,
            loop: true
        }
    }
})

$('.news-slider').owlCarousel({
    loop: true,
    margin:10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    responsive: {

        0: {
            items: 1,
            nav: true
        },
        480:{
           items:2,
        },
        768: {
            items: 3,
        },
        1000: {
            items: 3,
            loop: true
        }
    }
})

 /**
   * Animation on scroll
   */
//   window.addEventListener('load', () => {
    AOS.init({
      duration: 1500,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
//   });
