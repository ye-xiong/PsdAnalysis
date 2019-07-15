import fs from 'fs'
import path from 'path'
import PSD from 'psd'
class ReadPath {
  static read (fpath) {
    let stat = fs.statSync(fpath)
    let isFile = stat.isFile()
    let re = null
    if (isFile) {
      re = []
      re.push(ReadPath.readFile(fpath))
    } else {
      re = ReadPath.readFolder(fpath)
    }
    re = re.filter(Boolean)
    return re
  }
  static readFile (filePath) {
    let extname = path.extname(filePath)
    let re = null
    if (extname === '.psd') {
      re = this.readPsd(filePath)
    }
    return re
  }
  static readFolder (folderPath) {
    let fileList = fs.readdirSync(folderPath)
    let re = []
    fileList.forEach((fileName) => {
      let file = path.join(folderPath, fileName)
      let psdObj = this.readFile(file)
      re.push(psdObj)
    })
    return re
  }
  static readPsd (file) {
    let psd = PSD.fromFile(file)
    psd.parse()
    let psdObj = psd.tree().export()
    let stat = fs.statSync(file)
    let fileSize = this.formatFileSize(stat.size)
    console.log('fileSize', fileSize)
    console.log('stat', stat)
    let temp = {
      path: file,
      fileSize: fileSize,
      layerNum: psdObj.children.length,
      width: psdObj.document.width,
      height: psdObj.document.height,
      layers: psdObj.children
    }
    return temp
  }
  static formatFileSize (fileSize) {
    if (fileSize < 1024) {
      return fileSize + 'B'
    } else if (fileSize < (1024 * 1024)) {
      let temp = fileSize / 1024
      temp = temp.toFixed(2)
      return temp + 'KB'
    } else if (fileSize < (1024 * 1024 * 1024)) {
      let temp = fileSize / (1024 * 1024)
      temp = temp.toFixed(2)
      return temp + 'MB'
    } else {
      let temp = fileSize / (1024 * 1024 * 1024)
      temp = temp.toFixed(2)
      return temp + 'GB'
    }
  }
}

export default ReadPath
