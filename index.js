$('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function(item) {
            return "Kentaur Apartmani created by: " + '<small>by Boban Janković</small>';
        }
    }
});



let locationMatch = "Lokacija.html";
let pricesMatch = "cenovnik.html";
let indexMatch = "index.html";
let galleryMatch = "galerija.html";
if(window.location.href.match(indexMatch)){
    console.log("index");
    $(".side-nav-about-us").addClass("side-nav__item--active");
    $(".side-nav-about-us").siblings().removeClass("side-nav__item--active-js");
}
if(window.location.href.match(pricesMatch)){
    console.log("prices")
    $(".side-nav-prices").addClass("side-nav__item--active");
    $(".side-nav-prices").siblings().removeClass("side-nav__item--active-js");
}
if(window.location.href.match(locationMatch)){
    console.log("location")
    $(".side-nav-location").addClass("side-nav__item--active");
    $(".side-nav-location").siblings().removeClass("side-nav__item--active-js");
}
if(window.location.href.match(galleryMatch)){
    console.log("gallery")
    $(".side-nav-gallery").addClass("side-nav__item--active");
    $(".side-nav-gallery").siblings().removeClass("side-nav__item--active-js");
}
