$(function () {
    //trriger를 클릭하면 메뉴가 나오게 설정
    var trriger = $('#trriger');
    var menu = $('nav');
    trriger.on('click', function () {
        menu.toggleClass('on');
        $('nav ul').toggleClass('on');
        $('.hamburger').toggleClass('active');
    });

    // 메뉴 클릭하면 해당 페이지로 이동

    //contents2 컨텐츠 main
    var offset = $('#contents2').offset().top;
    $('#contents1 h2').text(offset);

    var check = 0;
	
    $(window).on('scroll', function () {
        var ab = $(window).scrollTop();
        $('#contents1 h1').text(ab);

        if (ab >= 10 && ab < 1200) {
            $('#contents2').removeClass();
            $('#contents2').addClass('on');
            var imgs = '';
            for (var i = 1; i < 81; i++) {
                imgs += "<img src='po/a" + i + ".jpg'>";
            }
            $('section').html(imgs);
            var value = Math.floor((ab - 200) / 12.5);
            $('section img').hide();
            $('section img').eq(value).show();
        } else if (ab >= 1201) {
            $('#contents2').removeClass();
            $('#contents2').addClass('on2');
        } else {
            $('#contents2').removeClass();
        }

        // About skill 설정
        // var no = 0;
        if (ab >= 2000 && ab <= 3000) {
            if (check == 0) {
                $({ val: 0 }).animate(
                    { val: 80 },
                    {
                        duration: 1000,
                        easing: 'swing',
                        step: function () {
                            $('.nom1').text(Math.ceil(this.val));
                        },
                    }
                );
				$({ val: 0 }).animate(
                    { val: 75 },
                    {
                        duration: 1000,
                        easing: 'swing',
                        step: function () {
                            $('.nom2').text(Math.ceil(this.val));
                        },
                    }
                );
                check = 1;
            }

            $('.html div').addClass('on');
            $('.css div').addClass('on');
            $('.jq div').addClass('on');
            $('.ps div').addClass('on');
            $('.lu div').addClass('on');
            $('.ex div').addClass('on');
			
        } else if ((ab > 0 && ab < 1999) || ab > 3001) {
            
            //id = setInterval(count, 10);
            if (check == 1) {
                $({ val: 80 }).animate(
                    { val: 0 },
                    {
                        duration: 1000,
                        easing: 'swing',
                        step: function () {
                            $('.nom1').text(Math.floor(this.val));
                        },
                    }
                );
				$({ val: 75 }).animate(
                    { val: 0 },
                    {
                        duration: 1000,
                        easing: 'swing',
                        step: function () {
                            $('.nom2').text(Math.floor(this.val));
                        },
                    }
                );
                check = 0;
            }
			
			$('.html div').removeClass('on');
            $('.css div').removeClass('on');
            $('.jq div').removeClass('on');
            $('.ps div').removeClass('on');
            $('.lu div').removeClass('on');
            $('.ex div').removeClass('on');
        }
		
    });

    // 반응형 박스 제이쿼리 추가
    $(function () {
        $('#manonry_container').masonry({
            liemselector: '.item',
            //아이템의 선택자
            columnWidth: 110,
            // 한칸당 최소 기준사이즈
            isAnimated: true,
            //뭔가 바뀔때 애니메이션을 넣을것인
        });
        $('.image').colorbox();
    });

    //GRAPHIC 클릭시 color box 등장

    $(function () {
        $('.image').colorbox();
    });

    //GRAPHIC박스 마우스 오버시  효과발생
    (function () {
        var colour = $('#overlay');
        var content = $('#hover');

        content.hide();
        colour.hide();

        $('#container').hover(
            function () {
                content.stop().show().css({ left: '-450px' }).animate({ left: 0 }, 300);
                colour.stop().fadeTo(500, 0.7);
            },
            function () {
                content.stop().animate({ left: 450 }, 300);
                colour.stop().fadeTo(500, 0);
            }
        );
    });

    $('.regular').slick({
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
    });
});