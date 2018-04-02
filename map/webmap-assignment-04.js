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

let stateOptions = {
  style: stateStyle
}
L.geoJSON(stateDemographics, stateOptions).addTo(statemap)
