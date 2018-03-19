let mymap = L.map('webmap1').setView([30.411701, -91.184524], 12)
let basemapUrl = ('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}')
L.tileLayer(basemapUrl).addTo(mymap)
let place = L.marker([30.411701, -91.184524]).addTo(mymap)
let polygon = L.polygon([
  [30.418511, -91.193793],
  [30.41977, -91.177256],
  [30.38919, -91.189916]
]).addTo(mymap)
var latlngs = [
  [30.412072, -91.183693],
  [30.40652, -91.187427]
]
var polyline = L.polyline(latlngs, {color: 'red'}).addTo(mymap)

place.bindPopup('Baton Rouge, LA - Louisiana State University')
polygon.bindPopup('LSU and surrounding roads - River Rd. to Highland Rd. to Brightside Ln.')
polyline.bindPopup('Tiger Stadium to Alex Box Stadium')

function logCurrentCoordinates (event) {
  console.log('You clicked the map at ' + event.latlng)
}

mymap.on('click', function (event) {
  console.log('You clicked the map at ' + event.latlng)
})
