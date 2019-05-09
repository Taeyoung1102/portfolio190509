 const refresh = $('.refresh > div a span');
 const vitamin = $('.vitamin > div span');
 const fitness = $('.fitness > div span');
 const kids = $('.kids > div span');
 const greek = $('.greek  > div span');
 const local = $('.local > div span');

 $('#smoothie .s_grid > div').hover(function(){
     let index = $(this).index();
     if(index === 0){
        refresh.html('과일듬뿍 영양 가득한 기분전환 스무디');
        refresh.css('font-family','Noto Sans KR, sans-serif');
        refresh.css('font-size','1.4rem'); 
       $(this).css('line-height','1.4rem');

    } else if( index === 1){
        vitamin.html('활력에너지와 비타민C 충전 스무디');
        vitamin.css('font-family','Noto Sans KR, sans-serif');
        vitamin.css('transition','0.4s ease');
        vitamin.css('font-size','1.4rem');
    } else if( index === 2){
        fitness.html("운동 전 후 단백질 보충 스무디와 <br> 다이어터를 위한 슬림 스무디");
        fitness.css('font-family','Noto Sans KR, sans-serif');
        fitness.css('transition','0.4s ease');
        fitness.css('font-size','1.4rem');
    } else if( index === 3){
        kids.html('아이들에게 꼭 필요한 <br>유산균과 비타민을 듬뿍 넣은 스무디');
        kids.css('font-family','Noto Sans KR, sans-serif');
        kids.css('transition','0.4s ease'); 
        kids.css('font-size','1.4rem');
    } else if( index === 4){
        greek.html('장시간 자연 발표시킨 그리스식 <br> 저지방 요거트 스무디 ');
        greek.css('font-family','Noto Sans KR, sans-serif');
        greek.css('transition','0.4s ease');
        greek.css('font-size','1.4rem');
    } else if( index === 5){
        local.html('우리 땅에서 자란 몸에 좋은 열매와 <br>채소를 가장 맛있게 먹을 수 있는 스무디 ');
        local.css('font-family','Noto Sans KR, sans-serif');
        local.css('transition','0.4s ease');
        local.css('font-size','1.4rem'); 
    } }, function(){
        var index = $(this).index();
        if(index == 0){
            refresh.html('REFRESH');
            refresh.css('font-family','Fredoka One, cursive');
            refresh.css('font-size','2rem'); 
        } else if( index === 1){
            vitamin.html('VITAMIN UP');
            vitamin.css('font-family','Fredoka One, cursive');
            vitamin.css('transition','0.4s ease');
            vitamin.css('font-size','2rem');
        } else if( index === 2){
            fitness.html("fitness <br>&<br> slim");
            fitness.css('font-family','Fredoka One, cursive');
            fitness.css('transition','0.4s ease');
            fitness.css('font-size','2rem');
        } else if( index === 3){
            kids.html('kids');
            kids.css('font-family','Fredoka One, cursive');
            kids.css('transition','0.4s ease'); 
            kids.css('font-size','2rem');
        } else if( index === 4){
            greek.html('greek <br> yorgurt ');
            greek.css('font-family','Fredoka One, cursive');
            greek.css('transition','0.4s ease');
            greek.css('font-size','2rem');
        } else if( index === 5){
            local.html('local <br> & <br> veggie');
            local.css('font-family','Fredoka One, cursive');
            local.css('transition','0.4s ease');
            local.css('font-size','2rem'); 
        }
    })

