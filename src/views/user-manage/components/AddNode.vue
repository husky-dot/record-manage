<template>
  <el-dialog
    :title="title"
    :show="show"
    :visible.sync="visible"
    width="40%"
    @close="$emit('update:show', false);"
  >
    <el-form ref="addForm" :rules="rules" :model="addForm" label-width="100px" size="mini">
      <el-form-item label="编号：" prop="id">
        <el-input v-model="addForm.id" placeholder="请输入编号" />
      </el-form-item>
      <el-form-item label="名称：" prop="label">
        <el-input v-model="addForm.label" placeholder="请输入名称" />
      </el-form-item>
      <el-form-item label="类型：" prop="typeId">
        <el-select v-model="addForm.typeId" placeholder="角色/分组">
          <el-option label="主任" value="4" />
          <el-option label="副主任" value="5" />
          <el-option label="工作人员" value="6" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('addForm')">新增</el-button>
        <el-button @click="resetForm('addForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '添加节点'
    }
  },
  data() {
    return {
      visible: this.show,
      addForm: {
        id: null,
        label: '',
        typeId: null
      },
      rules: {
        id: [
          { required: true, message: '编号不能为空', trigger: 'blur' }
        ],
        label: [
          { required: true, message: '名称不能为空', trigger: 'blur' }
        ],
        typeId: [
          { required: true, message: '类型不能为空', trigger: 'change' }
        ]
      }
    }
  },
  watch: {
    show() {
      alert('aa')
      this.visible = this.show;
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit('handleAddNode', this.addForm);
          this.visible = false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scope lang="scss">

</style>
