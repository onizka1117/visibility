

$(function(){
  // datepicker
  $( ".ip_date input" ).datepicker({
    showOn: "button",
    buttonImage: "../../images/ip_date.png",
    buttonImageOnly: true,
    buttonText: "Select date",
    dateFormat: "yy-mm-dd",
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
    valCheck($ip.val());
    $ip.on("change keyup paste", function(e){
      var val = $(this).val();
      valCheck(val);
    });
    $el.find(".btn_txt_del").on("click", function(e){
      $ip.val("");
      $el.removeClass("focus");
      e.preventDefault();
    });
    function valCheck(val){
      val == "" ? $el.removeClass("focus") : $el.addClass("focus");
    }
  };

})(jQuery);


var uiCommon = {
  // 스크롤 스타일 적용
  bodyScroll : function(opt) {
    var options = {
      axis:"xy",
      callbacks:{
       onScroll:function(){
         var left = this.mcs.left;
         var top = this.mcs.top;
         $("body").attr("scr_left", left);
         $("body").attr("scr_top", top);
       },
       whileScrolling: function(e){
         this.mcs.left<0 ? $(top.document).find("nav").addClass("shadow") : $(top.document).find("nav").removeClass("shadow");
         this.mcs.top<0 ? $(top.document).find("header").css("margin-top", this.mcs.top) : $(top.document).find("header").css("margin-top", 0);

         //console.log("ing.." + this.mcs.left);
       }
     }
   };
   $.extend(options, opt);
   $("body.scrollBody").mCustomScrollbar(options);
 }

};
