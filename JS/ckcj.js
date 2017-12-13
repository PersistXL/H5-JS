// JavaScript Document
$(function () {
    $(".show").on("click",function(){
//                alert(11111111)
        var xz,tk,pd,zcj,str="";
        xz=Number(window.sessionStorage.getItem("xzcj"));
        tk=Number(window.sessionStorage.getItem("tkcj"));
        pd=Number(window.sessionStorage.getItem("pdcj"));

        zcj=xz+tk+pd;
        str+="选择题成绩"+xz+"<br />"
        str+="填空题成绩"+tk+"<br />"
        str+="判断题成绩"+pd+"<br />"
        str+="总成绩成绩"+zcj+"<br />"
        $("#xscj").html(str);

    });

    $("#clear_cj").on("click",function(){
        window.sessionStorage.clear();
        location.reload()
    });
})