window.location.href=window.location.href+"?#";
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
            return "Kentaur Apartmani created by: " + '<small>Boban Janković</small>';
        }
    }
});


console.log("boki")
let locationMatch = "Lokacija.html";
let pricesMatch = "cenovnik.html";
let indexMatch = "index.html";
let galleryMatch = "galerija.html";
$(".side-nav-about-us").addClass("side-nav__item--active-js");
if(window.location.href.match(indexMatch)){
    console.log("index");
    $(".side-nav-about-us").addClass("side-nav__item--active-js");
    $(".side-nav-about-us").siblings().removeClass("side-nav__item--active-js");
}
if(window.location.href.match(pricesMatch)){
    console.log("prices")
    $(".side-nav-prices").addClass("side-nav__item--active-js");
    $(".side-nav-prices").siblings().removeClass("side-nav__item--active-js");
}
if(window.location.href.match(locationMatch)){
    console.log("location")
    $(".side-nav-location").addClass("side-nav__item--active-js");
    $(".side-nav-location").siblings().removeClass("side-nav__item--active-js");
}
if(window.location.href.match(galleryMatch)){
    console.log("gallery")
    $(".side-nav-gallery").addClass("side-nav__item--active-js");
    $(".side-nav-gallery").siblings().removeClass("side-nav__item--active-js");
}



$(".search__input").keyup(function(event) {

    let currentValue = $(".search__input").val();
    console.log(currentValue);
    var keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '13'){
       
        callGsce(currentValue);
    }
    
});


$(".search__button ").click(function() {
 
    let currentValue = $(".search__input").val();
    if(currentValue !== ""){
        callGsce(currentValue);
    }

  });

function callGsce(currentValue) {
    console.log( $("#___gcse_0").find("input"));
    google.search.cse.element.getElement('abcd').execute(currentValue);
    $("#___gcse_0 ").addClass("visible");
   
}
// $(window).load(function() {
//    alert("sss")
//   });