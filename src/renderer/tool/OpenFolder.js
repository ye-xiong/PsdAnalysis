import electron from 'electron'
class openFolder {
  static open () {
    return new Promise((resolve, reject) => {
      electron.remote.dialog.showOpenDialog({ properties: ['openFile', 'openDirectory'] }, (filePaths) => {
        resolve(filePaths[0])
      })
    })
  }
}

export default openFolder
