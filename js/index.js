$(function() {
    $('.nav_box').hover(
        function() {
            $(this).find('b').show();
            $(this).find('.inbox').show();
        },
        function() {
            $(this).find('b').hide();
            $(this).find('.inbox').hide();
        }
    );
    $('.nav_box').each(function(index, element) {
        $(this).find('span').eq(1).css({ color: '#fff' });
    }).last().css({ 'border-right': 'none' });
});