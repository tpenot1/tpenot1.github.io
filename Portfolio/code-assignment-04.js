let projectArray = [
  1,
  'https://www.arcgis.com/apps/MapTour/index.html?appid=58b54e7b9cfd45498d2c8ae68ee80dde',
  'Story Map of Arlington Virginia',
  true,
  ['story map','GEOG 4046','book assignment 1',]
]

let projectObject = {
  id: 1,
  url: 'https://www.arcgis.com/apps/MapTour/index.html?appid=58b54e7b9cfd45498d2c8ae68ee80dde',
  title: 'Story Map of Arlington Virginia',
  hasThumbnail: true,
  keywords: ['story map','GEOG 4046','book assignment 1',]
}

console.log(projectArray[2])

console.log(projectObject["title"])
console.log(projectObject.title)
