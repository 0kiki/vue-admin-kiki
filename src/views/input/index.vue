<!--  -->
<template>
  <div>
    <el-row>
      <el-col :span="10">
        <el-input v-model="input" placeholder="请输入内容" clearable />
      </el-col>
      <el-button @click="commitInt">提交</el-button>
    </el-row>

  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ''
    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created() {

  },
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted() {

  },
  methods: {
    commitInt() {
      console.log(this.input)
    }
  }
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>
