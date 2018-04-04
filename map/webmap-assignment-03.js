let mymap = L.map('webmap3').setView([30.411701, -91.184524], 12)

let.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}').addTo(mymap)

let greenIcon = L.icon({
  iconUrl: 'images/leaf-green.png',
  shadowUrl: 'images/leaf-green.png',
  iconSize: [38, 95],
  shadowSize: [50, 64],
  iconAnchor: [22, 94],
  shadowAnchor: [4, 62]
  popupAnchor: [-3, -76]
})

let marker = L.marker([30.411701, -91.184524], { icon: greenIcon }).addTo(mymap)

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
}
