//--------------------------------------------------------------
// Плавная анимация при скролле
$(document).ready(function () {
    //window and animation items
    var animation_elements = $.find('.animation-element');
    //check to see if any animation containers are currently in view
    function check_if_in_view() {
        //get current window information
        var window_top_position = $(window).scrollTop();
        var window_bottom_position = (window_top_position + $(window).height());
        //iterate through elements to see if its in view
        $.each(animation_elements, function () {
            //get the element sinformation
            var element = $(this);
            var element_height = $(element).outerHeight();
            var element_top_position = $(element).offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
            if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
                // console.log(element_bottom_position, window_top_position)
                element.addClass('in-view');
            } else {
                // element.removeClass('in-view');
            }
        });
    }
    //on or scroll, detect elements in view
    $(window).on('scroll resize', function () {
        check_if_in_view()
    })
    //trigger our scroll event on initial load
    // $(window).trigger('scroll');
});

//--------------------------------------------------------------

// Загрузочный экран и загрузка
let container = document.querySelector(".container");

window.onload = function () {
    document.body.classList.add('loaded_hiding');
    let ss = document.getElementById("pink-line"),
        i = 0;

    let timer = setInterval(function () {
        ss.style.width = `${i}%`;
        document.getElementById("loaderPercent").innerText = `${i}%`;
        if (i < 100) i += 5;
    }, 30)

    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
        document.getElementById("scroll").classList.remove("no-scroll");
        document.documentElement.scrollTop = 0;
        clearInterval(timer);
    }, 1000);
    container.style.display = "block";
}

//--------------------------------------------------------------

// slickSliderFunction();
let counter_makisu = 0;
let counter_instagramm = 0;
let counter_brand = 0;

const openMakisuModal = $("#openMakisuModal");
const openInstgrammModal = $("#openInstgrammModal");
const openBrandModal = $("#openBrandModal");

const MakisuModal = $("#MakisuModal");
const InstagrammModal = $("#InstagrammModal");
const BrandMakisuModal = $("#BrandMakisuModal");

const htmlScroll = $("#scroll");
const cancel = $(".cancel");

const descriptionSection = $(".section-description");
const ourWork = $(".our-work");
const sectionReviews = $(".section-reviews");
const footer = $("footer");



// Open/close modal window
// close
cancel.on("click", function () {
    if (counter_makisu == 1) {
        MakisuModal.removeAttr("style").hide();
        counter_makisu--;
    } else if (counter_instagramm == 1) {
        InstagrammModal.removeAttr("style").hide();
        counter_instagramm--;
    }
    else if(counter_brand == 1){
        BrandMakisuModal.removeAttr("style").hide();
        counter_brand--;
    }

    htmlScroll.removeClass("no-scroll");
    descriptionSection.removeAttr("style").show();
    ourWork.removeAttr("style").show();
    sectionReviews.removeAttr("style").show();
    footer.removeAttr("style").show();
});

// open modal window
// open Makisu site modal
openMakisuModal.on("click", function () {
    MakisuModal.removeAttr("style").show();
    counter_makisu++;
    slickSliderFunction();
    HideElementOnCancelModalWindow();
});

openInstgrammModal.on("click", function () {
    InstagrammModal.removeAttr("style").show();
    counter_instagramm++;
    slickSliderFunction();
    HideElementOnCancelModalWindow();
});

openBrandModal.on("click", function(){
    BrandMakisuModal.removeAttr("style").show();
    counter_brand++;
    slickSliderFunction();
    HideElementOnCancelModalWindow();
});

// general code for open modal window
function HideElementOnCancelModalWindow() {
    htmlScroll.addClass("no-scroll");
    descriptionSection.removeAttr("style").hide();
    ourWork.removeAttr("style").hide();
    sectionReviews.removeAttr("style").hide();
    footer.removeAttr("style").hide();
}

// slider function
function slickSliderFunction() {
    if ($(".slider").hasClass("slick-slider")) {
        return;
    }
    $(".slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // initialSlide: 1,
        centerMode: true,
        variableWidth: true,
        easing: 'ease',
        speed: 1000,
        infinite: false,
        responsive: [{
            breakpoint: 1190,
            settings: {
                centerMode: false,
                variableWidth: false,
                infinite: true,
            }
        }]
    });
}

// cancelir.on("click", function () {
//     modalWindow.removeAttr("style").hide();
//     htmlScroll.removeClass("no-scroll");
//     descriptionSection.removeAttr("style").show();
//     ourWork.removeAttr("style").show();
//     footer.removeAttr("style").show();
// });

// openInstgramModal.on("click", function () {
//     modalWindow.removeAttr("style").show();
//     slickSlidersFunction();
//     htmlScroll.addClass("no-scroll");
//     descriptionSection.removeAttr("style").hide();
//     ourWork.removeAttr("style").hide();
//     footer.removeAttr("style").hide();
// });

// function slickSlidersFunction() {
//     if ($(".slider").hasClass("slick-slider")) {
//         return;
//     }
//     $(".slider").slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         // initialSlide: 1,
//         centerMode: true,
//         variableWidth: true,
//         easing: 'ease',
//         speed: 1000,
//         infinite: false,
//         responsive: [{
//             breakpoint: 1190,
//             settings: {
//                 centerMode: false,
//                 variableWidth: false,
//                 infinite: true,
//             }
//         }]
//     });
// }

slickSliderReviewsFunction = () => {
    $('.reviews-slider').slick({
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 946,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
            breakpoint: 551,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
}

slickSliderReviewsFunction();