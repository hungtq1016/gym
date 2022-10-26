import "../css/app.css";
import $ from "jquery";
import "slick-carousel";
const spSize = 769;
const speedSlide = 500;
const buttons = [
  {
    //Outline are "->" and "<-" with border radius full
    next:'<button class="absolute top-[22.222%] md:top-[110px] -translate-y-1/2 -right-7 border rounded-full border-black p-3 opacity-60 hover:opacity-100 next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.135 13.274" class="fill-black w-4 h-4"><path id="Path_9779" data-name="Path 9779" d="M649.946,585.483c.017-.024.032-.047.047-.074s.028-.055.042-.083.016-.029.022-.045.005-.018.009-.027c.011-.029.02-.06.031-.09s.014-.05.02-.075.011-.061.015-.09.006-.052.009-.078a.593.593,0,0,0,0-.094.481.481,0,0,0,0-.074c0-.033-.006-.065-.01-.1s-.008-.048-.013-.073-.016-.062-.027-.093a.647.647,0,0,0-.023-.071.331.331,0,0,1-.01-.033c-.008-.019-.019-.036-.028-.055l-.036-.07a.829.829,0,0,0-.051-.08c-.014-.022-.028-.042-.043-.062s-.043-.051-.066-.076a.381.381,0,0,0-.031-.034l-5.469-5.469a1.168,1.168,0,0,0-1.652,1.651l3.476,3.474h-7.981a1.169,1.169,0,0,0,0,2.338h7.981l-3.476,3.474a1.169,1.169,0,0,0,1.652,1.653l5.47-5.47.032-.037c.02-.024.043-.048.062-.074S649.931,585.506,649.946,585.483Z" transform="translate(-637.01 -578.198)"/></svg></button>',
    prev:'<button class="absolute top-[22.222%] md:top-[110px] -translate-y-1/2 -left-7 z-[5] border rounded-full border-black p-3 opacity-60 hover:opacity-100 prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.135 13.274" class="fill-black w-4 h-4"><path id="Path_9779" data-name="Path 9779" d="M637.208,585.483c-.017-.024-.032-.047-.047-.074s-.028-.055-.042-.083-.016-.029-.022-.045-.005-.018-.009-.027c-.011-.029-.02-.06-.031-.09s-.014-.05-.02-.075-.011-.061-.015-.09-.006-.052-.009-.078a.593.593,0,0,1,0-.094.481.481,0,0,1,0-.074c0-.033.006-.065.01-.1s.008-.048.013-.073.016-.062.027-.093a.647.647,0,0,1,.023-.071.331.331,0,0,0,.01-.033c.008-.019.019-.036.028-.055l.036-.07a.829.829,0,0,1,.051-.08c.014-.022.028-.042.043-.062s.043-.051.066-.076a.381.381,0,0,1,.031-.034l5.469-5.469a1.168,1.168,0,0,1,1.652,1.651L641,583.666h7.981a1.169,1.169,0,0,1,0,2.338H641l3.476,3.474a1.169,1.169,0,0,1-1.652,1.653l-5.47-5.47-.032-.037c-.02-.024-.043-.048-.062-.074S637.223,585.506,637.208,585.483Z" transform="translate(-637.01 -578.198)"/></svg></button>',
  },
  {
  //Angle are ">" and "<" without border and bg
    next:'<button class="absolute top-1/2 -translate-y-1/2 right-7 opacity-60 hover:opacity-100 next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 31.459" class="w-5 h-10 fill-white"><path id="Path_10914" data-name="Path 10914" d="M167.194,683.872,151.465,699.6l4.271,4.271,11.459-11.459,11.459,11.459,4.27-4.271Z" transform="translate(703.872 -151.465) rotate(90)"/></svg></button>',
    prev:'<button class="absolute top-1/2 -translate-y-1/2 left-7 z-[5] opacity-60 hover:opacity-100 prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 31.459" class="w-5 h-10 fill-white"><path id="Path_10915" data-name="Path 10915" d="M15.729,20,0,4.271,4.271,0,15.729,11.459,27.188,0l4.27,4.271Z" transform="translate(20) rotate(90)"/></svg></button>',
  },
  {
    //Bg are "->" and "<-" with background white and border raidus full
    next:'<button class="btn-bg-white right-5 z-10"><svg xmlns="http://www.w3.org/2000/svg" width="13.135" height="13.274" viewBox="0 0 13.135 13.274"><path id="Path_9779" data-name="Path 9779" d="M649.946,585.483c.017-.024.032-.047.047-.074s.028-.055.042-.083.016-.029.022-.045.005-.018.009-.027c.011-.029.02-.06.031-.09s.014-.05.02-.075.011-.061.015-.09.006-.052.009-.078a.593.593,0,0,0,0-.094.481.481,0,0,0,0-.074c0-.033-.006-.065-.01-.1s-.008-.048-.013-.073-.016-.062-.027-.093a.647.647,0,0,0-.023-.071.331.331,0,0,1-.01-.033c-.008-.019-.019-.036-.028-.055l-.036-.07a.829.829,0,0,0-.051-.08c-.014-.022-.028-.042-.043-.062s-.043-.051-.066-.076a.381.381,0,0,0-.031-.034l-5.469-5.469a1.168,1.168,0,0,0-1.652,1.651l3.476,3.474h-7.981a1.169,1.169,0,0,0,0,2.338h7.981l-3.476,3.474a1.169,1.169,0,0,0,1.652,1.653l5.47-5.47.032-.037c.02-.024.043-.048.062-.074S649.931,585.506,649.946,585.483Z" transform="translate(-637.01 -578.198)"/></svg></button>',
    prev:'<button class="btn-bg-white left-5 z-10"><svg xmlns="http://www.w3.org/2000/svg" width="13.135" height="13.274" viewBox="0 0 13.135 13.274"><path id="Path_9779" data-name="Path 9779" d="M637.208,585.483c-.017-.024-.032-.047-.047-.074s-.028-.055-.042-.083-.016-.029-.022-.045-.005-.018-.009-.027c-.011-.029-.02-.06-.031-.09s-.014-.05-.02-.075-.011-.061-.015-.09-.006-.052-.009-.078a.593.593,0,0,1,0-.094.481.481,0,0,1,0-.074c0-.033.006-.065.01-.1s.008-.048.013-.073.016-.062.027-.093a.647.647,0,0,1,.023-.071.331.331,0,0,0,.01-.033c.008-.019.019-.036.028-.055l.036-.07a.829.829,0,0,1,.051-.08c.014-.022.028-.042.043-.062s.043-.051.066-.076a.381.381,0,0,1,.031-.034l5.469-5.469a1.168,1.168,0,0,1,1.652,1.651L641,583.666h7.981a1.169,1.169,0,0,1,0,2.338H641l3.476,3.474a1.169,1.169,0,0,1-1.652,1.653l-5.47-5.47-.032-.037c-.02-.024-.043-.048-.062-.074S637.223,585.506,637.208,585.483Z" transform="translate(-637.01 -578.198)"/></svg></button>',
  },
];

