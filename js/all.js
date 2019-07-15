$(function() {
  document.fullscreenEnabled =
    document.fullscreenEnabled ||
    document.mozFullScreenEnabled ||
    document.documentElement.webkitRequestFullScreen;

  function requestFullscreen(body) {
    if (body.requestFullscreen) {
      body.requestFullscreen();
    } else if (body.mozRequestFullScreen) {
      body.mozRequestFullScreen();
    } else if (body.webkitRequestFullScreen) {
      body.webkitRequestFullScreen(body.ALLOW_KEYBOARD_INPUT);
    }
  }

  if (document.fullscreenEnabled) {
    requestFullscreen(document.body);
  }

  // // page scroll
  $(".home").click(function pageScroll() {
    $("html,body").animate({ scrollTop: 0 }, 1000);
    $(".drop-op").hide();
    $(".drop-op li").removeClass("active");
    $(".menu").hide();
    $(".menuButton a").removeClass("change");
  });
  // $('.service').click(function pageScroll() {
  //   $('html,body').animate({ scrollTop: $('#service').offset().top - 150 }, 800)
  // })
  // $('.contactUs').click(function pageScroll() {
  //   $('html,body').animate(
  //     {
  //       scrollTop: $('#contactUs').offset().top - 150
  //     },
  //     800
  //   )
  //   $('#contactUs .text').addClass('active')
  // })
  // $('.qa').click(function pageScroll() {
  //   $('html,body').animate({ scrollTop: $('#faq').offset().top - 100 }, 800)
  // })
  // 通用Page Scroll
  $(".navClick").click(function() {
    let nowSection = $(this)
      .find("a")
      .attr("href");
    $("html, body").animate({
      scrollTop: $(nowSection).offset().top - 150
    });
    $(".drop-op").hide();
    $(".drop-op li").removeClass("active");
    $(".menu").hide();
    $(".menuButton a").removeClass("change");
  });

  //page scroll end

  // //1440px時收合選單
  $(window).resize(function closeMenu() {
    let w = $(window).width();
    if (w >= 1440) {
      $(".menu").hide();
      $(".menuButton a").removeClass("change");
    }
  });

  // 選單變色
  $("nav li").click(function clickColor() {
    $(this)
      .siblings()
      .removeClass("active");
    $(this).toggleClass("active");
  });

  // hamberger 手機平板menu
  $(".menuButton > a").click(function iconChange() {
    $(".menuButton > a").toggleClass("change");
    $(".menu")
      .stop()
      .slideToggle(); //stop 中斷動畫效果
  });
  // header fixed
  $(window).scroll(function fixed() {
    const scrollTop = $(window).scrollTop();
    if (scrollTop > 1) {
      $("#banner").addClass("mt120");
      $("header").addClass("fixed");
    } else {
      $("#banner").removeClass("mt120");
      $("header").removeClass("fixed");
    }
  });
  // nav list drop down
  $(".drop").click(function dropMenu(event) {
    event.preventDefault();
    $(".drop").toggleClass("active");
    $(".drop-op")
      .stop()
      .slideToggle();
  });

  //slogan btn 滑動效果
  $(".slogan .btn").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#contactUs").offset().top - 150
      },
      800
    );
    $(".text").addClass("active");
  });

  // contact us 展開效果
  $("#contactUs > .btn").click(function closeSection() {
    $(".text").toggleClass("active");
  });
  // 送出訊息事件
  $(".text .btn").click(function(e) {
    e.preventDefault();
    alert("成功送出訊息");
  });
  // QA 動畫
  $(".faq").click(function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .find(".answer")
        .slideUp();
    } else {
      $(".faq").addClass("active");
      $(this)
        .find(".answer")
        .slideDown();
      $(this)
        .siblings()
        .removeClass("active");
      $(this)
        .siblings()
        .find(".answer")
        .slideUp();
    }
  });
  //how to buy
  const area = document.getElementById("areaId");
  const list = document.querySelector(".list");
  const country = [
    {
      name: "B-ikea",
      phone: "00-5694644",
      email: "bikea@mail.com",
      place: "Taichung"
    },
    {
      name: "A-ikea",
      phone: "00-3369444",
      email: "aikea@mail.com",
      place: "Taichung"
    },
    {
      name: "C-ikea",
      phone: "22-5694644",
      email: "cikea@mail.com",
      place: "Taipei"
    }
  ];
  Object.freeze(country); //凍結物件或陣列，唯讀

  const len = country.length;
  function updateList(e) {
    const select = e.target.value;
    let str = "";
    for (let i = 0; i < len; i++) {
      if (select == country[i].place) {
        const shop = country[i].name;
        const phoneNum = country[i].phone;
        const email = country[i].email;
        str += `<li class='card'><h4>${shop}</h4>
      <p>Phone Number:</br> ${phoneNum}</p>
      <p>E-mail:</br> ${email}</p></li>
      `;
      }
    }
    list.innerHTML = str;
  }
  $("#areaId").click(updateList);
  // page top
  $(".top a").click(function pageTop(e) {
    e.preventDefault();
    $("html,body").animate({ scrollTop: 0 }, 1000);
  }); // page top end
}); //document Ready end
