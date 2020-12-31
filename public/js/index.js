/********* 전역선언 **********/



/********* 이벤트선언 **********/
$(".header-wrapper .bar-wrap").click(onBarWrap);


/********* 이벤트콜백 **********/
function onBarWrap() {
	$(".header-wrapper .mo-navi-wrapper").toggleClass('active');
}


/********* 사용자함수 **********/

