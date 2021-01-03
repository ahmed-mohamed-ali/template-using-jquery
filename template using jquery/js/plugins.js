
$(document).ready(function () {
    
    //    header height  //        bxslider 
    var myheader = $('.header');



    myheader.height($(window).height());
    var slider = $('.bxslider');
    $(window).resize(function () {
        myheader.height($(window).height());
        //    make slider center
        slider.each(function () {
            $(this).css("paddingTop", ($(window).height() - $('.bxslider li').height()) / 2);
        });

    });
    //    links
    $('.links li a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');


    });
    //    make slider center
    slider.each(function () {
        $(this).css("paddingTop", ($(window).height() - $('.bxslider li').height()) / 2);
    });


    //    triger slider
    slider.bxSlider({

        pager: false

    });
    //    smoth scroll
    $('.links li a').click(function () {
        console.log($(this).data('value'));

        $('html,body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
 
        });
    //    myscroll code
        (function customeScroll() {
            $('.slider .active').each(function () {
                if (!$(this).is(':last-child')) {
                    $(this).delay(3000).fadeOut(1000,function(){
                        $(this).removeClass('active').next().addClass('active').fadeIn(1000);
                         customeScroll();
                    })
                   
                }else{
                    $(this).delay(3000).fadeOut(1000,function(){
                        $(this).removeClass('active')
                        $('.slider div').eq(0).addClass('active').fadeIn(1000);
                         customeScroll();
                    })
                }
            })
        }())
    
    // Trigger MixitUp
    
    $('#gallery').mixItUp();
    
      // Adjust Shuffle Links
    
    $('.shuffle li').click(function () {
       
        $(this).addClass('selected').siblings().removeClass('selected');
        
    });
    
     // Trigger Nice Scroll
    
    $('html').niceScroll({
        
        cursorcolor: '#1abc9c',
        
        cursorwidth: '5px',
        
        cursorborder: '1px solid #1abc9c',
        
        cursorborderradius: '5px'
        
    });
    
    
    
});
