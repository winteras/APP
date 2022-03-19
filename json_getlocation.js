$(document).on("pagecreate","#page1",function(event){
	$("#p1_b1").on("vclick",function(){
		var xmlhttp = new XMLHttpRequest();
		var url = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=1";
		xmlhttp.onreadystatechange=function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				myFunction(xmlhttp.responseText);
			}
		}
		xmlhttp.open("GET", url, true);
		xmlhttp.send();
		
		function myFunction(response) {
			var arr = JSON.parse(response);
			var i;
			var out = '<table class="table table-striped table-hover">' +
						'<thead><tr><th scope="col">#</th>' +
						'<th scope="col">活動名稱</th>' +
						'<th scope="col">主辦單位</th>' +
						'<th scope="col">活動時間</th>' +
						'<th scope="col">活動售票</th></tr></thead><tbody>';
		
			for(i = 0; i < arr.length; i++) {
				out += '<tr><th scope="row">' + i + '</th><td>' +
				arr[i].title + "</td><td>" +
				arr[i].masterUnit + "</td><td>" +
				arr[i].startDate + "</td><td>" +
				arr[i].sourceWebName + "</td></tr>";
			}
			out += "</tbody></table>";
			document.getElementById("p1_d1").innerHTML = out;
		}
	});
	
	
	$("#p1_b2").on("vclick",function(){
		var x = document.getElementById("p1_d1");
		getLocation()
		function getLocation() {
		  if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition, showError);
		  } else { 
			x.innerHTML = "Geolocation is not supported by this browser.";
		  }
		}

		function showPosition(position) {
		  x.innerHTML = "Latitude: " + position.coords.latitude + 
		  "<br>Longitude: " + position.coords.longitude + 
		  "<br>Accuracy: " + position.coords.accuracy + 
		  "<br>altitude: " + position.coords.altitude + 
		  "<br>AltitudeAccuracy: " + position.coords.altitudeAccuracy + 
		  "<br>Heading: " + position.coords.heading + 
		  "<br>Speed: " + position.coords.speed + 
		  "<br>Timestamp: " + position.timestamp;
		  
		  var lat = position.coords.latitude;
		  var lon = position.coords.longitude;
		  var latlon = new google.maps.LatLng(lat, lon)
		  var mapholder = document.getElementById('p1_d2')
		  mapholder.style.height = '250px';
		  mapholder.style.width = '100%';

		  var myOptions = {
			center:latlon,zoom:14,
			mapTypeId:google.maps.MapTypeId.ROADMAP,
			mapTypeControl:false,
			navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
		  }
			
		  var map = new google.maps.Map(mapholder, myOptions);
		  var marker = new google.maps.Marker({position:latlon,map:map,title:"You are here!"});
		}

		function showError(error) {
		  switch(error.code) {
			case error.PERMISSION_DENIED:
			  x.innerHTML = "User denied the request for Geolocation."
			  break;
			case error.POSITION_UNAVAILABLE:
			  x.innerHTML = "Location information is unavailable."
			  break;
			case error.TIMEOUT:
			  x.innerHTML = "The request to get user location timed out."
			  break;
			case error.UNKNOWN_ERROR:
			  x.innerHTML = "An unknown error occurred."
			  break;
		  }
		}
		
	});
	$("#p1_b3").on("vclick",function(){
		var x = document.getElementById("p1_d1");
		getLocation()
		function getLocation() {
		  if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition, showError);
		  } else { 
			x.innerHTML = "Geolocation is not supported by this browser.";
		  }
		}

		function showPosition(position) {
		  var lat = position.coords.latitude;
		  var lon = position.coords.longitude;
		  var latlon = new google.maps.LatLng(lat, lon)
		  var mapholder = document.getElementById('p1_d1')
		  mapholder.style.height = '250px';
		  mapholder.style.width = '100%';

		  var myOptions = {
			center:latlon,zoom:14,
			mapTypeId:google.maps.MapTypeId.ROADMAP,
			mapTypeControl:false,
			navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
		  }
			
		  var map = new google.maps.Map(mapholder, myOptions);
		  var marker = new google.maps.Marker({position:latlon,map:map,title:"You are here!"});
		  var myObject;
		  var xmlhttp = new XMLHttpRequest();
		  var url = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=1";
		  xmlhttp.onreadystatechange=function() {
			  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				  myObject = JSON.parse(this.responseText);
				  for(i=0;i<myObject.length;i++){
					  var latlon = new google.maps.LatLng(myObject[i].showInfo[0].latitude,myObject[i].showInfo[0].longitude);
					  marker = new google.maps.Marker({position:latlon,map:map,title:myObject[i].showInfo[0].locationName})
				  }
				  
			  }
		  }
		
		  xmlhttp.open("GET", url, true);
		  xmlhttp.send();
		}

		function showError(error) {
		  switch(error.code) {
			case error.PERMISSION_DENIED:
			  x.innerHTML = "User denied the request for Geolocation."
			  break;
			case error.POSITION_UNAVAILABLE:
			  x.innerHTML = "Location information is unavailable."
			  break;
			case error.TIMEOUT:
			  x.innerHTML = "The request to get user location timed out."
			  break;
			case error.UNKNOWN_ERROR:
			  x.innerHTML = "An unknown error occurred."
			  break;
		  }
		}
		
	});


});


