<!--  -->
<template>
  <div>
    <el-form :inline="true" :model="formInline.template" :rules="rules" class="demo-form-inline">
      <el-row>
        <el-col :span="8">
          <el-form-item label="审批人" prop="user">
            <el-input v-model="formInline.template.user" placeholder="审批人" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="活动区域" prop="region">
            <el-select v-model="formInline.template.region" placeholder="活动区域">
              <el-option label="区域一" value="shanghai" />
              <el-option label="区域二" value="beijing" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">

          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        pageNum: 1,
        pageSize: 10,
        template: {
          user: '',
          region: ''
        }
      },
      rules: {
        user: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ]
      }

    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created() {

  },
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted() {

  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>
