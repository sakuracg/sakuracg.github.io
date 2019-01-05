$(document).ready(function () {
        var sideTop = $("#content").offset().top + $(".content-wrap").height() - $("#sidebar").height();
        
        $(document).scroll(function () {
            var top = $(document).scrollTop();
            
            if (top>=445){
                $(".sidebar-inner").addClass("siderfixTop");
                if(top>=sideTop){
                    $(".sidebar-inner").removeClass("siderfixTop");
                    $(".sidebar-inner").addClass("affix-bottom");
                    $(".sidebar-inner").get(0).style.top = sideTop + "px";
                }else{

                    $(".sidebar-inner").addClass("siderfixTop");
                    $(".sidebar-inner").removeClass("affix-bottom");
                    $(".sidebar-inner").get(0).style.top = "";
                }
            }else {
                $(".sidebar-inner").removeClass("siderfixTop");
            }

            
        });
        
        
        var since = document.getElementById("since");
        setInterval(function(){
        	var dateTime = new Date();
        	var showdisplay = ((dateTime.getFullYear()-2017)*365 + (dateTime.getMonth()+1-10)*30 + (dateTime.getDate()-12)) + "天" + dateTime.getHours() + "时" + dateTime.getMinutes() + "分" + dateTime.getSeconds() + "秒";
        	since.innerHTML = showdisplay;
        });

        var scrollFunc = function (e) {
        var direct = 0;
        e = e || window.event;
        if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件             
            if (e.wheelDelta > 0) { //当滑轮向上滚动时
                $("nav:first").removeClass("navAnimUp");
                $("nav:first").addClass("navAnimDo");
            }
            if (e.wheelDelta < 0 && $(document).scrollTop() >= 40) { //当滑轮向下滚动时
                $("nav:first").removeClass("navAnimDo");
                $("nav:first").addClass("navAnimUp");
            }
        } else if (e.detail) {  //Firefox滑轮事件
            if (e.detail> 0) { //当滑轮向上滚动时
                $("nav:first").removeClass("navAnimUp");
                $("nav:first").addClass("navAnimDo");
            }
            if (e.detail< 0 && $(document).scrollTop() >= 40) { //当滑轮向下滚动时
                $("nav:first").removeClass("navAnimDo");
                $("nav:first").addClass("navAnimUp");
            }
        }

    }
    //给页面绑定滑轮滚动事件
    if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }
    //滚动滑轮触发scrollFunc方法
    window.onmousewheel = document.onmousewheel = scrollFunc;  


    //sidebar设置
    $("#sidebar").get(0).style.margin = '0';
    $(".site-overview").get(0).style.width = "271px";

});