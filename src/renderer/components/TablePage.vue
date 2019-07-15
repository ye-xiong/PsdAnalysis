<template>
  <div id="table-page">
    <el-table
      :data="psdList"
      style="width: 100%"
      stripe>
      <el-table-column
        prop="path"
        label="文件路径"
        sortable
        width="450">
      </el-table-column>
      <el-table-column
        prop="fileSize"
        label="文件大小"
        sortable
        width="200"
        align="center">
      </el-table-column>
      <el-table-column
        sortable
        prop="layerNum"
        label="图层总数"
        width="200"
        align="center">
      </el-table-column>
      <el-table-column
        prop="width"
        label="文档宽度"
        sortable
        width="200"
        align="center">
      </el-table-column>
      <el-table-column
        sortable
        prop="height"
        label="文档高度"
        width="200"
        align="center">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="200"
        align="center">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="showMore(scope.$index)"
            type="text"
            size="small">
            查看各图层详情
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-table>
  <layers-dialog ref="layersDialog"></layers-dialog>
  </div>
</template>
<script>
import LayersDialog from './LayersDialog'
export default {
  data () {
    return {
      currentFileLayers: []
    }
  },
  components: {
    LayersDialog
  },
  name: 'table-page',
  computed: {
    psdList () {
      return this.$store.state.ReadStore.psdList
    }
  },
  methods: {
    showMore (index) {
      this.$refs.layersDialog.open(this.psdList[index].layers, this.psdList[index].path)
    }
  }
}
</script>
<style lang="scss">
#table-page {
  padding: 10px;
  .text-center {
    text-align: center;
  }
}
</style>
