const { dialog } = require('electron').remote
class openFolder {
  static open () {
    return new Promise((resolve, reject) => {
      dialog.showOpenDialog({ properties: ['openFile', 'openDirectory'] }, (filePaths) => {
        resolve(filePaths[0])
      })
    })
  }
}

export default openFolder
