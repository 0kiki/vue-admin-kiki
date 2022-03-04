<!--  -->
<template>
  <div>
    <el-checkbox-group v-model="checkList">
      <el-checkbox v-for="item in checkLists" :key="item.id" :label="item.id" :disabled="item.disabled">{{ item.label }}</el-checkbox>
    </el-checkbox-group>
    <el-button @click="getValue"> 获取值</el-button>
    <el-button @click="unUse"> 禁用3</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkList: [],
      checkLists: [
        { label: '复选框1', id: 1, disabled: false },
        { label: '复选框2', id: 2, disabled: true },
        { label: '复选框3', id: 3, disabled: true },
        { label: '复选框4', id: 4, disabled: true }
      ]
    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created() {

  },
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted() {

  },
  methods: {
    getValue() {
      // console.log(this.checkList)
      // console.log(this)
      this.checkLists.map((item) => {
        item.disabled = false
      })
    },
    unUse() {
      this.checkLists.map((item) => {
        if (item.id === 3) {
          item.disabled = true
        }
      })
    }
  }
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>
