<!--  -->
<template>
  <div>
    <el-radio-group v-model="radio" @change="changeValue">
      <el-radio v-for="item in radioLists" :key="item.id" :label="item.id">{{ item.name }}</el-radio>
    </el-radio-group>
    <el-row>
      <el-col><el-button @click="getRdo">获取radio的值</el-button></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: 3,
      radioLists: [
        { id: 1, name: '备选1' },
        { id: 2, name: '备选2' },
        { id: 3, name: '备选3' },
        { id: 4, name: '备选4' }
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
    getRdo() {
      console.log(this.radio)
    },
    changeValue(val) {
      console.log(val)
    }
  }
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>
