<!--  -->
<template>
  <div>
    <el-cascader
      v-model="value"
      :options="options"
      :props="{ expandTrigger: 'hover' }"
      @change="handleChange"
    />
  </div>
</template>

<script>
import { data } from './configdata'
export default {
  data() {
    return {
      // options: data,
      value: '',
      options: []
    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created() {
    this.options = data
  },
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted() {

  },
  methods: {
    handleChange(value) {
      console.log(value)
    }
  }
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>
