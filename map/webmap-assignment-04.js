let statemap = L.map('webmap4').setView([39, -98], 4)

let basemapUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
L.tileLayer(basemapUrl).addTo(statemap)

let stateStyle = function (state) {
  let age = state.properties.MED_AGE
  let stateColor = 'Olive'
  if (age < 38) {
    stateColor = 'Green'
  }
  let formatting = {
    color: stateColor,
    weight: 1,
    fillOpacity: 0.3
  }
  return formatting
}
let createPopup = function (state, layer) {
  let name = state.properties.STATE_NAME
  let age = state.properties.MED_AGE
  layer.bindPopup('Median age of ' + name + ': ' + age + '<br>National average: 38')
}

let stateOptions = {
  style: stateStyle,
  onEachFeature: createPopup
}
L.geoJSON(stateDemographics, stateOptions).addTo(statemap)
