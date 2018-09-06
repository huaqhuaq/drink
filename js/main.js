placeholderPic();
function placeholderPic(){
	var w = document.documentElement.offsetWidth;
	if(w<769){
		document.documentElement.style.fontSize=w/7.2+'px';
	}
}
window.onresize=function(){
    placeholderPic();
}

$.fn.datetimepicker.dates['zh-CN'] = {
  days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
  daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
  daysMin:  ["日", "一", "二", "三", "四", "五", "六", "日"],
  months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
  monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
  today: "今天",
  suffix: [],
  meridiem: ["上午", "下午"]
};
$('#datetimepicker').datetimepicker({
	language: 'zh-CN',
	format: 'yyyy-mm-dd',
	startDate: new Date(),
	minView: 2,
	maxView: 2
})

$('#time').on('click', function() {
	$('#timeLayer').show()
})
$("#timeLayer").on('click', function(event) {
	if($(event.target).parents('.mask').length == 0) {
		$('#timeLayer').hide()
	} else {
		$('#time').val($("input[name='time']:checked").val())
		$('#timeLayer').hide()
	}
})

$('#reason').on('click', function() {
	$('#reasonLayer').show()
})
$("#reasonLayer").on('click', function(event) {
	if($(event.target).parents('.mask').length == 0) {
		$('#reasonLayer').hide()
	} else {
		$('#reason').val($("input[name='reason']:checked").val())
		$('#reasonLayer').hide()
	}
})

$('#place').on('click', function() {
	$('#placeLayer').show()
})
$("#placeLayer").on('click', function(event) {
	if($(event.target).parents('.mask').length == 0) {
		$('#placeLayer').hide()
	} else {
		$('#place').val($("input[name='place']:checked").val())
		$('#placeLayer').hide()
	}
})