
window.onload = function(){

    if(window.innerWidth > 901){
        $(".tap_content").css({display:"none"});
        $(".tap_menu .tap_index li").removeClass("on");
        $(".tap_content").eq(0).css({display:"flex"});
        $(".tap_menu .tap_index li").eq(0).addClass("on");
        
        $(".tap_menu .tap_index li").click(function(){
        $(".tap_menu .tap_index li").removeClass("on");
        $(this).addClass("on"); 
        const k=$(this).index();
        $(".tap_content").css({display:"none"});
        $(".tap_content").eq(k).css({display:"flex"});
        });
        
    }

    if(window.innerWidth <= 900){
        $(".tap_content").css({display:"none"});
        $(".tap_menu .tap_index li").removeClass("on");

        $(".tap_content").eq(0).css({display:"block"});
        $(".tap_menu .tap_index li").eq(0).addClass("on");

        $(".tap_menu .tap_index li").click(function(){
        $(".tap_menu .tap_index li").removeClass("on");
        $(this).addClass("on"); 
        const k=$(this).index();
        $(".tap_content").css({display:"none"});
        $(".tap_content").eq(k).css({display:"block"});
        });

    }
  
}

window.onresize = function(){

    if(window.innerWidth > 901){
        $(".tap_content").css({display:"none"});
        $(".tap_menu .tap_index li").removeClass("on");
        $(".tap_content").eq(0).css({display:"flex"});
        $(".tap_menu .tap_index li").eq(0).addClass("on");
        
        $(".tap_menu .tap_index li").click(function(){
        $(".tap_menu .tap_index li").removeClass("on");
        $(this).addClass("on"); 
        const k=$(this).index();
        $(".tap_content").css({display:"none"});
        $(".tap_content").eq(k).css({display:"flex"});
        });
        
    }

    if(window.innerWidth <= 900){
        $(".tap_content").css({display:"none"});
        $(".tap_menu .tap_index li").removeClass("on");

        $(".tap_content").eq(0).css({display:"block"});
        $(".tap_menu .tap_index li").eq(0).addClass("on");

        $(".tap_menu .tap_index li").click(function(){
        $(".tap_menu .tap_index li").removeClass("on");
        $(this).addClass("on"); 
        const k=$(this).index();
        $(".tap_content").css({display:"none"});
        $(".tap_content").eq(k).css({display:"block"});
        });

    }
  
}
