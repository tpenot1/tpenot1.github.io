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
  console.log(describeTitle (projects[i].title))
}

function describeTitle (title) {
  if (title !== '') {
    let message = 'The title of this assignment is ' + title
    return message
  }
}

$(document).ready(console.log('The page is ready'))