window.addEventListener("DOMContentLoaded", function () {
  jqUpdateSize();
  $(window).resize(jqUpdateSize); // When the browser changes size
  $(".toggle").click(function () {
    $(this).parents(".collapse").next(".show").toggleClass("hidden");
    $(this).toggleClass("closing opening");
    if (
      typeof $(this).parents(".collapse").attr("faq-toggle") !== "undefined" &&
      $(this).parents(".collapse").attr("faq-toggle") !== false
    ) {
      $(this).parents(".faq-section").toggleClass("bg-zinc-100");
    }
  });

  $(".pc_toggle").click(function () {
    var data = $(this).attr("data-toggle");
    $(this)
      .parents(".header-container")
      .nextAll("." + data)
      .toggleClass("hidden");
  });

  $(".return").click(function (e) {
    e.preventDefault();
    $(this).parents("section[data-hover]").toggleClass("hidden");
    $("a.sp_dropdown div div").removeClass("z-[-1]");
  });
  function jqUpdateSize() {
    // Get the dimensions of the viewport
    if ($(window).width() < spSize) {
      $(".sub_dropdown").appendTo(".sp_dropdown");
      $(".search").hasClass("hidden") ? $(".search").removeClass("hidden") : "";
      $(".search").prependTo("#navbar");
      $("#hover-container").prependTo("#navbar");
      $("#media").appendTo("#navbar");
      $(".h-t-f").appendTo("#contact-footer");
      $("#list").prependTo("#contact-header");
    } else {
      $("#media").appendTo("#footer-top");
      $(".search,.sub_dropdown").appendTo("#header");
      $("#hover-container").prependTo(".hover-nav");
      $(".search").is(":visible") ? $(".search").addClass("hidden") : "";
      $(".h-t-f,#list").appendTo("#contact-header");
    }
  }

  $(document).scroll(function () {
    checkOffset();
  });
  $(".nav-link").on("click", function (e) {
    e.preventDefault();
    $(".nav-link").removeClass("active");
    var tabID = $(this).attr("data-target");
    $('.nav-link[data-target="' + tabID + '"]').addClass("active");
    $(".tab").addClass("hidden");
    $('.tab[data-tab="' + tabID + '"]').removeClass("hidden");
  });

  $(".nav-header").hover(function () {
    $(".nav-header").removeClass("active");
    $(this).addClass("active");
    $(".category").addClass("hidden");
    var tabID = $(this).attr("hover-target");
    $('.category[data-hover="' + tabID + '"]').removeClass("hidden");
    if ($(window).width() < spSize) {
      $("a.sp_dropdown div div").addClass("z-[-1]");
    }
  });

  $("input:checkbox").change(function () {
    if ($(this).is(":checked")) {
      $(this).parent().addClass("active");
    } else {
      $(this).parent().removeClass("active");
    }
  });

  $(".count").click(function (e) {
    e.preventDefault();
    var count = $(this).data("count");
    var value = $(this).parents(".counter").find(".value").val();
    if (count == "plus") {
      value++;
    } else {
      if (value > 0) {
        value--;
      }
    }
    $($(this).parents(".counter").find(".value")).val(value);
  });

  $("label[data-color-target]").click(function (e) {
    e.preventDefault();
    var color = $(this).children("input").val();
    $(this).parents("fieldset").prev().find(".show-text").text(color);
    $(this).nextAll().removeClass("active");
    $(this).prevAll().removeClass("active");
    $(this).addClass("active");
  });

  $(".products").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    autoplay: true,
    nextArrow: buttons[0].next,
    prevArrow: buttons[0].prev,
    responsive: [
      {
        breakpoint: spSize,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  });
  $(".casestudy").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    autoplay: true,
    nextArrow: buttons[0].next,
    prevArrow: buttons[0].prev,
     responsive: [
        {
           breakpoint: spSize,
           settings: "unslick"
        },
     ]
  });
  $(".banners").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    nextArrow: buttons[1].next,
    prevArrow: buttons[1].prev,
  });
  $(".partners").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    nextArrow: buttons[1].next,
    prevArrow: buttons[1].prev,
    responsive: [
      {
        breakpoint: spSize,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  $(".product-show").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    arrows:false,
    asNavFor: ".product-nav",
  });
  $(".product-nav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: speedSlide,
    nextArrow: buttons[1].next,
    prevArrow: buttons[1].prev,
    asNavFor: ".product-show",
    focusOnSelect: true,
  });
  $(".slider-1-1-bg").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    nextArrow: buttons[2].next,
    prevArrow: buttons[2].prev,
    asNavFor: ".slider-vertical",
  });
  $(".slider-vertical").slick({
    autoplay: true,
    speed: speedSlide,
    vertical: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    isArrow: false,
    asNavFor: ".slider-1-1-bg",
    focusOnSelect: true,
  });
});

function checkOffset() {
  if (
    $("#total-price-float").offset().top + $("#total-price-float").height() >=
    $("footer").offset().top - 10
  )
    $("#total-price-float").css("position", "relative");
  if ($(document).scrollTop() + window.innerHeight < $("footer").offset().top)
    $("#total-price-float").css("position", "fixed"); // restore when you scroll up
}

$(window).on("resize", function () {
  $(".slider-1-2").slick("resize");
});
