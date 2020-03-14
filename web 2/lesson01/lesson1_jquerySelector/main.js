$(function(){
    $('#wrapper').css(
        {
        backgroundColor: '#ebebeb',
        fontSize: '30px',

        }
    )
    $('h1').css('color','red');
    $("p").css(
        {
            color: 'blue',
            display: 'block',
            width: '1000px',
        }
    )
    $("#wrapper-item").css(
        {
            display: 'flex',
            height: '300px',
        }
    )
    $("#wrapper-item ul").css(
        {
            flex: '1 1 0%',
        }
    )
    $("#list-items-1 li:first-child").css(
        {
            color: 'red',
        }
    )
    $("#list-items-2 li:last-child").css(
        {
            color: 'blue',
        }
    )

})