$(document).on("pagecreate","#page3",function(event){
	var xmlhttp = new XMLHttpRequest();
	var url = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=1";
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			myFunction(xmlhttp.responseText);
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
	function myFunction(response) {
		var arr = JSON.parse(response);
		var i;
		var out = '<table class="table table-striped table-hover">' +
					'<thead><tr><th scope="col">#</th>' +
					'<th scope="col">活動名稱</th>' +
					'<th scope="col">主辦單位</th>' +
					'<th scope="col">活動時間</th>' +
					'<th scope="col">活動售票</th></tr></thead><tbody>';
	
		for(i = 0; i < arr.length; i++) {
			out += '<tr><th scope="row">' + i + '</th><td>' +
			arr[i].title + "</td><td>" +
			arr[i].masterUnit + "</td><td>" +
			arr[i].startDate + "</td><td>" +
			arr[i].sourceWebName + "</td></tr>";
		}
		out += "</tbody></table>";
		document.getElementById("p3_d1").innerHTML = out;
	}
});



$(document).on("pagecreate","#page4",function(event){
	$("#p4_b1").on("vclick",function(){
		var x = document.getElementById("p4_d1");
		getLocation()
		function getLocation() {
		  if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition, showError);
		  } else { 
			x.innerHTML = "Geolocation is not supported by this browser.";
		  }
		}

		function showPosition(position) {
		  var lat = position.coords.latitude;
		  var lon = position.coords.longitude;
		  var latlon = new google.maps.LatLng(lat, lon)
		  var mapholder = document.getElementById('p4_d1')
		  mapholder.style.height = '550px';
		  mapholder.style.width = '100%';

		  var myOptions = {
			center:latlon,zoom:14,
			mapTypeId:google.maps.MapTypeId.ROADMAP,
			mapTypeControl:false,
			navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
		  }
			
		  var map = new google.maps.Map(mapholder, myOptions);
		  var marker = new google.maps.Marker({position:latlon,map:map,title:"You are here!"});
		  var myObject;
		  var markers = [];
		  var xmlhttp = new XMLHttpRequest();
		  var url = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=1";
		  xmlhttp.onreadystatechange=function() {
			  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				  myObject = JSON.parse(this.responseText);
				  for(i=0;i<myObject.length;i++){
					  var latlon = new google.maps.LatLng(myObject[i].showInfo[0].latitude,myObject[i].showInfo[0].longitude);
					  marker = new google.maps.Marker({position:latlon,map:map,title:myObject[i].showInfo[0].locationName})
					  markers.push(marker);
				  }
				  var markerCluster = new MarkerClusterer(map, markers,
					{imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
				  
			  }
		  }
		
		  xmlhttp.open("GET", url, true);
		  xmlhttp.send();
		}

		function showError(error) {
		  switch(error.code) {
			case error.PERMISSION_DENIED:
			  x.innerHTML = "User denied the request for Geolocation."
			  break;
			case error.POSITION_UNAVAILABLE:
			  x.innerHTML = "Location information is unavailable."
			  break;
			case error.TIMEOUT:
			  x.innerHTML = "The request to get user location timed out."
			  break;
			case error.UNKNOWN_ERROR:
			  x.innerHTML = "An unknown error occurred."
			  break;
		  }
		}
		
	});
	
});


