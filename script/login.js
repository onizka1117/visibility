$(function(){

  // 메인 타입
  var mainClass = ["normal", "normal bright", "type1", "type1 bright"];
  var randomNumber = Math.floor(Math.random()*4);
  $(".login_wrap").addClass(mainClass[randomNumber]);

  openTab();
  inputIcon();
  popupOpenClose();

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

// popup
function popupOpenClose(){
    $('.btn_login_search').on('click', function(){
        $('.login_popup').addClass('open');
        // login_popup();
    });
    $('.btn_close').on('click', function(){
    	$('.login_popup').removeClass('open');
    });
    $('.login_popup').mouseup(function(e){
        if($(this).has(e.target).length === 0){
            $('.login_popup').removeClass('open');
        }
    });
}

// setInterval('login_popup', 0);
// function login_popup() {
//     var pop = $('.cont_popup');
//     var popHeight = pop.innerHeight();
//     var docHeight = $(window).height();
//
//     pop.css({
//         height: popHeight,
//         marginTop: - (popHeight / 2)
//     });
//
// }
