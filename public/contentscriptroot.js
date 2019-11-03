var cubeLocation = $('.js-calendar-graph');
// var cubeLocation = $('.calendar')
// var cubeLocation = $('.js-contrib-calendar');

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
var column = [];
var GH_OFFSET = parseInt(((($('.js-calendar-graph-svg g > g'))[1].getAttribute('transform')).match(/(\d+)/))[0] - 1);
console.log("GH_OFFSET:" + GH_OFFSET);


const MAX_HEIGHT = 100;
var data = {};

var peakPoint = {
    count: 0,
    date: null,
};

var yearlyStatic = {
    count: 0,
    startDate: null,
    endDate: null,
};

var tempStreak = {
    length: 0,
    startDate: null,
    endDate: null,
};
var longestStreak = {
    length: 0,
    startDate: null,
    endDate: null,
};

var days = $('.js-calendar-graph rect.day');
days.each(function (d) {
    const curCount = ($(this)).data('count');
    yearlyStatic.count += curCount;
    var day = ($(this)).data('date');
    if (d === 0) {
        yearlyStatic.startDate = day;
    } else if (d === days.length - 1) {
        yearlyStatic.endDate = day;
    }
    // Check for best day
    if (curCount > peakPoint.count) {
        peakPoint.date = day;
        peakPoint.count = curCount;
    }
    // Check for longest streak
    if (curCount > 0) {
        if (tempStreak.length === 0) {
            tempStreak.startDate = ($(this)).data('date');
        }
        tempStreak.length++;
        if (tempStreak.length >= longestStreak.length) {
            longestStreak.startDate = tempStreak.startDate;
            longestStreak.endDate = ($(this)).data('date');
            longestStreak.length = tempStreak.length;
        }
    } else {
        tempStreak.length = 0;
        tempStreak.startDate = null;
        tempStreak.endDate = null;
    }
});
var curStreak = {
    length: 0,
    startDate: null,
    endDate: null,
};

// days = ($('.js-calendar-graph rect.day')).get().reverse();
// curStreak.endDate = days[0].getAttribute('data-date');
// for (let i, j = 0, len = days.length; j < len; i = ++j) {
//     curStreak.length = parseInt(days[i].getAttribute('data-count'), 10);
//     // If there's no activity today, continue on to yesterday
//     if (i === 0 && curStreak.length === 0) {
//         curStreak.endDate = days[1].getAttribute('data-date');
//         continue;
//     }
//     if (curStreak.length > 0) {
//         curStreak.length++;
//         curStreak.startDate = days[i].getAttribute('data-date');
//     }
// }

var points = [
    // [0, 0, 12, '#ebedf0'], [10, 0, 3, '#ebedf0'], [11, 0, 3, '#ffee4a'], [12, 0, 3, '#ffc501'], [15, 0, 9, '#ffc501'],
    // [0, 13], [10, 13], [11, 13], [12, 13],
    // [0, 13 * 2], [10, 13 * 2], [11, 13 * 2], [12, 13 * 2],
    // [0, 13 * 3], [10, 13 * 3], [11, 13 * 3], [12, 13 * 3],
    // [0, 13 * 4], [10, 13 * 4], [11, 13 * 4], [12, 13 * 4],
    // [0, 13 * 5], [10, 13 * 5], [11, 13 * 5], [12, 13 * 5],
    // [0, 13 * 6], [10, 13 * 6], [11, 13 * 6], [12, 13 * 6],
];

($('.js-calendar-graph-svg g > g')).each(function (g) {
    var x = parseInt(((($(this)).attr('transform')).match(/(\d+)/))[0] / (GH_OFFSET + 1));
    (($(this)).find('rect')).each(function (react) {
        var point = [];
        point[0] = x;
        point[1] = parseInt((($(this)).attr('y')) / GH_OFFSET);
        point[3] = ($(this)).attr('fill');
        var contribCount = parseInt(($(this)).data('count'));
        var cubeHeight = 3;
        if (peakPoint.count > 0) {
            cubeHeight += parseInt(MAX_HEIGHT / peakPoint.count * contribCount);
        }
        point[2] = cubeHeight;

        points.push(point);
    });
});
// console.info("points:"+points);
data.points = points;
data.longestStreak = longestStreak;
data.curStreak = curStreak;
data.yearlyStatic = yearlyStatic;
data.peakPoint = peakPoint;


data.type = "from_page";
window.postMessage(data);