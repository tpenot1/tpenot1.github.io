let mymusicmap = L.map(musicmap).setView([35.478968, -86.05962], 10)

let basemapUrl = ('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}')
L.tileLayer(basemapUrl).addTo(mymusicmap)

let place = L.marker([35.475468	, -86.04633]).addTo(mymusicmap)

let polygon = L.polygon([
  [35.469177, -86.054055],
  [35.476622, -86.059334],
  [35.477251, -86.044743]
]).addTo(mymusicmap)
