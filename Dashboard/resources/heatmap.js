// Function to determine marker size based on population
const url = "http://127.0.0.1:5000/Dashboard/data";

d3.json(url).then(function (data) {
    console.log(data);
});

const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);
dataPromise.then((data) => {
    console.log(data)
});

//function fatalitymarkerSize(fatalities) {
// return fatalities * 40;
//}

// An array containing all of the information needed to create city and state markers
//let locations = [{

//}];

// Define arrays to hold created city and state markers
//let crashsiteMarkers = [];
//let fatalityMarkers = [];

// Loop through locations and create city and state markers
//for (let i = 0; i < locations.length; i++) {
// Setting the marker radius for the state by passing population into the markerSize function
//   stateMarkers.push(
//      L.circle(locations[i].coordinates, {
//         stroke: false,
//         fillOpacity: 0.75,
//         color: "white",
//         fillColor: "white",
//         radius: crashmarkerSize(locations[i].state.population)//replace with number of crashes in location
//     })
// );

// Setting the marker radius for the city by passing population into the markerSize function
//  cityMarkers.push(
//      L.circle(locations[i].coordinates, {
//          stroke: false,
//         fillOpacity: 0.75,
//         color: "purple",
//         fillColor: "purple",
//         radius: fatalitymarkerSize(locations[i].city.population)// Replace with fatalities
//      })
//  );
//}

// Create base layers

// Streetmap Layer
// let streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//     attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//     tileSize: 512,
//     maxZoom: 18,
//     zoomOffset: -1,
//     id: "mapbox/streets-v11",
//     accessToken: API_KEY
// });

// let darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//     attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//     maxZoom: 18,
//     id: "dark-v10",
//     accessToken: API_KEY
// });

// let lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//     attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//     maxZoom: 18,
//     id: "light-v10",
//     accessToken: API_KEY
// });


// // Create two separate layer groups: one for crashes and one for fatalities
// let fatalities = L.layerGroup(stateMarkers);
// let crashes = L.layerGroup(cityMarkers);

// // Create a baseMaps object
// let baseMaps = {
//     "Street Map": streetmap,
//     "Dark Map": darkmap,
//     "Light Map": lightmap,
// };

// // Create an overlay object
// let overlayMaps = {
//     "State Population": fatalities,
//     "City Population": crashes
// };

// // Define a map object
// let myMap = L.map("map", {
//     center: [37.09, -95.71],
//     zoom: 5,
//     layers: [darkmap, crashes, fatalities]
// });

// // Pass our map layers into our layer control
// // Add the layer control to the map
// L.control.layers(baseMaps, overlayMaps, {
//     collapsed: true
// }).addTo(myMap);