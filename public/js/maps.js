console.log ("connected")
L.mapquest.key = MAPQUEST_API_KEY;
var map = document.getElementById('map')
var x = document.getElementById("demo");


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, ()=>{
      renderMap(37, -122)
    });
  } else {
    renderMap(37, -122)
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
  renderMap(position.coords.latitude, position.coords.longitude)
}
getLocation()

var map;
function renderMap(latitude, longitude){
// 'map' refers to a <div> element with the ID map 
map = L.mapquest.map('map', {
  center: [latitude, longitude],
  layers: L.mapquest.tileLayer('map'),
  zoom: 12
})
var marker = L.marker([40.511460, -75.559543]).addTo(map);
marker.bindPopup("<a href='/animalProfile/1'>Steven</a>.").openPopup();

var marker = L.marker([41.511460, -75.559543]).addTo(map);
marker.bindPopup("<a href='/animalProfile/4'>Bill</a>.").openPopup();
}

// L.marker([40.511460, -75.559543], {
//   title: 'You are here',
// })
// .addTo(map)




