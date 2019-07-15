<template>
  <div id="home-page">
    <el-tabs v-model="activeName">
      <el-tab-pane label="路径设置" name="path">
        <path-page @finished="finished"></path-page>
      </el-tab-pane>
      <el-tab-pane label="表格分析" name="table" :disabled="tableDisable">
        <table-page></table-page>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import TablePage from './TablePage'
import PathPage from './PathPage'
export default {
  name: 'home-page',
  components: {
    TablePage,
    PathPage
  },
  data () {
    return {
      activeName: 'path',
      tableDisable: true
    }
  },
  methods: {
    finished () {
      this.tableDisable = false
      this.activeName = 'table'
    }
  }
}
</script>

