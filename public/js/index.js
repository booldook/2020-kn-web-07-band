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


/********* 카카오 지도 **********/
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
	mapOption = { 
			center: new kakao.maps.LatLng(37.498762, 127.026782), // 지도의 중심좌표
			level: 3 // 지도의 확대 레벨
	};

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.498762, 127.026782); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
		position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);