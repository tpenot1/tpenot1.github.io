let projects = []

projects[0] = {
  id: 1,
  url: 'https://www.arcgis.com/apps/MapTour/index.html?appid=58b54e7b9cfd45498d2c8ae68ee80dde',
  title: 'Story Map of Arlington, Virginia',
  hasThumbnail: true,
  keywords: ['story map','Arlington','Virginia','book assignment 1',]
}

projects[1]= {
  id: 2,
  url: 'http://www.arcgis.com/apps/View/index.html?appid=99f1593a2a3841d29dd76e070e34bed2',
  title: "Real-time earthquakes map",
  hasThumbnail: true,
  keywords: ['real-time','earthquakes','book assignment 2']
}

for (let i = 0; i < projects.length; i++) {
  if (projects[i].thumb)
    console.log('book-assignment-' + projects[i].id + '.png')
}

function describeFruit (fruit) {
  let myfavfruit = 'apple'
  let description = describeFruit(myfavfruit)
  console.log(description)
}

function createTitle (i) {
  return projects[i].title
}

function createImageSrc (i) {
  if (projects[i].thumb === true) {
    return 'images/book-assignment-' + projects[i].id + '.png'
  } else {
    return 'images/no-preview.png'
  }
}
