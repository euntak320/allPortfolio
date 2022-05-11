"use strict";

var zoom = 70;
var zoomRate = 100;

// 지도 인증정보
var authorization = new indoorMapApi.Authorization({
	clientId: "19Kkq9uTQFVa5yxmioTVHn",
	clientSecret: "fa20220747c0df3cb72cdb9351c24bad"
});

var mapOptionsPC1 = {
	authorization: authorization,
	camera : "2d",
	zoom:120,
	controlZoom : false,
	rotationTouch2d : false,
	showPoi : true,
	theme: 3377
};

var mapOptionsPC2 = {
	authorization: authorization,
	camera : "2d",
	showPoi : true,
	rotationTouch2d : false,
	theme: 3323,
	zoom:200,
	maxZoom:500,
	minZoom : 200,
	zoomRate: 30
};

var mapOptionsMO1 = {
	authorization: authorization,
	camera : "2d",
	zoom:80,
	rotationTouch2d:false,
	showPoi : true,
	theme: 3323,
	maxZoom:550,
	minZoom : 80,
	zoomRate: 30
};

var mapOptionsMO2 = {
	authorization: authorization,
	camera : "2d",
	zoom:80,
	rotationTouch2d:false,
	showPoi : true,
	theme: 3323,
	maxZoom:550,
	minZoom : 80,
	zoomRate: 30
};


var exceptionTitle = ["화장실","엘리베이터", "에스컬레이터", "5호선 여의나루역","9호선,5호선 여의도역"];
var serviceCode  = ["9992","9993", "9994", "9995","9999"];

var arrFloor = { "B2F" : "FL-1k1u04u1gcdo53729",
												"B1F" : "FL-trqt3t95t54l3921",
												"1F" : "FL-u7znjvg28p4p3935",
												"2F" : "FL-somxnhrykoqc3910",
												"3F" : "FL-s0xbsiqyxsfq3897",
												"4F" : "FL-1hravv8aunol03883",
												"5F" : "FL-1h7le1ci2yjw43871",
												"6F" : "FL-1jy87y1r8iofm3862"
											}	;

var arrFloorInfo = {  "FL-1k1u04u1gcdo53729" : { name : "B2", title : "Creative Ground", title_html : "<span class=\"map__floor-txt\">Creative</span> GROUND"},
															"FL-trqt3t95t54l3921" : { name : "B1", title : "Tasty Seoul", title_html : "<span class=\"map__floor-txt\">Tasty</span> SEOUL"  },
															"FL-u7znjvg28p4p3935" : { name : "1F", title :"Exclusive Label" , title_html : "<span class=\"map__floor-txt\">Exclusive</span> LABEL" },
															"FL-somxnhrykoqc3910" : { name : "2F", title : "Modern Mood", title_html : "<span class=\"map__floor-txt\">Modern</span> MOOD" },
															"FL-s0xbsiqyxsfq3897" : { name : "3F", title :   "About Fashion", title_html : "<span class=\"map__floor-txt\">About</span> FASHION"},
															"FL-1hravv8aunol03883" : { name : "4F", title :  "Life & Balance", title_html : "<span class=\"map__floor-txt\">Life</span> & BALANCE"},
															"FL-1h7le1ci2yjw43871" : { name : "5F", title : "Sounds Forest" , title_html : "<span class=\"map__floor-txt\">Sounds</span> FOREST"},
															"FL-1jy87y1r8iofm3862" : { name : "6F", title : "Dining & Art", title_html : "<span class=\"map__floor-txt\">Dining</span> & ART" }
													}	;

var arrMap =new Array();