$(document).on("pagecreate","#page5",function(event){
	$("#p5_b1").on("vclick",function(){
		var x = document.getElementById("p5_d1");
		getLocation()
		function getLocation() {
		  if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition, showError);
		  } else { 
			x.innerHTML = "Geolocation is not supported by this browser.";
		  }
		}

		function showPosition(position) {
		  var lat = position.coords.latitude;
		  var lon = position.coords.longitude;
		  var latlon = new google.maps.LatLng(lat, lon)
		  var mapholder = document.getElementById('p5_d1')
		  mapholder.style.height = '550px';
		  mapholder.style.width = '100%';

		  var myOptions = {
			center:latlon,zoom:14,
			mapTypeId:google.maps.MapTypeId.ROADMAP,
			mapTypeControl:false,
			navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
		  }
			
		  var map = new google.maps.Map(mapholder, myOptions);
		  var marker = new google.maps.Marker({position:latlon,map:map,title:"You are here!"});
		  var myObject;
		  var markers = [];
		  var xmlhttp = new XMLHttpRequest();
		  var url = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=1";
		  xmlhttp.onreadystatechange=function() {
			  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				  myObject = JSON.parse(this.responseText);
				  for(i=0;i<myObject.length;i++){
					  var latlon = new google.maps.LatLng(myObject[i].showInfo[0].latitude,myObject[i].showInfo[0].longitude);
					  marker = new google.maps.Marker({
						  position:latlon,
						  icon: {	path: google.maps.SymbolPath.CIRCLE,  // 使用圖圈圖形
									strokeColor: "white", // 線條顏色
									strokeWeight: 1,      // 線條粗細
									fillColor: "red",     // 填充顏色
									fillOpacity: 0.3,     // 填充透明度
									scale: Math.floor((Math.random()*10)+1)  // 圖形大小
								},
						  map:map,
						  title:myObject[i].showInfo[0].locationName})
					 // markers.push(marker);
				  }
				 // var markerCluster = new MarkerClusterer(map, markers,
					//{imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
				  
			  }
		  }
		
		  xmlhttp.open("GET", url, true);
		  xmlhttp.send();
		}

		function showError(error) {
		  switch(error.code) {
			case error.PERMISSION_DENIED:
			  x.innerHTML = "User denied the request for Geolocation."
			  break;
			case error.POSITION_UNAVAILABLE:
			  x.innerHTML = "Location information is unavailable."
			  break;
			case error.TIMEOUT:
			  x.innerHTML = "The request to get user location timed out."
			  break;
			case error.UNKNOWN_ERROR:
			  x.innerHTML = "An unknown error occurred."
			  break;
		  }
		}
		
	});
	
});


$(document).on("pagecreate","#page6",function(event){
	$("#p6_b1").on("vclick",function(){
		var EARTH_RADIUS = 6378.137; //地球半徑
		var x = document.getElementById("p6_d1");
		getLocation()
		var range = $("#p6_t1").val();
		document.getElementById("p6_d2").innerHTML = range;
		var centerlat;
		var centerlon;
		function getLocation() {
		  if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition, showError);
		  } else { 
			x.innerHTML = "Geolocation is not supported by this browser.";
		  }
		}

		function showPosition(position) {
		  centerlat = position.coords.latitude;
		  centerlon = position.coords.longitude;
		  var latlon = new google.maps.LatLng(centerlat, centerlon)
		  var mapholder = document.getElementById('p6_d1')
		  mapholder.style.height = '550px';
		  mapholder.style.width = '100%';

		  var myOptions = {
			center:latlon,zoom:14,
			mapTypeId:google.maps.MapTypeId.ROADMAP,
			mapTypeControl:false,
			navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
		  }
			
		  var map = new google.maps.Map(mapholder, myOptions);
		  var marker = new google.maps.Marker({position:latlon,map:map,title:"You are here!"});
		  var myObject;
		  var markers = [];
		  var xmlhttp = new XMLHttpRequest();
		  var url = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=1";
		  xmlhttp.onreadystatechange=function() {
			  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				  myObject = JSON.parse(this.responseText);
				  document.getElementById("p6_d2").innerHTML = range;
				  for(i=0;i<myObject.length;i++){
					  if(getDistance(centerlat,centerlon,myObject[i].showInfo[0].latitude,myObject[i].showInfo[0].longitude)<=range){
						  document.getElementById("p6_d2").innerHTML = getDistance(centerlat,centerlon,myObject[i].showInfo[0].latitude,myObject[i].showInfo[0].longitude);
						  var latlon = new google.maps.LatLng(myObject[i].showInfo[0].latitude,myObject[i].showInfo[0].longitude);
						  marker = new google.maps.Marker({position:latlon,map:map,title:myObject[i].showInfo[0].locationName})
					  }
				  }
				  
				  
				 // var markerCluster = new MarkerClusterer(map, markers,
					//{imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
				  
			  }
		  }
		
		  xmlhttp.open("GET", url, true);
		  xmlhttp.send();
		}

		function showError(error) {
		  switch(error.code) {
			case error.PERMISSION_DENIED:
			  x.innerHTML = "User denied the request for Geolocation."
			  break;
			case error.POSITION_UNAVAILABLE:
			  x.innerHTML = "Location information is unavailable."
			  break;
			case error.TIMEOUT:
			  x.innerHTML = "The request to get user location timed out."
			  break;
			case error.UNKNOWN_ERROR:
			  x.innerHTML = "An unknown error occurred."
			  break;
		  }
		}
		function rad(d) {
		  return d * Math.PI / 180.0;
		 }
		function getDistance(lng1, lat1, lng2, lat2) {
		  var radLat1 = rad(lat1);
		  var radLat2 = rad(lat2);
		  var a = radLat1 - radLat2;
		  var b = rad(lng1) - rad(lng2);
		  var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2)
			+ Math.cos(radLat1) * Math.cos(radLat2)
			* Math.pow(Math.sin(b / 2), 2)));
		  s = s * EARTH_RADIUS;
		  s = Math.round(s * 10000) / 10000;
		  return s;
		}
 


		
	});
	
});



