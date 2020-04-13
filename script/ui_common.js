

$(function(){
  // datepicker
  $( ".ip_date input" ).datepicker({
    showOn: "button",
    buttonImage: "../../images/ip_date.png",
    buttonImageOnly: true,
    buttonText: "Select date",
    dateFormat: "yy/mm/dd",
    onSelect : function(){

      if($(this).siblings("i").length>0) {
        $(this).siblings("i").addClass("on");
      }

    }
  });



});


(function($){
  // 파일명 셋팅
  $.fn.fileReady = function() {
    $el = $(this);
    $el.find("input[type=file]").on("change", function(e){
      var val = $(this).val();
      $(this).parent().prev().val(val);
    });
  };

  // 텍스트삭제
  $.fn.inputTextFocus = function() {
    var $el = $(this);
    var $ip = $el.find(".ip_txt");
    $ip.on("change keyup paste", function(e){
      var val = $(this).val();
      val == "" ? $el.removeClass("focus") : $el.addClass("focus");
    });
    $el.find(".btn_txt_del").on("click", function(e){
      $ip.val("");
      $el.removeClass("focus");
      e.preventDefault();
    });
  };

})(jQuery);
