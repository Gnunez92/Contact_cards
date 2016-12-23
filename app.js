$(document).ready(function(){
    var empty_form = $('form').serialize();
    $('form').submit(function(){
            if($('form').serialize() !== empty_form){
            $('#contacts').append('<div class="cards"><h1>'
            + $('input[name=firstname]').val()+ " "
            + $('input[name=lastname]').val()
            + "</h1><p>Click for description!</p></div>");
            $('#contacts').data($('input[name=firstname]').val()+ " "
            + $('input[name=lastname]').val(), $('textarea').val());
            return false;
        }
    });
    $(document).on('click', '.cards', function(){
        var desc = $('#contacts').data($(this).children('h1').text());
        $(this).empty().append('<p>'+desc +'</p>').css('text-align','left').css('padding','0 10px');
    });
})
