/********* 전역선언 **********/
var bannerInterval;
var bannerIdx = 0;


/********* 이벤트선언 **********/
$(".header-wrapper .bar-wrap").click(onBarWrap);
bannerInterval = setInterval(onBannerInterval, 4000);



/********* 이벤트콜백 **********/
function onBarWrap() {
	$(".header-wrapper .mo-navi-wrapper").toggleClass('active');
}
function onBannerInterval(){
	bannerIdx = bannerIdx == 2 ? 0 : bannerIdx + 1 ;
	$(".main-wrapper .banner").hide();
	$(".main-wrapper .banner").eq(bannerIdx).show();
}


/********* 사용자함수 **********/

