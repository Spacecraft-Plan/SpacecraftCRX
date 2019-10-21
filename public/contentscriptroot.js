const cubeLocation = $('.js-calendar-graph');
const toggleLocation = ($('.js-yearly-contributions')).find('h2');
($('<div id="js-calendar-cube"/>')).insertBefore(cubeLocation);

($('<div id="js-toggle"/>  ')).insertBefore(toggleLocation);
//  htmlToggle = "<div id=\"js-toggle\"> <span class=\"ic-toggle\">\n  <a href=\"#\" class=\"ic-toggle-option tooltipped tooltipped-nw squares\" data-ic-option=\"squares\" aria-label=\"Normal chart view\"></a>\n  <a href=\"#\" class=\"ic-toggle-option tooltipped tooltipped-nw cubes\" data-ic-option=\"cubes\" aria-label=\"Isometric chart view\"></a>\n</span> </div>";
// ($(htmlToggle)).insertBefore(toggleLocation);
// ($('<span class="ic-toggle">\n'
// +'<a href="#"'
// +'class="ic-toggle-option tooltipped tooltipped-nw squares"'
// +' data-ic-option="squares" '
// +'aria-label="Normal chart view"/>\n'
// +'<a href="#" '
// +'class="ic-toggle-option tooltipped tooltipped-nw cubes" '
// +'data-ic-option="cubes" '
// +'aria-label="Isometric chart view"/>\n'
// +'</span>')).insertBefore(toggleLocation);




// document.write("<script type='text/javascript' src='./static/js/contentscripts.*.js'></script>");
//这是直接插入html
    //     document.getElementById('.js-calendar-graph').innerHTML = '<div class="ic-contributions-wrapper"></div>';
// //如果想追加，可以这样
// //先保存div中原来的html
// var html = document.getElementById("div_id").innerHTML;
// //再跟你想追加的代码加到一起插入div中
// document.getElementById("div_id").innerHTML = html + "你想往div里追加的html代码";