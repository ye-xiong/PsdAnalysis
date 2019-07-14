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
    return psd.tree().export()
  }
}

export default ReadPath
