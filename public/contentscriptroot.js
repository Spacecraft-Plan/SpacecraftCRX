// export {default as ContentScripts} from './ContentScripts';
($('<div id="js-calendar-cube"></div>')).insertBefore($('.js-calendar-graph'));
// document.write("<script type='text/javascript' src='./static/js/contentscripts.*.js'></script>");
//这是直接插入html
    //     document.getElementById('.js-calendar-graph').innerHTML = '<div class="ic-contributions-wrapper"></div>';
// //如果想追加，可以这样
// //先保存div中原来的html
// var html = document.getElementById("div_id").innerHTML;
// //再跟你想追加的代码加到一起插入div中
// document.getElementById("div_id").innerHTML = html + "你想往div里追加的html代码";