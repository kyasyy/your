$(function() {
	/* 「同意する」チェックイベント */
	$('[type="checkbox"]').on('click', function(){
		if($('[type="checkbox"]').prop("checked")){
			$('[type="submit"]').css('background-color', 'rgb(51, 51, 255)');
		} else {
			$('[type="submit"]').css('background-color', 'rgb(102, 102, 102)');
		}
	});

	/* 「同意する」がチェックされていない場合submit=false */
	$('[type="submit"]').on('click', function(){
		if ($('[type="submit"]').css('background-color') == 'rgb(102, 102, 102)') {
			return false;
		}
	});
});


/* フェードイン */
$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200){
                $(this).addClass('scrollin');
            }
        });
    });
});


/* 横からのフェードイン */
$(function () {

    // aimation呼び出し
    if ($('.js-scroll-trigger').length) {
        scrollAnimation();
    }

    // aimation関数
    function scrollAnimation() {
        $(window).scroll(function () {
            $(".js-scroll-trigger").each(function () {
                let position = $(this).offset().top,
                    scroll = $(window).scrollTop(),
                    windowHeight = $(window).height();

                if (scroll > position - windowHeight + 200) {
                    $(this).addClass('side-active');
                }
            });
        });
    }
    $(window).trigger('scroll');
});
/* 横からのフェードイン */

/* アコーディオン */
$(function () {
    $('.jsAccordionTitle').on('click', function () {
      $(this).next().toggleClass('is-open');
      $(this).toggleClass('is-active');
    });
  });

/* アコーディオン */

/* お問い合わせ */
$("a").on("click", function() {

    // クリックされた要素のhref属性の値を取得 例：#first
    const scrollTarget = $(this)[0].attributes[1].nodeValue;

    // 取得した値のid属性がついた要素の位置を取得
    const offsetTop = $(scrollTarget).offset().top;

    // 取得した箇所に移動
    $("html, body").animate({ scrollTop: offsetTop }, 300);

    return false;
});
/* //お問い合わせ */


/* トップに戻る */
$(function () {
    var topBtn = $('#page-top');
    topBtn.hide();
    //スクロールが500に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スルスルっとスクロールでトップへもどる
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});
/* トップに戻る */

/* ハンバーガー */
(function($) {
  var $nav   = $('#hamburger-navArea');
  var $btn   = $('.toggle_btn');
  var $mask  = $('#mask');
  var open   = 'open'; // class
  // menu open close
  $btn.on( 'click', function() {
    if ( ! $nav.hasClass( open ) ) {
      $nav.addClass( open );
    } else {
      $nav.removeClass( open );
    }
  });
  // mask close
  $mask.on('click', function() {
    $nav.removeClass( open );
  });
} )(jQuery);

  
/* //ハンバーガー */
