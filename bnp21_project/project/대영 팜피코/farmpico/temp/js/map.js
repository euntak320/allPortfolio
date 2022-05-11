function initialize() {
	var mapCanvas = document.getElementById('map-canvas');
	var myLatlng = new google.maps.LatLng(37.394748, 126.959890);
	var mapOptions = {
		center: myLatlng,
		zoom: 17,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(mapCanvas, mapOptions);

	var contentString = '<div style="width:100px;height:50px;">SSM</div>';

	var infowindow = new google.maps.InfoWindow({
		content: contentString,
		size: new google.maps.Size(200,100)
	});

	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		draggable:true,
		title: ''
	});
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map, marker);

		if (marker.getAnimation() != null) {
			marker.setAnimation(null);
		} else {
			marker.setAnimation(google.maps.Animation.BOUNCE);
		}
	});

	marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);
