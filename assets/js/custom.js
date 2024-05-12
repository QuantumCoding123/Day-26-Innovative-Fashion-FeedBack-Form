$(document).ready(function() {
    $('.starRating i').click(function() {
      $(this).addClass('active');
      $(this).prevAll('i').addClass('active');
      $(this).nextAll('i').removeClass('active');
    });
  
    $('.starRating i').hover(function() {
        $(this).addClass('activehover');
      $(this).prevAll('i').addClass('activehover');
    }, function() {
        $(this).removeClass('activehover');
      $(this).prevAll('i').removeClass('activehover');
    });
    $('#sub').on('click', function()
    {
        window.location = 'thankyou.html';
    })
  });