$(document).on("pagecreate","#page7",function(event){
	var directionsService = new google.maps.DirectionsService();
	var directionsDisplay = new google.maps.DirectionsRenderer();
	var centerlat;
	var centerlon;
	var centerPos;
	var radius;
	var x = document.getElementById("p7_d1");
	var y = document.getElementById("p7_d2");
	var map;
	var infowindow;
	$("#p7_b1").off("vclick");
	$("#p7_b1").on("vclick",function(event){
		radius = ($("#p7_t1").val())*1000;
		getLocation();
		
	function getLocation() {
	  if (navigator.geolocation) {
		var options = {timeout:10000};
		navigator.geolocation.getCurrentPosition(showPosition, showError,options);
	  } else { 
		x.innerHTML = "Geolocation is not supported by this browser.";
	  }
	}
	
		
		
		
		
	function showPosition(position) {
	  centerlat = position.coords.latitude;
	  centerlon = position.coords.longitude;
	  var latlon = new google.maps.LatLng(centerlat, centerlon)
	  x.innerHTML = "目前位置 Latitude(緯度): " +centerlat+ "Longitude(經度): " +centerlon
	  
	  centerPos = new google.maps.LatLng(centerlat,centerlon)
	  var thisMap = document.getElementById("p7_d1");
	  thisMap.style.height = '550px';
	  thisMap.style.width = '100%';
	  
	  map = new google.maps.Map(thisMap,{
		  center:centerPos,zoom:15
			
	  });
	  
	  
	  
	  var marker = new google.maps.Marker({position:latlon,map:map,title:"You are here!"});
	  
	  infowindow = new google.maps.InfoWindow();
	  var service = new google.maps.places.PlacesService(map);
	  var request = {
		location: centerPos,
		radius: radius,
		keyword: "麥當勞"
		//type: ['restaurant']
	  };
	  service.nearbySearch(request, callback);
	  
	  
	  
	  function callback(results, status) {
	    if (status == google.maps.places.PlacesServiceStatus.OK) {
		  for (var i = 0; i < results.length; i++) {
			createMarker(results[i]);
		  }
		}
	  }
	  function createMarker(place) {
		var placeLoc = place.geometry.location;
		var marker = new google.maps.Marker({
		  map: map,
		  position: place.geometry.location
		});
		google.maps.event.addListener(marker,"click",function(){
			infowindow.setContent(place.name);
			infowindow.open(map,this);
		});
		google.maps.event.addListener(marker,"dblclick",function(){
			directionsDisplay.setMap(map);
			directionsService.route({
				origin: centerPos,
				destination: placeLoc,
				travelMode: 'DRIVING'
			}, function(response, status) {
				if (status === 'OK') {
				  directionsDisplay.setDirections(response);
				  var disStepArr = response.routes[0].legs[0];
				  //https://developers.google.com/maps/documentation/directions/intro ctrl F "legs";下面還有一層 steps;
				  var disStep = disStepArr.steps.length;
				  if (disStep>0){
					  var stepString = "";
					  for (var i = 0; i<disStep;i++){
						  stepString += disStepArr.steps[i].instructions.trim();
					  
					  }
					  y.innerHTML = stepString;
				  }
				  
				}
				 else {
				  window.alert('Directions request failed due to ' + status);
				};
			});
				
		})
		
		
		
	  }
	  
	  
	}

	function showError(error) {
	  switch(error.code) {
		case error.PERMISSION_DENIED:
		  x.innerHTML = "User denied the request for Geolocation."
		  break;
		case error.POSITION_UNAVAILABLE:
		  x.innerHTML = "Location information is unavailable."
		  break;
		case error.TIMEOUT:
		  x.innerHTML = "The request to get user location timed out."
		  break;
		case error.UNKNOWN_ERROR:
		  x.innerHTML = "An unknown error occurred."
		  break;
	  }
	}
		
	});
	
});


