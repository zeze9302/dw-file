$(function(){
    $(window).on('scroll',function(){
        var scroll = $(this).scrollTop();
        $('h1').text(scroll);

        // $('article').eq(0).css({'transform':'translateZ(' +(0+scroll)+ 'px)'});
        // $('article').eq(1).css({'transform':'translateZ(' +(-5000+scroll)+ 'px)'});
        // $('article').eq(2).css({'transform':'translateZ(' +(-10000+scroll)+ 'px)'});
        // $('article').eq(3).css({'transform':'translateZ(' +(-15000+scroll)+ 'px)'});
        // $('article').eq(4).css({'transform':'translateZ(' +(-20000+scroll)+ 'px)'});
        for(var i=0; i<5; i++){
            $('article').eq(i).css({'transform':'translateZ(' +(-5000*i+scroll)+ 'px)'});

            if(scroll>=i*5000 && scroll < (i+1)*5000){
                $('li').removeClass('on');
                $('li').eq(i).addClass('on');
                $('article').removeClass('on');
                $('article').eq(i).addClass('on');
            }
        }

        // if(scroll>=0 && scroll<5000){
        //     $('li').removeClass('on');
        //     $('li').eq(0).addClass('on');
        //     $('article').removeClass('on');
        //     $('article').eq(0).addClass('on');
        // }
        // if(scroll>=5000 && scroll<10000){
        //     $('li').removeClass('on');
        //     $('li').eq(1).addClass('on');
        //     $('article').removeClass('on');
        //     $('article').eq(1).addClass('on');
        // }
        // if(scroll>=10000 && scroll<15000){
        //     $('li').removeClass('on');
        //     $('li').eq(2).addClass('on');
        //     $('article').removeClass('on');
        //     $('article').eq(2).addClass('on');
        // }
        // if(scroll>=15000 && scroll<20000){
        //     $('li').removeClass('on');
        //     $('li').eq(3).addClass('on');
        //     $('article').removeClass('on');
        //     $('article').eq(3).addClass('on');
        // }
        // if(scroll>=20000 && scroll<25000){
        //     $('li').removeClass('on');
        //     $('li').eq(4).addClass('on');
        //     $('article').removeClass('on');
        //     $('article').eq(4).addClass('on');
        // }


    });

    // $('li').eq(0).on('click',function(){
    //     $('html,body').animate({'scrollTop':0});
    // });
    // $('li').eq(1).on('click',function(){
    //     $('html,body').animate({'scrollTop':5000});
    // });
    // $('li').eq(2).on('click',function(){
    //     $('html,body').animate({'scrollTop':10000});
    // });
    // $('li').eq(3).on('click',function(){
    //     $('html,body').animate({'scrollTop':15000});
    // });
    // $('li').eq(4).on('click',function(){
    //     $('html,body').animate({'scrollTop':20000});
    // });

    $('li').on('click',function(){
        var a = $(this).index();
        $('html,body').animate({'scrollTop':5000*a},1500,'swing');
    });


    $('body').on('mousemove',function(e){
        var posX = e.pageX/100;
        var posY = e.pageY/100;

        $('.b3-1').css({'right':10-posX , 'top':150-posY});
        $('.b3-2').css({'left':500+posX , 'bottom':-30+posY});
    });

    
});