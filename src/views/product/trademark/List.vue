<template>
  <div>
    <div>
      <el-button type="primary" icon="el-icon-plus">添加</el-button>
    </div>
    <div>
      <el-table
        ref="singleTable"
        :data="tableData"
        highlight-current-row
        style="width: 100%; margin: 20px 0"
        border
      >
        <!-- 如果列有固定宽度 其余未给宽度的会被均分 需要几列就复制几列   -->
        <!-- label-每列的名称 align 把文字居中 type=index 序号会自动添加 -->
        <el-table-column type="index" label="序号" width="80" align="center" />
        <el-table-column prop="title" label="品牌名称" />
        <el-table-column prop="status" label="品牌logo" />
        <el-table-column prop="pageviews" label="操作" />
      </el-table>
    </div>
    <div>
      <!-- 让分页居中 text-align: center -->
      <el-pagination
        style="text-align: center"
        current-page.sync="3"
        :page-size="100"
        layout="prev, pager, next, jumper"
        :total="1000"
      />
    </div>
  </div>
</template>

<script>
import { getData } from '@/api/product/trademark'
export default {
  name: 'Trademark',
  data() {
    return {
      tableData: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      // const responsebody = await getData()
      // console.log(responsebody)
      // this.tableData = items
      const { data: { items }} = await getData()
      this.tableData = items
    }
  }
}
</script>

<style lang="scss" scoped></style>
