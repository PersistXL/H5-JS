// JavaScript Document
$(document).ready(function(e) {
    $("#tijiao").on("click",function(){
		var pd=0;
		if($("input[name='pd01']:checked").val()=="B")pd+=3;
		if($("input[name='pd02']:checked").val()=="A")pd+=3;
		if($("input[name='pd03']:checked").val()=="B")pd+=3;
		if($("input[name='pd04']:checked").val()=="A")pd+=3;
		if($("input[name='pd05']:checked").val()=="A")pd+=3;
		if($("input[name='pd06']:checked").val()=="B")pd+=3;
		if($("input[name='pd07']:checked").val()=="B")pd+=3;
		if($("input[name='pd08']:checked").val()=="B")pd+=3;
		if($("input[name='pd09']:checked").val()=="B")pd+=3;
		if($("input[name='pd10']:checked").val()=="B")pd+=3;
		window.sessionStorage.setItem("pdcj",pd);
		window.alert("判断题成绩:"+pd);
		});
		
});