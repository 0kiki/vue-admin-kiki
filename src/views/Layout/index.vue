<!--  -->
<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content bg-purple-dark" /></el-col>
      <el-col :span="12"><div class="grid-content bg-purple-dark" /></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content bg-purple" /></el-col>
      <el-col :span="6" :offset="6"><div class="grid-content bg-purple" /></el-col>
    </el-row>
  </div>

</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {

    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created() {
    // console.log('router', this.$router)
    // console.log('route', this.$route)
  },
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    // console.log('router', this.$router)
    // console.log('route', this.$route)
  },
  methods: {
    commitBtn() {
      // this.$router.push({ path: '/upload' })
      // this.$router.push({
      //   path: '/upload',
      //   query: { name: 'upload' }
      // })
      this.$router.push({
        name: 'Upload',
        params: {
          username: 'kikiki'
        }
      })
    }
  }

}
</script>
<style lang="scss" scoped>
/* @import url(); 引入css类 */
 .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

</style>
