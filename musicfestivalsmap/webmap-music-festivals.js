let mymusicmap = L.map(musicmap).setView([39, -98], 4)

let natgeoBasemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}').addTo(mymusicmap)
let imageryBasemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}')
let shadedBasemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}')

let myBasemaps = {
  'National Geographic Basemap': natgeoBasemap,
  'Satellite Basemap': imageryBasemap,
  'Shaded Relief Basemap': shadedBasemap
}

L.control.layers(myBasemaps).addTo(mymusicmap)

let place = L.marker([35.471086, -86.050562]).addTo(mymusicmap)

let polygon = L.polygon([
  [35.468729, -86.054541],
  [35.467925, -86.045142],
  [35.478305, -86.049519]
]).addTo(mymusicmap)

place.bindPopup('Bonnaroo Music and Arts Festival, Manchester, Tennessee')

let place2 = L.marker([39.198602, -75.524604]).addTo(mymusicmap)

let polygon2 = L.polygon([
  [39.197255, -75.529196],
  [39.201146,-75.525677],
  [39.197354,-75.522909]
]).addTo(mymusicmap)

place2.bindPopup('Firefly Music Festival, Dover, Delaware')

let place3 = L.marker([30.267374, -97.768031]).addTo(mymusicmap)

let polygon3 = L.polygon([
  [30.265891, -97.771915],
  [30.266781, -97.763332],
  [30.269301, -97.768782]
]).addTo(mymusicmap)

place3.bindPopup('Austin City Limits Music Festival, Austin, Texas')

let place4 = L.marker([30.248559, -87.689735]).addTo(mymusicmap)

let polygon4 = L.polygon([
  [30.246909, -87.688909],
  [30.24917, -87.687933],
  [30.247845, -87.693501]
]).addTo(mymusicmap)

place4.bindPopup('Hangout Music Festival, Gulfshores, Alabama')

let place5 = L.marker([29.989736, -90.090748]).addTo(mymusicmap)

let polygon5 = L.polygon([
  [29.988045, -90.089117],
  [29.988797, -90.092926],
  [29.990962, -90.090244]
]).addTo(mymusicmap)

place5.bindPopup('Voodoo Music Experience, New Orleans, Louisiana')
