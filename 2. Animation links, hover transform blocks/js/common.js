$(document).ready(function() {
  
  // links
  var anchors = $('.anchor-tooltip');
    var tooltopText = $(anchors).attr('title'),
        tooltip = $('<span>').addClass('title-tooltip').text(tooltopText);
        $(anchors).append(tooltip);

  // Options

  $('.option').hover(
    function(){
      $('.option').removeClass('highlighted');
      $(this).addClass('highlighted');
    },
    function(){
      $(this).removeClass('highlighted');
      setTimeout(function(){
        if (!$('.option.highlighted').length) {
          $('.option.featured').addClass('highlighted');
        }
      }, 500);
    }
  );
});


