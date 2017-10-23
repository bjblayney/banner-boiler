$(function(){

    var current = '300x250';
    var lang = 'en';
    var newLang = 'en';

    $('.nav-btn').on('click', function(){
        $('.nav-btn').removeClass('list-group-item-info');
        $(this).addClass('list-group-item-info');
        //get the goods
        var theGoods = $(this).attr('id');
        var theParts = theGoods.split('x');

        $('.size').html(theGoods);

        $("iframe").each(function() {
            var src= $(this).attr('src').replace(current, theGoods).replace(lang, newLang);
            //console.log(src);
            $(this).attr('src',src);
            $(this).attr('width',theParts[0]);
            $(this).attr('height',theParts[1]);
        });
        //scroll top for clarity
        $("html, body").animate({ scrollTop: 0 }, "slow");
        //change the current
        current = theGoods
    });

    $('.btn-toggle').click(function() {
        $(this).find('.btn').toggleClass('active');

        if ($(this).find('.btn-info').size()>0) {
            $(this).find('.btn').toggleClass('btn-info');
        }

        $(this).find('.btn').toggleClass('btn-default');

        newLang = $(this).find('.btn.active').html();

        $('#'+ lang).fadeOut(function(){
            $('#'+ newLang).fadeIn();
        });

        $('#'+ newLang +' .nav-btn#300x250').trigger('click').toggleClass('list-group-item-info');

        $('#theMain span.type').html(newLang);
        $('#'+ newLang + ' #300x250').addClass('list-group-item-info');

        $("iframe").each(function() {
            var src= $(this).attr('src').replace(current, '300x250').replace(lang, newLang);
            $(this).attr('src',src);
            $(this).attr('width','300');
            $(this).attr('height','250');
        });
        //scroll top for clarity
        $("html, body").animate({ scrollTop: 0 }, "slow");
        //change the current
        current = '300x250';
        lang = newLang;
    });
});