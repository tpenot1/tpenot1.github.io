let mymap = L.map('webmap3').setView([30.411701, -91.184524], 12)

let url = ('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}')
L.tileLayer(url).addTo(mymap)

let pick = L.icon({
  iconUrl:
  shadowUrl:
  iconSize:
  shadowSize:
  iconAnchor:
  shadowAnchor:
  popupAnchor:
})

let markerCoords = [30.411701, -91.184524]
let markerOptions = {
  icon: pick
}
let station = L.marker(markerCoords, markerOptions).addTo(mymap)

let polygonCoords = [
  [30.418511, -91.193793],
  [30.41977, -91.177256],
  [30.38919, -91.189916]
]

let polygonStyle = {
  color: 'orange',
  fullColor: 'yellow',
  weight: 1,
  dashArray: 3
}
