<template>
  <el-dialog id="layers-dialig" :title="title" :visible.sync="dialogTableVisible" width="80%">
    <el-table :data="layers">
      <el-table-column property="name" label="图层名" width="200"></el-table-column>
      <el-table-column property="width" label="图层宽" width="200" align="center"></el-table-column>
      <el-table-column property="height" label="图层高" align="center"></el-table-column>
      <el-table-column property="opacity" label="透明度" align="center"></el-table-column>
      <el-table-column property="visible" label="是否为可见图层" align="center">
        <template slot-scope="scope">
          <span>{{visible(scope.$index)}}</span>
        </template>
      </el-table-column>
    </el-table>
  </el-dialog>
</template>
<script>
export default {
  data () {
    return {
      dialogTableVisible: false,
      layers: [],
      fpath: ''
    }
  },
  computed: {
    title () {
      return `${this.fpath}的各图层详情`
    }
  },
  methods: {
    open (data, fpath) {
      this.dialogTableVisible = true
      this.layers = data
      this.fpath = fpath
    },
    visible (index) {
      let temp = this.layers.visible
      let re = temp ? '是' : '否'
      return re
    }
  }
}
</script>
<style lang="scss">
#layers-dialig {
  display: flex;
  justify-content: center;
  align-items: center;
  .el-dialog{
    margin-top: 0px!important;
    margin-bottom: 0px!important;
  }
  .el-dialog__body {
    padding-top: 0px;
  }
  .el-table__body-wrapper {
    height: 300px!important;
    overflow-y: auto!important;
  }
}
</style>


