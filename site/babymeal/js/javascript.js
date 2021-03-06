//슬라이드 별로 준비핸들러를 따로 만듦.(변수명이 겹쳐도 유효범위가 다르기 때문)

//메뉴 -----------------------------------

$(function(){
  const $gnbMenu = $('nav>.gnb');
  const $lnbBg = $('.lnb-bg');
  const $lnb = $('.lnb');

  const $liBgColor = $('.gnb>li:first-child>a');
  
  $liBgColor.css({
    backgroundColor : '#fc7a11',
    color : '#fff'
  });
  
  $gnbMenu.on('mouseover', function(evt){

    evt.preventDefault();

    $lnbBg.stop().fadeIn(50);
    $lnb.stop().fadeIn(50);
  });

  $gnbMenu.on('mouseout', function(evt){

    evt.preventDefault();

    $lnbBg.stop().fadeOut(50);
    $lnb.stop().fadeOut(50);
  });
 
});


//페이드 배너(비주얼 영역)------------------------------
$(function(){

   const $indicator = $('.indicator>li>a');
   const $fadeBanner =$('.fade-banner>li');
   
   let nowIdx = 0;
   let oldIdx = nowIdx;
   let intervalKey = null;

   function indicatorFn(){

     $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');           
   }

   function fadeAutoPlay(){
     intervalKey = setInterval(function(){

       oldIdx = nowIdx ;

       if(nowIdx>0){
         nowIdx = 0;
       }else{
         nowIdx ++ ;
       }

       indicatorFn();
      
       $fadeBanner.eq(oldIdx).stop().fadeOut(1000);
       $fadeBanner.eq(nowIdx).stop().fadeIn(1000);
          

     },5000);  
   }

   $indicator.on('click', function(evt){

     evt.preventDefault();

     oldIdx = nowIdx;
     nowIdx = $indicator.index(this);

     //활성화
     indicatorFn();

     $fadeBanner.eq(oldIdx).stop().fadeOut(1000);
     $fadeBanner.eq(nowIdx).stop().fadeIn(1000);
     
   });

   fadeAutoPlay();

});


// 이벤트 영역----------------------------------
$(function(){

    const $fadeCont = $('.info_fade>ul>li');
    const $fadeIndicator = $('.info_indicator>a');   
       
   let nowIdx = 0;
   let oldIdx = nowIdx;
   let intervalKey = null;

   function indicatorFn(){
    $fadeIndicator.eq(nowIdx).addClass('on').siblings().removeClass('on');           
  }

    function fadeAutoPlay_2(){
      intervalKey = setInterval(function(){
  
        oldIdx = nowIdx ;

        if(nowIdx>0){
          nowIdx = 0;
        }else{
          nowIdx ++;
        }

        indicatorFn();
 
        $fadeCont.eq(oldIdx).stop().fadeOut(1000);
        $fadeCont.eq(nowIdx).stop().fadeIn(1000);
        
      },5000);     
    }

    $fadeIndicator.on('click', function(evt){
      
      evt.preventDefault();
      
      oldIdx = nowIdx;
      nowIdx = $fadeIndicator.index(this);
      
      $fadeCont.eq(oldIdx).stop().fadeOut(1000);
      $fadeCont.eq(nowIdx).stop().fadeIn(1000);

    });

    fadeAutoPlay_2();

});


// 월령별 제품소개 영역----------------------------------
$(function(){
    
   const $btnNext = $('.next');
   const $btnPrev = $('.prev');
     
   let nowIdx = 0;
   
   $btnNext.on('click', function(evt){

     evt.preventDefault();

     if(nowIdx<5){
       nowIdx ++;
     }else{
       nowIdx = 0;
     }
     
     //다음 버튼을 클릭할 때마다 변화된 상태의 DOM을 새롭게 가져온다.
       const $container = $('.slide-container');
       const $slides = $('.slide-container>li');

       $container.stop().animate({ left : -190},400,function(){

         $slides.first().appendTo($container);
         $container.css({left : 0});
       });
    });


    $btnPrev.on('click', function(evt){

     evt.preventDefault();

     if(nowIdx>0){
       nowIdx --;
     }else{
       nowIdx = 5;
     }

     const $container = $('.slide-container');
     const $slides = $('.slide-container>li');

     $slides.last().prependTo($container);
     $container.css({left : -190});
     $container.stop().animate({left : 0},400,'easeInOutCubic',function(){});
    });


    setInterval(function(){

     if(nowIdx<5){
       nowIdx ++;
     }else{
       nowIdx = 0;
     }
     
       const $container = $('.slide-container');
       const $slides = $('.slide-container>li');

       $container.stop().animate({ left : -190},1000,'easeInOutCubic',function(){

         $slides.first().appendTo($container);
         $container.css({left : 0});
     }); 
   },4000);

});

//tv 버튼--------------------------------------------
$(function(){
      $('.video-container>button').on('click', function(){
        $('.video-container').css({
          display : 'none' 
        });
      });      

});
