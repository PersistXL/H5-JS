// JavaScript Document
$(document).ready(function(e) {
    $("tijiao").on("click",function(){
		var tk=0;
		if($("#tk01").val()=="Cascading Style Sheets")tk+=3;
		if($("#tk021").val()=="<javascript> ")tk+=3;
		if($("#tk022").val()=="Javascript")tk+=3;
		if($("#tk031").val()=="启动")tk+=3;
		if($("#tk032").val()=="关闭")tk+=3;
		if($("#tk04").val()=="删除")tk+=3;
		if($("#tk051").val()=="超链接")tk+=3;
		if($("#tk052").val()=="文本标记语言")tk+=3;
        if($("#tk061").val()=="float")tk+=3;
        if($("#tk062").val()=="double")tk+=3;
        if($("#tk07").val()=="pageContext,request,session,application")tk+=3;
        if($("#tk08").val()=="doFilter")tk+=3;
        if($("#tk09").val()==".class文件")tk+=3;
        if($("#tk101").val()=="HttpSession")tk+=3;
        if($("#tk102").val()=="getSession")tk+=3;
		window.sessionStorage.setItem("tkcj",tk);
		window.alert("填空题得分："+tk);
		});
});