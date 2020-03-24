$(function(){

      var tab = $( "#tabs" ).tabs({
        beforeLoad: function( event, ui ) {
          ui.jqXHR.fail(function() {
            ui.panel.html(
              "Couldn't load this tab. We'll try to fix this as soon as possible. " +
              "If this wouldn't be a demo." );
          });
        }
      });

    var mdiLi = "<li class='#{tabid}'><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>";
    function addTab(mId, mName) {
      var $mdiLi = $( mdiLi.replace( /#\{href\}/g, mId+".html" ).replace( /#\{label\}/g, mName ).replace(/#\{tabid\}/g, "tab_"+mId) );
      tab.find( ".ui-tabs-nav" ).append( $mdiLi);
      //tabs.append( "<div id='" + id + "'><p>" + tabContentHtml + "</p></div>" );
      tab.tabs( "refresh" );
      tab.tabs( "option", "active", $(".tab_"+mId).index());
    }

    function tabShow(mId) {
      tab.tabs( "option", "active", $(".tab_"+mId).index());
    }

    tab.on( "click", "span.ui-icon-close", function() {
      var panelId = $( this ).closest( "li" ).remove().attr( "aria-controls" );
      $( "#" + panelId ).remove();
      tab.tabs( "refresh" );
    });

    $(".nav_list a").on("click", function(){
        var mId = $(this).attr("href").replace("#", "");
        var mName = $(this).text();
        //addTab(mId);
        $(".ui-tabs-nav .tab_"+mId).length ? tabShow(mId) : addTab(mId, mName);
        outNav();
    });

    /* 메뉴 */
    $(".btn_nav").on("click", function(){
      $("nav.nav").toggleClass("on");
      $(".wrap").toggleClass("open_nav");
    });

    $(".nav_list").hover(function(){
      setTimeout(function(){
         $("nav.nav").addClass("on");
         $(".wrap").addClass("open_nav");
      }, 300);
    }, function(){
      setTimeout(outNav,500);
    });

    function outNav() {
      $("nav.nav").removeClass("on");
      $(".wrap").removeClass("open_nav");
    }

    // 테마
    $(".hd_thema").on("click", function(e){
      $(this).toggleClass("on");
      $("body").toggleClass("dark");
      e.preventDefault();
    });

});
