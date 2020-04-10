

$(function(){
  // datepicker
  $( ".ip_date input" ).datepicker({
    showOn: "button",
    buttonImage: "../../images/ip_date.png",
    buttonImageOnly: true,
    buttonText: "Select date",
    dateFormat: "yy/mm/dd"
  });



});


(function($){
  // 파일명 셋팅
  $.fn.fileReady = function() {
    $el = $(this);
    $(this).find("input[type=file]").on("change", function(e){
      var val = $(this).val();
      $(this).parent().prev().val(val);
    });
  };

})(jQuery);
