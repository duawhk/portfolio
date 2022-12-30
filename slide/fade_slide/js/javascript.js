$(function(){

  const $slides = $('.slides > .slides-container > li');
  const $indicators = $('.indicator > ol > li > a');
  const $btnPrev = $('.prev');
  const $btnNext = $('.next');

  let nowIdx = 0;
  let oldIdx = nowIdx;
  
  function fadeFn(){

    //활성화
    $indicators.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

    //이동
    $slides.eq(oldIdx).stop().fadeOut(1000);
    $slides.eq(nowIdx).stop().fadeIn(1000);
  
  }


  $indicators.on('click', function(evt){

    evt.preventDefault();

    oldIdx = nowIdx;
    nowIdx =  $indicators.index(this);

    fadeFn();

  });

  setInterval(function(){
    oldIdx = nowIdx;

    if(nowIdx<4){
      nowIdx ++;
    }else{
      nowIdx = 0;
    }

    fadeFn();

  },2000);


  //이전 버튼
  $btnPrev.on('click', function(){

    oldIdx = nowIdx;

    if(nowIdx>0){
      nowIdx --;
    }else{
      nowIdx = 4;
    }

    fadeFn();
  });

  
  //다음 버튼
  $btnNext.on('click', function(){

    oldIdx = nowIdx;

    if(nowIdx<4){
      nowIdx ++;
    }else{
      nowIdx = 0;
    }

    fadeFn();
  });

});