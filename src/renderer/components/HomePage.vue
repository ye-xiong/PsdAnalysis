<template>
  <div id="home-page">
    <el-tabs v-model="activeName">
      <el-tab-pane label="路径设置" name="path">
        <path-page></path-page>
      </el-tab-pane>
      <el-tab-pane label="表格分析" name="table">
        <table-page></table-page>
      </el-tab-pane>
      <el-tab-pane label="显示属性设置" name="setting">
        <setting-page></setting-page>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import TablePage from './TablePage'
import SettingPage from './SettingPage'
import PathPage from './PathPage'
export default {
  name: 'home-page',
  components: {
    TablePage,
    PathPage,
    SettingPage
  },
  data () {
    return {
      activeName: 'path'
    }
  }
}
</script>

