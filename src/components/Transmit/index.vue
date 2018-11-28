<template>
  <el-dialog
    :title="title"
    :show="show"
    :visible.sync="visible"
    width="20%"
    @close="$emit('update:show', false);"
  >
    <div class="dialog-body">
      <el-input v-model="filterText" size="small" placeholder="输入关键字进行过滤" />

      <el-tree
        ref="tree2"
        :data="data2"
        :props="defaultProps"
        :filter-node-method="filterNode"
        class="filter-tree"
        node-key="id"
        show-checkbox
        default-expand-all
      />
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button size="small" @click="visible = false">取 消</el-button>
      <el-button type="primary" size="small" @click="handleConfirm">确 定</el-button>
    </div>
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
      default: '提示'
    }
  },
  data() {
    return {
      visible: this.show,
      filterText: '',
      data2: [{
        id: 1,
        label: '办公室',
        children: [{
          id: 4,
          label: '主任',
          children: [{
            id: 9,
            label: '小智'
          }]
        },
        {
          id: 4,
          label: '副主任',
          children: [
            {
              id: 9,
              label: '小智'
            }
          ]
        },
        {
          id: 4,
          label: '工作人员',
          children: [
            {
              id: 9,
              label: '陈小龙'
            },
            {
              id: 9,
              label: '琳姐'
            }
          ]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  watch: {
    show() {
      this.visible = this.show;
    },
    filterText(val) {
      this.$refs.tree2.filter(val);
    }
  },
  methods: {
    handleConfirm() {
      this.$emit('handleConfirm');
      this.visible = false;
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    }
  }
}
</script>

<style scope lang='scss'>
  .dialog-body{
    input{
      margin-bottom: 15px;
    }
  }
</style>
