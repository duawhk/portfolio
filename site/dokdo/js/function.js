$(function(){
    
  
    //메인    
      const $bgSlides = $('header > .bg > ol > li');
      const $bgbtnPrev = $('header > .dokdo > .pagination > .prev');
      const $bgbtnNext = $('header > .dokdo > .pagination > .next');
      const $bgbtnPlay = $('header > .dokdo > .pagination > .play');
      const $bgbtnStop = $('header > .dokdo > .pagination > .stop');

      let nowIdx = 0;
      let oldIdx = nowIdx;
      let intervalKey = null;

     //함수
      function bgFadeFn(){

        $bgSlides.eq(oldIdx).stop().fadeOut(1000);
        $bgSlides.eq(nowIdx).stop().fadeIn(1000);
      }

      function bgAutoPlay(){
        intervalKey = setInterval(function(){
          oldIdx = nowIdx;
  
          if(nowIdx<2){
            nowIdx ++;
          }else{
            nowIdx = 0;
          }
  
          bgFadeFn();
  
        },4000);
  
       }

      //다음 버튼
      $bgbtnNext.on('click', function(evt){

        evt.preventDefault();

        oldIdx = nowIdx;

        if(nowIdx<2){
          nowIdx ++;
        }else{
          nowIdx = 0;
        }

        bgFadeFn();

      });
      
      //이전 버튼
      $bgbtnPrev.on('click', function(evt){

        evt.preventDefault();

        oldIdx = nowIdx;

        if(nowIdx>0){
          nowIdx --;
        }else{
          nowIdx = 2;
        }

        bgFadeFn();

      });

       //멈춤 버튼
      $bgbtnStop.on('click', function(evt){

        evt.preventDefault();

        clearInterval(intervalKey);

      });

      //시작 버튼
      $bgbtnPlay.on('click', function(evt){

        evt.preventDefault();

        clearInterval(intervalKey);
        bgAutoPlay();

       });

       bgAutoPlay();



       //메인 메뉴 
       const $mainMnu = $('header > .menu > nav > .gnb > li > a');
       const arrTopVal = [];

       arrTopVal[0] = $('header').offset().top;
       arrTopVal[1] = $('section > #dokdo').offset().top-140;
       arrTopVal[2] = $('section > #story').offset().top;
       arrTopVal[3] = $('section > #truth').offset().top;
       arrTopVal[4] = $('section > #video').offset().top;
       arrTopVal[5] = $('section > #gallery').offset().top-140;
       arrTopVal[6] = $('section > #news').offset().top;

        function mainPageAni(topVal){
          $('html, body').stop().animate({scrollTop:topVal},1000);
       }

       $mainMnu.on('click', function(evt){

          evt.preventDefault();

          nowIdx =  $mainMnu.index(this);
          mainPageAni(arrTopVal[nowIdx]);  //페이지 이동
          
       });



      //독도 이야기
        const comicArrSrc =['./images/ani_dokdo_1.jpg','./images/ani_dokdo_2.jpg','./images/ani_dokdo_3.jpg','./images/ani_dokdo_4.jpg','./images/ani_dokdo_5.jpg','./images/ani_dokdo_6.jpg'];
        const comicArrAlt =['1화 어린이 독도지킴이로 독도에 가다','2화 독도에 사는 사람들','3화 독도의 자연환경','4화 독도의 이름과 역사','5화 독도를 지킨 사람들','6화 독도는 한국땅'];

        const $comicMnu = $('section > #story > div > ol > li > a > .comic');
        const $comicShadow = $('section > #story > div > .shadow');
        const $comicBox = $('section > #story > div > .shadow > .comicbox');
        const $comicBtnClse = $('section > #story > div > .shadow > .comicbox > .close');
  
        $comicMnu.on('click', function(evt){
          evt.preventDefault();
          
          $('body').css('overflow', 'hidden');

          nowIdx = $comicMnu.index(this);

          $comicBox.children('img').attr({      
            src: comicArrSrc[nowIdx],
            alt: comicArrAlt[nowIdx]
          });

          $comicShadow.show();
          $comicBox.show();
        });

        $comicBtnClse.on('click', function(){

          $('body').css("overflow", "scroll");

          $comicShadow.hide();
          $comicBox.hide();
        });

        $comicShadow.on('click', function(){

          $('body').css("overflow", "scroll");

          $comicShadow.hide();
          $comicBox.hide();
        });


        //독도의 진실
        const arrSrc = ['./images/saejong.jpg','./images/sinjeung.jpg','./images/dongkook.jpg','./images/mangi.jpg','./images/jeungbo.jpg'];
        const arrAlt = ['세종실록지리지','신증동국여지승람','동국문헌비고','만기요람','증보문헌비고'];

        const $truthMnu = $('section > #truth > div > ul > li > a');
        const $truthShadow = $('section > #truth > div >.shadow');
        const $truthBox = $('section > #truth > div >.shadow >.truthbox');
        const $btnClse = $('section > #truth > div >.shadow >.truthbox>.close');

        $truthMnu.on('click', function(evt){
          evt.preventDefault();

          $('body').css('overflow', 'hidden');

          nowIdx = $truthMnu.index(this);

          $truthBox.children('img').attr({
            src: arrSrc[nowIdx],
            alt: arrAlt[nowIdx]
          });

          $truthShadow.show();
          $truthBox.show();
        });
        
        $btnClse.on('click', function(){

          $('body').css("overflow", "scroll");

          $truthBox.hide();
          $truthShadow.hide();
        });

        $truthShadow.on('click', function(){

          $('body').css("overflow", "scroll");

          $truthBox.hide();
          $truthShadow.hide();
        });

        $truthBox.on('click', function(evt){
            evt.stopPropagation();
        });


        //독도 비디오
        const $vidPrev = $('.vid-prev');
        const $vidNext = $('.vid-next');
        const $vidContainer = $('.vid-thmbs > .vid-thmbs-cont > ul');
        
        const $vidBig = $('.vid-big > iframe');
        const $vidBigTit_1 = $('.vid-big > p');
        const $vidCont = $('.vid-thmbs > .vid-thmbs-cont > ul > li > a');

        const $vidArrSrc = ['https://www.youtube.com/embed/Dk7SLHp630k','https://www.youtube.com/embed/JBfE-qTPBFc','https://www.youtube.com/embed/-IP_l9Q6mmw','https://www.youtube.com/embed/0CLZlPTCXs4','https://www.youtube.com/embed/gGyJKKkZMBc','https://www.youtube.com/embed/l1VVUp5H_AA'];

        const $vidArrTit_1 = ['[동북아역사재단] 독도체험관 미취학 아동(유치원, 어린이집 등) 및 초등학교 저학년 온라인 교육동영상 독도보물찾기','[울산매일] UTV 독도영상(속이 뻥 뚫리는 드론 항공 촬영 영상) / [ENG] 4K Dokdo Drone Video','[K -독도] 독도수비대강치','[쯔양] 기안84님과 독도새우 84마리 먹방','[자이언츠 펭TV] 독도가 한국땅인 이유 FULL 공개합니다','[몽당오늘] 오늘은 무슨 날이에요? 10월 25일 독도의 날'];
       
        function vidMoveFn(){
          $vidContainer.stop().animate({
            left: -348*nowIdx
          },500,"easeInOutCubic",function(){});
        }

        //이전
        $vidPrev.on('click',function(evt){

          evt.preventDefault();
          
          if(nowIdx>0){
            nowIdx--;
          }else{
            nowIdx=5;
          }
          const $container = $('.vid-thmbs-cont > ul');
          const $slides = $('.vid-thmbs-cont > ul > li');
          $slides.last().prependTo($container);
          $container.css({left : -348});
          $container.stop().animate({left : 0},400,'easeInOutCubic',function(){});

        });

        //다음
        $vidNext.on('click', function(evt){

          evt.preventDefault();

          if(nowIdx<5){
            nowIdx++;
          }else{
            nowIdx=0;
          }
          const $container = $('.vid-thmbs-cont > ul');
          const $slides = $('.vid-thmbs-cont > ul > li');
  
          $container.stop().animate({ left : -348},400,function(){
  
            $slides.first().appendTo($container);
            $container.css({left : 0});
          });
        });

        //큰 영상
        $vidCont.on('click', function(evt){

          evt.preventDefault();

          nowIdx = $vidCont.index(this);
        
          $vidBig.attr({
            src: $vidArrSrc[nowIdx]
          });
          
          $vidBigTit_1.text($vidArrTit_1[nowIdx]);
          
        });

    
        //독도 갤러리
        const $gall = $('.gall > a');
        const $gallScreen = $('.gall_shadow > .gallbox > div > .screen');
        const $gallShadow = $('.gall_shadow');
        const $gallBox = $('.gallbox');

        const $gallThums = $('.gallbox > ol > li > a');
        const $gallThums_2 = $('.gallbox2 > ol > li > a');
        const $gallThums_3 = $('.gallbox3 > ol > li > a');
        const $gallThums_4 = $('.gallbox4 > ol > li > a');
        const $gallClse = $('.gall_shadow > .gallbox > .close'); 

        

          //갤러리 함수
         function gallMoveFn(){ 
          
          //활성화
          $gallThums.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

          //이동
          $gallScreen.stop().animate({left:-700*nowIdx},500,'easeInOutCubic',function(){});
        }


        //모달창
        $gall.eq(0).on('click', function(evt){

          evt.preventDefault();
          $('body').css("overflow", "hidden");

          $gallShadow.show();
          $gallBox.eq(0).show();
          
        });

        $gall.eq(1).on('click', function(evt){

          evt.preventDefault();
          $('body').css("overflow", "hidden");

          $gallShadow.show();
          $gallBox.eq(1).show();
          
        });

        $gall.eq(2).on('click', function(evt){

          evt.preventDefault();
          $('body').css("overflow", "hidden");

          $gallShadow.show();
          $gallBox.eq(2).show();
          
        });

        $gall.eq(3).on('click', function(evt){

          evt.preventDefault();
          $('body').css("overflow", "hidden");

          $gallShadow.show();
          $gallBox.eq(3).show();
          
        });


        $gallThums.on('click', function(evt){

          evt.preventDefault();

          nowIdx =  $gallThums.index(this);
    
          gallMoveFn();

        });

        $gallThums_2.on('click', function(evt){

          evt.preventDefault();

          nowIdx = $gallThums_2.index(this);

          gallMoveFn();

        });
        
        $gallThums_3.on('click', function(evt){

          evt.preventDefault();

          nowIdx = $gallThums_3.index(this);
          gallMoveFn();

        });

        $gallThums_4.on('click', function(evt){

          evt.preventDefault();

          nowIdx = $gallThums_4.index(this);
          gallMoveFn();

        });

    
        $gallBox.on('click', function(evt){

          evt.stopPropagation();
        });

        $gallShadow.on('click', function(){

          $('body').css("overflow", "scroll");

          $gallBox.hide();
          $gallShadow.hide();
        });


        //닫기 버튼
        $gallClse.on('click', function(){

          $('body').css('overflow', 'scroll');

          $gallBox.hide();
          $gallShadow.hide();
        });
       
        //독도 갤러리 끝


        //.top-box
        
        const $aside = $('.top-box>a');
        
        $(window).on('scroll', function(){
          
          let scrollTop = $(this).scrollTop();
          
          if(scrollTop>40){
              $aside.fadeIn();
          }else{
              $aside.fadeOut();
          }       
          
        });

        $aside.on('click', function(evt){

          evt.preventDefault();
  
          $('html, body').animate({ scrollTop: 0 }, 400);
        });
    });
    