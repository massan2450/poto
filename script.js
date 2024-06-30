
$(function() {
   // btn totop
    $('.btn a').hide();
    $(window).scroll(function() {
        if($(this).scrollTop() > 200) {
            $('.btn a').fadeIn();
        } else {
            $('.btn a').fadeOut();
        }
    });
    // img fade
    $(".js-fade").on("inview", function () {
        $(this).addClass("inview");
    });

  
   // アコーディオン
    $('.sec10 dt').click(function() {
        $(this).next().slideToggle();
        $(this).toggleClass('active');
    })
    
    $('.sec16 dt').click(function() {
        $(this).next().slideToggle();
        $(this).toggleClass('active');
    })
});