var  pc_callback = function(){
		var mapDraw = arrMap["map_pc"].mapDraw;
		var currentFloorStore = new Array();
		var serviceFacility = new Array();

		$("#store_list").html("");
		//console.log(mapDraw.response);
		mapDraw.response.poiInfo.some(function(store) {
					if( store.floorId === mapDraw.defaultFloor.id  && store.title !== "" && store.categoryCode !=="" && $.inArray(store.title, exceptionTitle) === -1 ) {
						//ar store_tel = store.metadatas[0].metadatas[0].text;
						if( $.inArray(store.categoryCode, serviceCode)=== -1 ) {
							currentFloorStore.push(store);
						} else {
							serviceFacility.push(store);
						}
				}
		});

		  currentFloorStore.sort(function(a,b){
			return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
		});

		serviceFacility.sort(function(a,b){
			return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
		});

		var stores = currentFloorStore.concat(serviceFacility);

		stores.some(function(store) {
				var store_tel = '-';
				if(Array.isArray(store.metadatas[0].metadatas) && store.metadatas[0].metadatas.length > 0 ){
					//console.log(store);
					if( store.metadatas[0].metadatas[0].text !== "" ) {
						var metadatas = JSON.parse(store.metadatas[0].metadatas[0].text);
						if( Array.isArray(metadatas) ) {
							store_tel = metadatas[0].tel;
						} else {
							store_tel = metadatas.tel;
						}
					}
				}
				store_tel  = ( store_tel == "" ) ? "-" : store_tel;
				var store_li = '<li class="map__itm" ><button type="button" class="map__tit" data-position-x="'+ store.position.x+'" data-position-y="'+ store.position.y+'">'+ store.title+'</button><a href="tel:'+store_tel +'" class="map__tel">'+ store_tel +'</a></li>';
				$("#store_list").append(store_li);
		});

		$("div.loading").hide();
		mapDraw.changeShowPoi({showPoi: false});
		mapDraw.zoomOff();
}

	// PC Full
	var  pc_full_callback = function(){
		var mapDraw = arrMap["map_pc_full"].mapDraw;
		mapDraw.changeShowPoi({showPoi: true});
		initFloorBtn(mapDraw.response.floorInfo);
}

	// MO
	var  mo_callback = function(){
		var mapDraw = arrMap["map_mo"].mapDraw;
	  var currentFloorStore = new Array();
		var serviceFacility = new Array();

		$("#store_list").html("");
		mapDraw.response.poiInfo.some(function(store) {
					if( store.floorId === mapDraw.defaultFloor.id  && store.title !== "" && store.categoryCode !=="" && $.inArray(store.title, exceptionTitle) === -1 ) {
						//ar store_tel = store.metadatas[0].metadatas[0].text;
						if( $.inArray(store.categoryCode, serviceCode)=== -1 ) {
							currentFloorStore.push(store);
						} else {
							serviceFacility.push(store);
						}
				}
		});

		 currentFloorStore.sort(function(a,b){
			return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
		});

		serviceFacility.sort(function(a,b){
			return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
		});

		var stores = currentFloorStore.concat(serviceFacility);

		stores.some(function(store) {
				var store_tel = '-';
				if(Array.isArray(store.metadatas[0].metadatas) && store.metadatas[0].metadatas.length > 0 ){
					if( store.metadatas[0].metadatas[0].text !== "" ) {
						var metadatas = JSON.parse(store.metadatas[0].metadatas[0].text);
						if( Array.isArray(metadatas) ) {
							store_tel = metadatas[0].tel;
						} else {
							store_tel = metadatas.tel;
						}
					}
				}
				store_tel  = ( store_tel == "" ) ? "-" : store_tel;
				var store_li = '<li class="map__itm" ><button type="button" class="map__tit" data-position-x="'+ store.position.x+'" data-position-y="'+ store.position.y+'">'+ store.title+'</button><a href="tel:'+store_tel+'" class="map__tel">'+ store_tel +'</a></li>';
				$("#store_list").append(store_li);

				console.log(store_tel)
		});

		$("div.loading").hide();
		//mapDraw.changeShowPoi({showPoi: false});
		//mapDraw.zoomOff();
}

// MO Full
var  mo_full_callback = function(){
	var mapDraw = arrMap["map_mo_full"].mapDraw;
	initFloorBtn(mapDraw.response.floorInfo);
	//mapDraw.changeShowPoi({showPoi: true});
}

function initMap(mapId, options , floorId,  fn) {
	options.floor = floorId;
	var mapContainer = document.getElementById(mapId); // 지도를 표시할 div
	console.log("init map : " + mapId);

	// 지도를 표시할 div, 옵션으로 생성 후 로딩이 완료되면 콜백으로 결과를 리턴합니다
	new indoorMapApi.MapView(
			mapContainer, // 컨테이너
			options, // 옵션
			function (response) { // 맵 로드 콜백
					var code = response.getCode();
					if (code === 200 ) {
						arrMap[mapId] = response.getPayload();
						// do something
						console.log( mapId + " view success!");
						if( typeof fn === "function" )  fn();
					}
			}
	);
}


function showStoreMarker(position, map_id) {
	var mapDraw = arrMap[map_id].mapDraw;
	mapDraw.clearMarker(); // 마커 지우기

	var marker = [];
	var marker_w = 8;
	var marker_h= 8;
	if( map_id == "map_pc" || map_id == "map_pc_full" ) {
		marker_w = 4;
		marker_h= 4;
	} else {
		mapDraw.zoomControl(80);
	}
	marker.push({ position:position,
			image: "/images/img_marker.png?v=2", // 이미지 지정하지 않을 경우 기본 이미지로 표시
			size:{
				width:marker_w,
				height: marker_h
			}
			// , floorId: i.floorId // 층을 지정 할때 : 지정하지 않을 경우 현재 보이는 층
	});
	mapDraw.setMarker({image:'img_marker.png?v=2', marker: marker }); // 마커 그리기

}

function findFloorName(findId) {
		var floorName = "";
		for( var key in arrFloor ) {
			if( findId == arrFloor[key] ) {
				floorName =  key;
			}
		}
    return floorName;
}

function setFloorBtn(floorId) {
	$(".floors_list li a").removeClass("active");
	console.log('setFloorBtn');

	$(".floors_list li").each(function(index, item){
		var floor_id = $(this).data("floor-id");
		if( floor_id == floorId ) {
			$(this).children("a").addClass("active");
			if ($(window).width() <= 769) {
				var floorInfo = arrFloorInfo[floorId];
				$(".guide-all .map__floor").html(floorInfo.name);
				$(".guide-all .map__floor-tit").html(floorInfo.title_html);
			}
		}
	});
}

