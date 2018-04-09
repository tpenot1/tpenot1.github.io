let mymap = L.map('webmap4').setView([39, -98], 4)
mymap.on('click', function (event) {
  console.log('You clicked the map at ' + event.latlng)
})

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}').addTo(mymap)
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
