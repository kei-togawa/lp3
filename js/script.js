$(function() {
    // ①スクロールする速度
    var scrollSpeed = 500;
  
    // ②href属性が「#」で始まるaタグがクリックされたとき
    $('a[href^="#"]').on('click', function() {
      // ③aタグのhref属性の値を取得
      var href = $(this).attr('href');
  
      // ④ページの先頭へリンク指定されているとき
      if (href === '#' || href === '#top') {
        // ページトップへスクロールさせる
        $('html, body').animate({ scrollTop: 0 }, scrollSpeed, 'swing');
        return false;
      }
  
      // ⑤遷移先要素の位置を取得
      var offset = $(href).offset().top;
      // ⑥要素までスクロールさせる
      $('html, body').animate({ scrollTop: offset }, scrollSpeed, 'swing');
      return false;
    });
  });

  $(function () {
    ScrollReveal().reveal('.vision_img', {
      delay: 300, // アニメーション開始までの時間
      duration: 1600, // アニメーション完了にかかる時間
      rotate: { x: 0, y: 600, z: 0 }, // 回転の設定
      reset: true // フレームインの度に動かすか
    });
    });
    $(function () {
        ScrollReveal().reveal('.vision_txt', {
          delay: 300, // アニメーション開始までの時間
          duration: 1600, // アニメーション完了にかかる時間
          rotate: { x: 0, y: 600, z: 0 }, // 回転の設定
          reset: true // フレームインの度に動かすか
        });
        });

        $(function () {
            ScrollReveal().reveal('.section_ttl', {
              delay: 300, // アニメーション開始までの時間
              duration: 1600, // アニメーション完了にかかる時間
              origin: 'bottom', // 要素がどの方向から来るか
              distance: '50px', // 移動する距離
              reset: true // フレームインの度に動かすか
            });
            });
            $(function () {
                ScrollReveal().reveal('.service_txt1 img', {
                  delay: 500, // アニメーション開始までの時間
                  duration: 2500, // アニメーション完了にかかる時間
                  scale: 0.1, // 表示前のサイズ 0.1　なら 0.1倍
                  reset: true // フレームインの度に動かすか
                });
                ScrollReveal().reveal('.service_txt1 p', {
                    delay: 400, // アニメーション開始までの時間
                    duration: 2000, // アニメーション完了にかかる時間
                    scale: 0.1, // 表示前のサイズ 0.1　なら 0.1倍
                    reset: true // フレームインの度に動かすか
                  });
                });
                $(function () {
                    ScrollReveal().reveal('.service_txt2 img', {
                      delay: 500, // アニメーション開始までの時間
                      duration: 2500, // アニメーション完了にかかる時間
                      scale: 0.1, // 表示前のサイズ 0.1　なら 0.1倍
                      reset: true // フレームインの度に動かすか
                    });
                    ScrollReveal().reveal('.service_txt2 p', {
                        delay: 400, // アニメーション開始までの時間
                        duration: 2000, // アニメーション完了にかかる時間
                        scale: 0.1, // 表示前のサイズ 0.1　なら 0.1倍
                        reset: true // フレームインの度に動かすか
                      });
                    });
                    $(function () {
                        ScrollReveal().reveal('.service_txt3 img', {
                          delay: 500, // アニメーション開始までの時間
                          duration: 2500, // アニメーション完了にかかる時間
                          scale: 0.1, // 表示前のサイズ 0.1　なら 0.1倍
                          reset: true // フレームインの度に動かすか
                        });
                        ScrollReveal().reveal('.service_txt3 p', {
                            delay: 400, // アニメーション開始までの時間
                            duration: 2000, // アニメーション完了にかかる時間
                            scale: 0.1, // 表示前のサイズ 0.1　なら 0.1倍
                            reset: true // フレームインの度に動かすか
                          });
                        });

            $(function () {
                ScrollReveal().reveal('.inner', {
                  delay: 300, // アニメーション開始までの時間
                  duration: 1600, // アニメーション完了にかかる時間
                  origin: 'bottom', // 要素がどの方向から来るか
                  distance: '50px', // 移動する距離
                  reset: true // フレームインの度に動かすか
                });
                });
                $(function () {
                    ScrollReveal().reveal('.cp_qa', {
                      delay: 300, // アニメーション開始までの時間
                      duration: 1600, // アニメーション完了にかかる時間
                      origin: 'bottom', // 要素がどの方向から来るか
                      distance: '50px', // 移動する距離
                      reset: true // フレームインの度に動かすか
                    });
                    });
                    $(function () {
                        ScrollReveal().reveal('#contact', {
                          delay: 300, // アニメーション開始までの時間
                          duration: 1600, // アニメーション完了にかかる時間
                          origin: 'bottom', // 要素がどの方向から来るか
                          distance: '50px', // 移動する距離
                          reset: true // フレームインの度に動かすか
                        });
                        });
                    $(function () {
                        ScrollReveal().reveal('.form', {
                          delay: 300, // アニメーション開始までの時間
                          duration: 1600, // アニメーション完了にかかる時間
                          origin: 'bottom', // 要素がどの方向から来るか
                          distance: '50px', // 移動する距離
                          reset: true // フレームインの度に動かすか
                        });
                        });
                        window.onunload = function() {};
function sizecheck() {
    w = window.innerWidth ? window.innerWidth : $(window).width();
    h = window.innerHeight ? window.innerHeight : $(window).height();
}
                        
sizecheck();
                        
$(function () {
                        
    if (w > 769) {
} else { 
 $("header .drawer").click(function(){
 $('body').toggleClass('nav-open');
 $('header .navbar').fadeToggle(200);
  });
                        
  $("header li a").click(function(){
  $('body').toggleClass('nav-open');
  $('header .navbar').fadeToggle(200);
     });
      }
    }); 

