<<<<<<< HEAD

let firstIn=true;
$(document).scroll(function(){
    if($( window ).height()>400){
        if(firstIn){

            $(".cookieContainer").animate({
                top: "50%",
                opacity: 1,
            }, 1000, function() {
                // Animation complete.
            });


            firstIn=false;
        }
    }


});







$(".close-sign").click(function(){
    $(".cookieContainer").fadeOut();
})



$(".search__input").on('input',function(){
    let inputSearch =$(".search__input").val();
    google.search.cse.element.getElement("abcd").execute(inputSearch),$("#___gcse_0 ").addClass("visible")
})



$(".popup-gallery").magnificPopup({delegate:"a",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.',titleSrc:function(e){return"Apartman Kentaur created by: <small>Boban Janković</small>"}}}),console.log("boki");let locationMatch="Lokacija.html",pricesMatch="cenovnik.html",indexMatch="index.html",galleryMatch="galerija.html";function restoreLang(){var e=document.getElementsByClassName("goog-te-banner-frame")[0];if(e)for(var a=e.contentDocument||e.contentWindow.document,i=a.getElementsByTagName("button"),o=0;o<i.length;o++){if(i[o].id.indexOf("restore")>=0)return i[o].click(),void a.getElementsByClassName("goog-close-link")[0].click()}}$(".side-nav-about-us").addClass("side-nav__item--active-js"),window.location.href.match(indexMatch)&&(console.log("index"),$(".side-nav-about-us").addClass("side-nav__item--active-js"),$(".side-nav-about-us").siblings().removeClass("side-nav__item--active-js")),window.location.href.match(pricesMatch)&&(console.log("prices"),$(".side-nav-prices").addClass("side-nav__item--active-js"),$(".side-nav-prices").siblings().removeClass("side-nav__item--active-js")),window.location.href.match(locationMatch)&&(console.log("location"),$(".side-nav-location").addClass("side-nav__item--active-js"),$(".side-nav-location").siblings().removeClass("side-nav__item--active-js")),window.location.href.match(galleryMatch)&&($(window).width()>768&&$(".show-more").hide(),console.log("gallery"),$(".side-nav-gallery").addClass("side-nav__item--active-js"),$(".side-nav-gallery").siblings().removeClass("side-nav__item--active-js")),$(".search__input").keyup(function(e){let a=$(".search__input").val();console.log(a),"13"==(e.keyCode?e.keyCode:e.which)&&callGsce(a)}),$(".restore-lang").on("click",function(){restoreLang()});let a=1;$(".show-more").click(function(){++a%2==0?$(".show-more").html("Prikaži manje >"):$(".show-more").html("Prikaži više >"),$(".rating-toogle").slideToggle("slow",function(){console.log("toggled")})});
=======
let firstIn=!0;$(document).scroll(function(){$(window).height()>400&&firstIn&&($(".cookieContainer").animate({top:"50%",opacity:1},1e3,function(){}),firstIn=!1)}),$(".close-sign").click(function(){$(".cookieContainer").fadeOut()}),$(".search__input").on("input",function(){let e=$(".search__input").val();google.search.cse.element.getElement("abcd").execute(e),$("#___gcse_0 ").addClass("visible")}),$(".popup-gallery").magnificPopup({delegate:"a",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.',titleSrc:function(e){return"Apartman Kentaur created by: <small>Boban Janković</small>"}}}),console.log("boki");let locationMatch="Lokacija.html",pricesMatch="cenovnik.html",indexMatch="index.html",galleryMatch="galerija.html";function restoreLang(){var e=document.getElementsByClassName("goog-te-banner-frame")[0];if(e)for(var a=e.contentDocument||e.contentWindow.document,i=a.getElementsByTagName("button"),o=0;o<i.length;o++)if(i[o].id.indexOf("restore")>=0)return i[o].click(),void a.getElementsByClassName("goog-close-link")[0].click()}$(".side-nav-about-us").addClass("side-nav__item--active-js"),window.location.href.match(indexMatch)&&(console.log("index"),$(".side-nav-about-us").addClass("side-nav__item--active-js"),$(".side-nav-about-us").siblings().removeClass("side-nav__item--active-js")),window.location.href.match(pricesMatch)&&(console.log("prices"),$(".side-nav-prices").addClass("side-nav__item--active-js"),$(".side-nav-prices").siblings().removeClass("side-nav__item--active-js")),window.location.href.match(locationMatch)&&(console.log("location"),$(".side-nav-location").addClass("side-nav__item--active-js"),$(".side-nav-location").siblings().removeClass("side-nav__item--active-js")),window.location.href.match(galleryMatch)&&($(window).width()>768&&$(".show-more").hide(),console.log("gallery"),$(".side-nav-gallery").addClass("side-nav__item--active-js"),$(".side-nav-gallery").siblings().removeClass("side-nav__item--active-js")),$(".search__input").keyup(function(e){let a=$(".search__input").val();console.log(a),"13"==(e.keyCode?e.keyCode:e.which)&&callGsce(a)}),$(".restore-lang").on("click",function(){restoreLang()});let a=1;$(".show-more").click(function(){++a%2==0?$(".show-more").html("Prikaži manje >"):$(".show-more").html("Prikaži više >"),$(".rating-toogle").slideToggle("slow",function(){console.log("toggled")})});
>>>>>>> 801235ca5bdf897f730310e53e0938d725c6542f
