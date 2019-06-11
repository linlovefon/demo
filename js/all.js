$(function() {
  // // page scroll
  $('.home').click(function pageScroll() {
    $('html,body').animate({ scrollTop: 0 }, 1000)
  })
  $('.service').click(function pageScroll() {
    $('html,body').animate({ scrollTop: $('#service').offset().top - 150 }, 800)
  })
  $('.products').click(function pageScroll() {
    $('html,body').animate(
      { scrollTop: $('#products').offset().top - 150 },
      800
    )
  })
  $('.contactUs').click(function pageScroll() {
    $('html,body').animate(
      { scrollTop: $('#contactUs').offset().top - 150 },
      800
    )
    $('#contactUs .text').addClass('active')
  })
  $('.qa').click(function pageScroll() {
    $('html,body').animate({ scrollTop: $('#faq').offset().top - 100 }, 800)
  })
  // 通用Page Scroll
  // $('ul>li').click(function () {
  //   let nowSection = $(this).find('a').attr('href');
  //   $('html, body').animate({
  //     scrollTop: $(nowSection).offset().top - 150
  //   });
  // });

  //page scroll end

  // //1440px時收合選單
  $(window).resize(function closeMenu() {
    let w = $(window).width()
    if (w >= 1440) {
      $('.menu').hide()
      $('.menuButton a').removeClass('change')
    }
  })

  // 選單變色
  $('nav li').click(function clickColor() {
    $(this)
      .siblings()
      .removeClass('active')
    $(this).toggleClass('active')
  })

  // hamberger 手機平板menu
  $('.menuButton > a').click(function iconChange() {
    $('.menuButton > a').toggleClass('change')
    $('.menu')
      .stop()
      .slideToggle() //stop 中斷動畫效果
  })
  // header fixed
  $(window).scroll(function fixed() {
    const scrollTop = $(window).scrollTop()
    if (scrollTop > 1) {
      $('#banner').addClass('mt120')
      $('header').addClass('fixed')
    } else {
      $('#banner').removeClass('mt120')
      $('header').removeClass('fixed')
    }
  })
  // nav list drop down
  $('.drop').click(function dropMenu(event) {
    event.preventDefault()
    $('.drop').toggleClass('active')
    $('.drop-op')
      .stop()
      .slideToggle()
  })

  //slogan btn 滑動效果
  $('.slogan .btn').click(function() {
    $('html, body').animate(
      { scrollTop: $('#contactUs').offset().top - 150 },
      800
    )
    $('.text').addClass('active')
  })

  // contact us 展開效果
  $('#contactUs > .btn').click(function closeSection() {
    $('.text').toggleClass('active')
  })

  // QA 動畫
  $('.faq').click(function() {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active')
      $(this)
        .find('.answer')
        .slideUp()
    } else {
      $('.faq').addClass('active')
      $(this)
        .find('.answer')
        .slideDown()
      $(this)
        .siblings()
        .removeClass('active')
      $(this)
        .siblings()
        .find('.answer')
        .slideUp()
    }
  })
  // 送出訊息事件
  let submit = document.querySelector('.text .btn')
  submit.addEventListener(
    'click',
    function() {
      alert('成功送出訊息')
    },
    false
  )

  // page top
  $('.top a').click(function pageTop(e) {
    e.preventDefault()
    $('html,body').animate({ scrollTop: 0 }, 1000)
  }) // page top end
}) //document Ready end
