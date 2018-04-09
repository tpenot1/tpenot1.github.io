let mymap = L.map('webmap3').setView([30.411701, -91.184524], 12)

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}').addTo(mymap)

let pick = L.icon({
  iconUrl: '/map/leaf-green.png',
  iconSize: [43, 50],
  iconAnchor: [43, 50],
  popupAnchor: [-22, -27]
})

let marker = L.marker([30.411701, -91.184524], { icon: pick }).addTo(mymap)

let polygonCorners = [
  [30.418511, -91.193793],
  [30.41977, -91.177256],
  [30.38919, -91.189916]
]

let polygonStyle = {
  color: 'blue',
  fillColor: 'red'
}

let polygon = L.polygon(polygonCorners, polygonStyle).addTo(mymap)

polygon.bindPopup('Baton Rouge, LA - Louisiana State University')
marker.bindPopup('LSU and surrounding roads - River Rd. to Highland Rd. to Brightside Ln.')

mymap.on('click', function (event) {
  console.log('You clicked the map at ' + event.latlng)
})
