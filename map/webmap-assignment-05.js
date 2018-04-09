let mymap = L.map('webmap5').setView([39, -98], 4)
mymap.on('click', function (event) {
  console.log('You clicked the map at ' + event.latlng)
})

let natgeoBasemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}').addTo(mymap)
let imageryBasemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}')
let shadedBasemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}')

let myBasemaps = {
  'National Geographic Basemap': natgeoBasemap,
  'Satellite Basemap': imageryBasemap,
  'Shaded Relief Basemap': shadedBasemap
}

L.control.layers(myBasemaps).addTo(mymap)

function myStyle (feature) {
  let age = feature.properties.AGE_20_24
  let color = 'Blue'
  if (age > 300000) {
    color = 'Red'
  }
let myStyle = {
  color: color,
  weight: 1,
  fillOpacity: 0.2
}
  return myStyle
}
function myPopup (feature, layer) {
  let name = feature.properties.STATE_NAME
  let age = feature.properties.AGE_20_24
  layer.bindPopup('People aged 20-24 ' + name + ': ' + age + '<br>National average: 200000')
}
let myOptions = {
  style: myStyle,
  onEachFeature: myPopup
}
L.geoJSON(stateDemographics, myOptions).addTo(mymap)
