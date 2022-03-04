<!--  -->
<template>
  <div>
    <el-button type="success" @click="btnClick">默认按钮</el-button>
    <el-button type="success" @click="btnLoad">取消按钮</el-button>
    <el-button type="warning" round :disabled="disabled">禁用按钮</el-button>
    <el-button type="warning" round :loading="loading">loading按钮</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      disabled: true,
      loading: true

    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created() {

  },
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted() {

  },
  methods: {
    btnClick() {
      // if (this.disabled) {
      //   this.disabled = false
      // } else {
      //   this.disabled = !this.disabled
      // }

      this.disabled = !this.disabled
    },
    btnLoad() {
      setTimeout(() => {
        this.loading = false
      }, 3000)
    }
  }
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>
