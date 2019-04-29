$(function () {
  $(".datepicker").datepicker({ 
        autoclose: true, 
        todayHighlight: true
  }).datepicker('update', new Date());
});

$(document).ready(function(){
	let headerHeight = $('.buildoCustomHeader').height();
	$('#spacer').height(headerHeight);
});