function redrawMap(map_id, floor_id){
	var mapDraw =  arrMap[map_id].mapDraw;
	if( typeof mapDraw !== "object") return;

	var floorName = findFloorName(floor_id);
	var x = 0;
	var y = 0;
	if( map_id == "map_pc_full" ){
			x = 1600;
			y =	1500;
			if( floorName == "B2F") {
				y = 1600;
			} else if( floorName == "B1F") {
				x = 1500;
			}
			zoom = mapOptionsPC2.zoom;
	}else if( map_id == "map_mo_full" || map_id == "map_mo" ) {
			x = 1500;
			y =	1700;

			zoom = mapOptionsMO1.zoom;
			if( floorName == "B2F" || floorName == "B1F") {
				y = 1900;
			}
	}

	mapDraw.redrawMap({floor: floor_id});
	mapDraw.moveCamera({ "x": x, "y": y });
	mapDraw.init2DCameraInfo();

		//$("#map_mo").css("margin-top","-100px");
		//$("#map_mo").css("margin-left","-10px");
}

function initFloorBtn(floorInfo) {
		$(".floors_list li").each(function(index, item){
			var floor_name = $(this).data("floor-name");
			$(this).data("floor-id", arrFloor[floor_name] );
		});
		$(document).on("click", ".floors_list li",  function(e) {
			var floor_id = $(this).data("floor-id");
			setFloorBtn(floor_id);
			if ($(window).width() > 769) {
				redrawMap("map_pc_full", floor_id);
			} else {
				redrawMap("map_mo_full", floor_id);
			}
		});
}


$(document).ready(function(){

	$(".map").removeClass("construction");
	$("#store_list").on("mouseover", ".map__tit", function(){
			if ($(window).width() > 769) {
				var position_x = $(this).data("position-x");
				var position_y = $(this).data("position-y");
				var position = { x: position_x, y: position_y , z : 58 };
				showStoreMarker(position, "map_pc");
			}
	});

	$("#store_list").on("click", ".map__tit", function(){
		if ($(window).width() <= 769) {
			$(".guide-brand__tit").html( $(this).html());		// 매장명
			var position_x = $(this).data("position-x");
			var position_y = $(this).data("position-y");
			var position = { x: position_x, y: position_y , z : 58 };
			showStoreMarker(position, "map_mo");
			redrawMap("map_mo", initFloorId);
		} else {
				var position_x = $(this).data("position-x");
				var position_y = $(this).data("position-y");
				var position = { x: position_x, y: position_y , z : 58 };
				showStoreMarker(position, "map_pc");
			}
	});

	// 매장 안내도
	$('.map__all-btn').on('click', function () {
		// var mapDraw = null; dabeeo 측에서 삭제 요청
		if ($(window).width() > 769) {
			setFloorBtn(initFloorId);
			redrawMap("map_pc_full", initFloorId);
		} else {
			setFloorBtn(initFloorId);
			redrawMap("map_mo_full", initFloorId);
		}
	});

	// zoom-in
	$(".map__zoom-in").on("click", function(){
		// var mapDraw = null; dabeeo 측에서 삭제 요청
		var maxZoom = 100;
		if ($(window).width() > 769) {
			mapDraw = arrMap["map_pc_full"].mapDraw;
			maxZoom = mapOptionsPC2.maxZoom;
			zoomRate = mapOptionsPC2.zoomRate;
		} else {
			maxZoom = mapOptionsMO2.maxZoom; ;
			zoomRate = mapOptionsMO1.zoomRate;
			if( $(".guide-brand--mo").is(":visible") ) {
				mapDraw = arrMap["map_mo"].mapDraw;
			} else {
				mapDraw = arrMap["map_mo_full"].mapDraw;
			}
		}

		if( typeof mapDraw == "object") {
			if( maxZoom > mapDraw.zoomControl() + zoomRate ) {
				zoom = mapDraw.zoomControl() + zoomRate;
				mapDraw.zoomControl(zoom);
			} else {
				mapDraw.zoomControl(maxZoom);
			}
		}
	});


	// zoom-out
	$(".map__zoom-out").on("click", function(){
		// var mapDraw = null; dabeeo 측에서 삭제 요청
		var minZoom = mapOptionsMO1.minZoom;

		if ($(window).width() > 769) {
			mapDraw = arrMap["map_pc_full"].mapDraw;
			minZoom = mapOptionsPC2.minZoom;
			zoomRate = mapOptionsPC2.zoomRate;

		} else {
			zoomRate = mapOptionsMO1.zoomRate;
			minZoom = mapOptionsMO1.minZoom;
			if( $(".guide-brand--mo").is(":visible") ) {
				mapDraw = arrMap["map_mo"].mapDraw;
			} else {
				mapDraw = arrMap["map_mo_full"].mapDraw;
			}
		}

		if( typeof mapDraw == "object") {
			if( minZoom < mapDraw.zoomControl() - zoomRate ) {
				zoom = mapDraw.zoomControl() - zoomRate;
				mapDraw.zoomControl(zoom);
			} else {
				mapDraw.zoomControl(minZoom);
			}

		}
	});

});
