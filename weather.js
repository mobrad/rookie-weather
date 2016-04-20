(function($) {
	$(document).ready(function() {

		function clearField() {
     		document.getElementById("zipfield").value = "";

		};

		function resetTemps() {
			document.getElementById("place_name").innerHTML = "for ";
     		document.getElementById("current_temp").innerHTML = "now: ";
     		document.getElementById("high_temp").innerHTML = "high: ";
     		document.getElementById("low_temp").innerHTML = "low: ";
     		document.getElementById("humidity").innerHTML = "humidity: ";
     		document.getElementById("descr").innerHTML= "conditions: ";
		}

		function toFahr(x) {
			y = Math.round(1.8 * (x - 273) + 32)
			return y
		}



		$('#zip_button').click(function getWeather() {

			resetTemps();		

			var zip = $('#zipfield').val();
			var URL = "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&appid=2c032c082e8c36e6db3d3e4f1cab0220";
			

			$.getJSON(URL, function(data) {

				var place = (data['name']) + ":"
				$('.place_name').append(place)
				var type = (data['weather'][0]['description']);
				$('.descr').append(type)

				var currenttemp = toFahr(data['main']['temp']);
				var hightemp = toFahr(data['main']['temp_max']);
				var lowtemp = toFahr(data['main']['temp_min']);
				var humidity = data['main']['humidity'];

				$('.current_temp').append(currenttemp + "&deg;F");
				$('.high_temp').append(hightemp + "&deg;F");
				$('.low_temp').append(lowtemp + "&deg;F");
				$('.humidity').append(humidity + "%");


				clearField();
			});

		});

		$('#clear_button').click(resetTemps);



	});
})(this.jQuery);


