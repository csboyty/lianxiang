var common=(function(){
    return {
        checkMobile:function(){
            var userAgentList = new Array("2.0 MMP", "240320", "AvantGo","BlackBerry", "Blazer",
                "Cellphone", "Danger", "DoCoMo", "Elaine/3.0", "EudoraWeb", "hiptop", "IEMobile", "KYOCERA/WX310K", "LG/U990",
                "MIDP-2.0", "MMEF20", "MOT-V", "NetFront", "Newt", "Nintendo Wii", "Nitro", "Nokia",
                "Opera Mini", "Opera Mobi",
                "Palm", "Playstation Portable", "portalmmm", "Proxinet", "ProxiNet",
                "SHARP-TQ-GX10", "Small", "SonyEricsson", "Symbian OS", "SymbianOS", "TS21i-10", "UP.Browser", "UP.Link",
                "Windows CE", "WinWAP", "Android", "iPhone", "iPod", "iPad", "Windows Phone", "HTC"/*, "GTB"*/);
            var appNameList = new Array("Microsoft Pocket Internet Explorer");

            var userAgent = navigator.userAgent.toString();
            var appName = navigator.appName.toString();
            var agentLength=userAgentList.length,appLength=appNameList.length;
            var i= 0,j=0;

            for (; i<agentLength; i++) {
                if (userAgent.indexOf(userAgentList[i]) >= 0) {
                    return true;
                }
            }

            for (; j<appLength; j++) {
                if (appName.indexOf(appNameList[j]) >= 0) {
                    return true;
                }
            }

            return false;
        }
    }
})();

$(document).ready(function(){
    $("#menuCtrl").click(function(){
        if($("#menuContainer").height()==0){
            $("#menuContainer").height(200);
        }else{
            $("#menuContainer").height(0);
        }

    });

    $(".menu a[data-page-name='"+pageName+"']").addClass("active");

    if(common.checkMobile()){
        $(".computerVideo").removeAttr("autoplay loop").attr("controls","controls");

        if(navigator.userAgent.indexOf('UCBrowser') > -1||navigator.userAgent.indexOf('QQBrowser')>-1) {
            $("video").removeClass("computerVideo").addClass("phoneVideo");
        }
        $(".hasAnimated.oHidden").removeClass("hasAnimated oHidden");

    }
});
window.onload=function(){
    var sEl=null;
    var sOffsetTop=0;
    var sHeight=0;
    var scrollTop=0;

    $(window).scroll(function(){
        scrollTop= $(window).scrollTop();
        $(".hasAnimated.oHidden").each(function(){
            sEl=$(this).parent(".section").length==0?$(this).parents(".section"):$(this).parent(".section");

            sOffsetTop=sEl.offset().top;
            sHeight=sEl.height();
            //console.log(sEl);
            //console.log(sOffsetTop);
            if(sOffsetTop<=scrollTop+sHeight/2){
                $(this).addClass($(this).data("action"));
                $(this).removeClass("oHidden hasAnimated");
            }
        });
    });
    $(window).trigger("scroll");
};
