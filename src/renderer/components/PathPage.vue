<template>
  <div id="path-page" @dragleave="dragleave" @dragstart="drag($event)" @dragover="drag($event)"  @drop="onDrop($event)">
    <div class="path-input">
       <el-input placeholder="请输入要分析的文件或者文件夹路径" v-model="pathInput" class="input-with-select">
        <el-button slot="append" icon="el-icon-folder-opened" @click="openFolder"></el-button>
      </el-input>
      <div class="input-error-tip" v-if="errorTipStatus">请输入正确路径或拖拽文件或文件夹到本页面</div>
      <el-button type="primary"  class="start-btn" :disabled="startStatus">开始分析</el-button>
    </div>
  </div>
</template>
<script>
import fs from 'fs'
import OpenFolder from '../tool/OpenFolder'
export default {
  name: 'path-page',
  data () {
    return {
      pathInput: ''
    }
  },
  computed: {
    startStatus () {
      return !fs.existsSync(this.pathInput)
    },
    errorTipStatus () {
      return this.pathInput === '' || !fs.existsSync(this.pathInput)
    }
  },
  methods: {
    async  openFolder () {
      let folder = await OpenFolder.open()
      if (folder) {
        this.pathInput = folder
      }
    },
    dragleave () {
      this.pathInput = ''
    },
    drag (event) {
      event.preventDefault()
    },
    onDrop (event) {
      this.pathInput = event.dataTransfer.files[0].path
      event.preventDefault()
    }
  }
}
</script>
<style lang="scss">
html,body,#app,.el-tabs,#home-page,#pane-path {
  margin: 0px;
  height: 100%;
}
.el-tabs__content{
  height: calc(100% - 60px);
}
#path-page {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  .path-input {
    width: 900px;
    margin-top: -130px;
  }
  .input-error-tip{
    font-size: 12px;
    color: red;
    margin-top: 10px;
  }
  .start-btn {
    display: block;
    width: 180px;
    margin: 0 auto;
    margin-top: 20px;
  }
}
</style>


