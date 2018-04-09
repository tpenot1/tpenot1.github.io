let mymap = L.map('webmap3').setView([30.411701, -91.184524], 12)

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}').addTo(mymap)

let myGreenIcon = L.icon({
  iconUrl: 'leaf-green.png',
  shadowUrl: 'leaf-shadow.png',
  iconSize: [25, 70],
  shadowSize: [50, 64],
  iconAnchor: [22, 94],
  shadowAnchor: [4, 62],
  popupAnchor: [-3, -76]
})

let marker = L.marker([30.411701, -91.184524], { icon: myGreenIcon }).addTo(mymap)

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

polygon.bindPopup('LSU surrounding roads - Highland Rd., River Road, & Brightside Dr.')
marker.bindPopup('Baton Rouge, LA - Louisiana State University')

mymap.on('click', function (event) {
  console.log('You clicked the map at ' + event.latlng)
})
