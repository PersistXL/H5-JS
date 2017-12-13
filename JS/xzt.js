// JavaScript Document
$(document).ready(function(e) {
    $("#tijiao").on("click",function(){
		var xz=0;
		if($("input[name='xz01']:checked").val()=="C")xz+=4.5;
		if($("input[name='xz02']:checked").val()=="B")xz+=4.5;
		if($("input[name='xz03']:checked").val()=="C")xz+=4.5;
		if($("input[name='xz04']:checked").val()=="C")xz+=4.5;
		if($("input[name='xz05']:checked").val()=="B")xz+=4.5;
        if($("input[name='xz06']:checked").val()=="B")xz+=4.5;
        if($("input[name='xz07']:checked").val()=="C")xz+=4.5;
        if($("input[name='xz08']:checked").val()=="C")xz+=4.5;
        if($("input[name='xz09']:checked").val()=="C")xz+=4.5;
        if($("input[name='xz010']:checked").val()=="B")xz+=4.5;
		window.sessionStorage.setItem("xzcj",xz);
		window.alert("选择题成绩:"+xz);
		});
		
});