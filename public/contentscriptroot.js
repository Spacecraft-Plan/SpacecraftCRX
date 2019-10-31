var cubeLocation = $('.js-calendar-graph');
// var cubeLocation = $('.clearfix')
// if(!cubeLocation){
// }
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

// var port = chrome.runtime.connect();
// port.postMessage("hello cjf");
var datas = [];
var column = [];
var GH_OFFSET = parseInt(((($('.js-calendar-graph-svg g > g'))[1].getAttribute('transform')).match(/(\d+)/))[0] - 1);
console.log("GH_OFFSET:" + GH_OFFSET);
($('.js-calendar-graph-svg g > g')).each(function (g) {
    var x = parseInt(((($(this)).attr('transform')).match(/(\d+)/))[0] / (GH_OFFSET + 1));
    (($(this)).find('rect')).each(function (r) {
        var color, cube, cubeHeight, dimension, fill, y;
        r = ($(this)).get(0);
        y = parseInt((($(this)).attr('y')) / GH_OFFSET);
        // fill = ($(this)).attr('fill');
        // contribCount = parseInt(($(this)).data('count'));
        // cubeHeight = 3;
        // if (maxCount > 0) {
        //   cubeHeight += parseInt(MAX_HEIGHT / maxCount * contribCount);
        // }
        // dimension = new obelisk.CubeDimension(SIZE, SIZE, cubeHeight);
        // color = self.getSquareColor(fill);
        // cube = new obelisk.Cube(dimension, color, false);
        // return pixelView.renderObject(cube, p3d);
        // var data = Object.create(Model);
        // data.x = x ;
        // data.y = y;
        // datas[i]
    });
})
// datas.forEach(element => {
// console.info("data:" + data.x + "/" + data.y);
// });
// var points = [
// [0, 0, 12, '#ebedf0'], [10, 0, 3, '#ebedf0'], [11, 0, 3, '#ffee4a'], [12, 0, 3, '#ffc501'], [15, 0, 9, '#ffc501'],
// [0, 13], [10, 13], [11, 13], [12, 13],
// [0, 13 * 2], [10, 13 * 2], [11, 13 * 2], [12, 13 * 2],
// [0, 13 * 3], [10, 13 * 3], [11, 13 * 3], [12, 13 * 3],
// [0, 13 * 4], [10, 13 * 4], [11, 13 * 4], [12, 13 * 4],
// [0, 13 * 5], [10, 13 * 5], [11, 13 * 5], [12, 13 * 5],
// [0, 13 * 6], [10, 13 * 6], [11, 13 * 6], [12, 13 * 6],
// ];
window.postMessage(
    {
        type: "from_page",
        data: {
            text: "hello cjf",
            points: [[0, 0, 12, '#ebedf0'], [10, 0, 3, '#ebedf0'], [11, 0, 3, '#ffee4a'], [12, 0, 3, '#ffc501'], [15, 0, 9, '#ffc501'],]
        }
    });