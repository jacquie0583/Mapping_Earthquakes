// Create a map object
var myMap = L.map("map", {
  center: [40.7128, -74.0059],
  zoom: 5
});

// // Add a tile layer
// L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//   attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//   tileSize: 512,
//   maxZoom: 18,
//   zoomOffset: -1,
//   id: "mapbox/streets-v11",
//   accessToken: API_KEY
// }).addTo(myMap);

// City markers

L.marker([50.5, 30.5]).addTo(map);

// Add code to create a marker for each city below and add it to the map
// Loop through the cities array and create one marker for each city.
cities.forEach(function(cities) {
  console.log(cities)
 });
 var cities = [{  location: [40.7128, -74.0059],  name: "New York",  population: "8,550,405"}]
//  {  location: [40.7128, -74.0059],  name: "New York",  population: "8,550,405"},
//  {  location: [40.7128, -74.0059],  name: "New York",  population: "8,550,405"},]
 console.log(cities)





// newyork;
// chicago;
// houston;
// la;
// omaha;
