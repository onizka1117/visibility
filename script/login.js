$(function(){

  // 메인 타입
  var mainClass = ["normal", "normal bright", "type1", "type1 bright"];
  var randomNumber = Math.floor(Math.random()*4);
  $(".login_wrap").addClass(mainClass[randomNumber]);

  openTab();
  inputIcon();
});

// tab
function openTab() {
    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $(this).index() == 1 ? $(this).parent().parent().addClass("on") : $(this).parent().parent().removeClass("on");

        $('ul.tabs li').removeClass('current');
        $('ul.tabs li a').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $(this).children('a').addClass('current');
        $("#"+tab_id).addClass('current');
    });
}
// input onOff
function inputIcon() {
    $(".icon_login .form_login").focus(function(){
        $(this).next().addClass('on');
    }).blur(function() {
        $(this).next().removeClass('on');
    });
}
