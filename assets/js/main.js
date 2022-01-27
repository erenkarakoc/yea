;(function ($) {
  // Managers Slider
  $(".managers-slider").owlCarousel({
    autoWidth: true,
    mergeFit: true,
    dots: false,
    nav: true,
    navText: [
      "<svg style='transform: scaleX(-1);' width='6' height='10' viewBox='0 0 6 10' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M0.528514 0.528514C0.788864 0.268165 1.21097 0.268165 1.47132 0.528514L5.47132 4.52851C5.73167 4.78886 5.73167 5.21097 5.47132 5.47132L1.47132 9.47132C1.21097 9.73167 0.788864 9.73167 0.528514 9.47132C0.268165 9.21097 0.268165 8.78886 0.528514 8.52851L4.05711 4.99992L0.528514 1.47132C0.268165 1.21097 0.268165 0.788864 0.528514 0.528514Z' fill='white'/></svg>",
      "<svg width='6' height='10' viewBox='0 0 6 10' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M0.528514 0.528514C0.788864 0.268165 1.21097 0.268165 1.47132 0.528514L5.47132 4.52851C5.73167 4.78886 5.73167 5.21097 5.47132 5.47132L1.47132 9.47132C1.21097 9.73167 0.788864 9.73167 0.528514 9.47132C0.268165 9.21097 0.268165 8.78886 0.528514 8.52851L4.05711 4.99992L0.528514 1.47132C0.268165 1.21097 0.268165 0.788864 0.528514 0.528514Z' fill='white'/></svg>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 3,
      },
      768: {
        items: 4,
      },
      991: {
        items: 4,
      },
      1200: {
        items: 4,
      },
      1360: {
        items: 5,
      },
    },
  })

  $(document).on("click", ".managers-nav-item", function () {
    var dataTarget = $(this).attr("data-target")

    $(".managers-nav-item").removeClass("active")
    $(this).addClass("active")

    $(".managers-slider").removeClass("active")
    $(dataTarget).addClass("active")
  })

  // Speaker Cards
  $(document).on("click", ".speakers-nav-item", function () {
    var dataTarget = $(this).attr("data-target")

    $(".speakers-nav-item").removeClass("active")
    $(this).addClass("active")

    $(".speaker-cards").removeClass("active")
    $(dataTarget).addClass("active")
  })

  // YEA Steps
  $(document).on("click", ".yea-step", function () {
    var dataTarget = $(this).attr("data-target")
    var dataTargetMobile = $(this).attr("data-target") + "-mobile"

    $(".yea-step").removeClass("active")
    $(this).addClass("active")

    if ($(window).width() > 992) {
      $(".yea-step-content").addClass("d-none")
      $(dataTarget).removeClass("d-none")
    } else {
      $(".yea-wrapper").addClass("d-none")
      $(".yea-step-content").addClass("d-none")
      $(dataTargetMobile).removeClass("d-none")
      $(dataTargetMobile).parent().removeClass("d-none")
    }

    if (dataTarget === "#step-4") {
      $(".yea-wrapper .logo").removeClass("go-right")
    } else {
      $(".yea-wrapper .logo").add("go-right")
    }
  })

  // Question
  $(document).on("click", ".question", function () {
    $(".question").removeClass("active")
    $(this).addClass("active")
  })

  // YEA Form Tabs
  $(document).on("click", ".toggle-yea-form", function () {
    var dataTarget = $(this).attr("data-target")

    $(this).closest(".yea-form").addClass("d-none")
    $(dataTarget).removeClass("d-none")
  })

  $(document).on("click", ".yea-form-nav-item", function () {
    var dataTarget = $(this).attr("data-target")

    $(".yea-form-nav-item").removeClass("active")
    $(this).addClass("active")

    $(".yea-tab").removeClass("active")
    $(dataTarget).addClass("active")
  })

  // Create Side Menu
  $(function () {
    var sideMenu = $(".sidemenu")
    var nav = $(".header-center").html()
    var logo = $("header").find(".logo").parent().parent().html()
    var burgerSvg = $(".side-toggle").html()

    var mobileNav = `
      <div class="sidemenu-top">
        <button class="side-toggle">
          ${burgerSvg}
        </button>
        ${logo}
      </div>

      ${nav}
    `

    $(sideMenu).append(mobileNav)
  })

  // Side Menu
  $(document).on("click", ".side-toggle", function () {
    toggleSideMenu()
  })
  $(document).on("click", function (e) {
    var $target = e.target

    if ($(".sidemenu").hasClass("active")) {
      if (
        !$($target).closest(".sidemenu").length &&
        !$($target).closest(".side-toggle").length
      ) {
        toggleSideMenu()
      }
    }
  })

  function toggleSideMenu() {
    if ($(".sidemenu").hasClass("active")) {
      $(".sidemenu").removeClass("active")
      $("body").css("overflow-y", "unset")
    } else {
      $(".sidemenu").addClass("active")
      $("body").css("overflow-y", "hidden")
    }
  }

  $(document).on("click", ".nav-w-dropdown", function () {
    if ($(window).width() < 991) {
      $(this).toggleClass("active")
    }
  })

  // Wide Slider
  var flat = $("#flat").flipster({
    style: "flat",
    spacing: -0.25,
    buttons: true,
  })

  // Select Input
  $(document).on("change", "select", function () {
    select_placeholder()
  })
  select_placeholder()

  function select_placeholder() {
    $("select").each(function () {
      var select_val = jQuery(this).val()
      if (select_val != "") {
        $(this).removeClass("select-placeholder")
      } else {
        $(this).addClass("select-placeholder")
      }
    })
  }

  // Remove loader when ready
  $(document).ready(function () {
    $("#loader").fadeOut()
  })

  // Set Wide Slider button positions
  $(document).ready(function () {
    var windowWidth = $(window).width()
    var currentSliderWidth = $(".flipster__item--current").width()
    var prevButton = $(".flipster__button--prev")
    var nextButton = $(".flipster__button--next")

    var widthToPush = (windowWidth - currentSliderWidth) / 2 + "px"

    if (windowWidth > 1200) {
      prevButton.css("left", widthToPush)
      nextButton.css("right", widthToPush)
    }
  })

  // Set Flipster button disabled if last slide
  $(document).on("click", ".flipster__button", function () {
    $(".flipster__button").removeClass("disabled")

    if ($(".flipster__item--current").is(":first-child")) {
      $(".flipster__button--prev").addClass("disabled")
    } else if ($(".flipster__item--current").is(":last-child")) {
      $(".flipster__button--next").addClass("disabled")
    }
  })

  $(function () {
    var iframe = $("#flat").find("iframe")
    var playVideo = $("<div>").addClass("play-video")

    $(iframe).parent().append(playVideo)

    // iframe'leri thumbnail ile değiştir
    iframe.each((idx, iframe) => {
      var iframeSrc = $(iframe).attr("src")

      // Eğer iframe YouTube ise
      if (iframeSrc.includes("youtube")) {
        // YouTube video ID'si al
        var ID = ""
        var url = iframeSrc
          .replace(/(>|<)/gi, "")
          .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/)

        if (url[2] !== undefined) {
          ID = url[2].split(/[^0-9a-z_\-]/i)
          ID = ID[0]
        } else {
          ID = url
        }

        // YouTube thumbnail bul
        var thumbnailLink = "https://img.youtube.com/vi/" + ID + "/0.jpg"

        // Kaynak ver
        var source = "youtube"
      }

      // Eğer iframe Vimeo ise
      else if (iframeSrc.includes("vimeo")) {
        var ID = iframeSrc.replace(/[^0-9]/g, "").slice(0, 9)

        // Vimeo thumbnail bul
        var thumbnailLink = "https://vumbnail.com/" + ID + ".jpg"

        // Kaynak ver
        var source = "vimeo"
      }

      // <iframe>, <img> ile değistir
      var imgEl = $("<img>")
        .attr({ src: thumbnailLink, "data-source": source, "data-target": ID })
        .addClass("wide-tn")

      $(iframe).replaceWith(imgEl)
    })

    $("#flat").append($("<div>").addClass("video-popup"))
  })

  $(document).on("click", ".wide-tn", function () {
    $(".video-popup").addClass("active")
    $("body").css("overflow-y", "hidden")

    var dataTarget = $(this).attr("data-target")
    var dataSource = $(this).attr("data-source")

    // kaynak YouTube ise
    if (dataSource === "youtube") {
      var iframeSrc = "https://www.youtube.com/embed/" + dataTarget
    }

    // kaynak Vimeo ise
    else if (dataSource === "vimeo") {
      var iframeSrc = "https://player.vimeo.com/video/" + dataTarget
    }

    var iframe = $("<iframe>").attr({
      src: iframeSrc,
      frameborder: "0",
      allow:
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen",
    })

    var iframeContainer = $("<div>").addClass("iframe-container")
    var popupClose = $("<div>").addClass("video-popup-close")

    $(".video-popup").html(iframeContainer)

    if (!$(".video-popup-container").length) {
      $(".video-popup").append(popupClose)
    }

    $(".iframe-container").html(iframe)
  })

  $(document).on("click", ".play-video", function () {
    $(this).closest(".wide-tn").click()
  })

  $(document).on("click", ".video-popup-close", function () {
    videoPopupClose()
  })
  $(document).on("click", ".video-popup", function (e) {
    var $target = e.target
    if (!$($target).closest("iframe").length) {
      videoPopupClose()
    }
  })

  function videoPopupClose() {
    $(".video-popup").removeClass("active")
    $(".video-popup").find("iframe").remove()
    $("body").css("overflow-y", "unset")
  }
})(jQuery)
