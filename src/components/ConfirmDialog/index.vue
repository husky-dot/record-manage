<!-- 确认对话框 -->
<template>
  <div class="confirm-container">
    <el-dialog
      :title="title"
      :show="show"
      :visible.sync="visible"
      width="30%"
      @close="$emit('update:show', false);"
    >
      <span>{{ content }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="visible = false">取 消</el-button>
        <el-button type="primary" @click="handleConfirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '提示'
    },
    content: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      visible: this.show
    }
  },
  watch: {
    show() {
      this.visible = this.show;
    }
  },
  methods: {
    handleConfirm() {
      this.$emit('handleConfirm');
      this.visible = false;
    }
  }
}
</script>

<style scoped lang="scss">
</style>
