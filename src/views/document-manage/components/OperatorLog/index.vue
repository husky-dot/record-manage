<template>
  <el-dialog
    :title="title"
    :show="show"
    :visible.sync="visible"
    width="40%"
    @close="$emit('update:show', false);"
  >
    <el-table :data="gridData">
      <el-table-column property="title" label="文件名称" />
      <el-table-column property="person" label="操作人" width="100" />
      <el-table-column property="date" label="操作时间" width="160" />
      <el-table-column property="operType" width="100" label="操作类型" />
      <el-table-column property="operContent" label="操作内容" />
    </el-table>
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
      innerVisible: false,
      gridData: [
        {
          title: '泉州港水运工程.......',
          person: '小陈',
          date: '2018-05-02 08:50:08',
          operType: '新增',
          operContent: '操作内容描述'
        },
        {
          title: '泉州港水运工程2.......',
          person: '小智',
          date: '2018-05-02 10:50:08',
          operType: '删除',
          operContent: '操作内容描述'
        },
        {
          title: '泉州港水运工程3.......',
          person: '小陈',
          date: '2018-01-02 10:50:08',
          operType: '新增',
          operContent: '操作内容描述'
        },
        {
          title: '泉州港水运工程4.......',
          person: '小智',
          date: '2018-05-02 10:50:08',
          operType: '删除',
          operContent: '操作内容描述'
        },
        {
          title: '泉州港水运工程5.......',
          person: '小陈',
          date: '2018-01-02 10:50:08',
          operType: '新增',
          operContent: '操作内容描述'
        }
      ]
    }
  },
  watch: {
    show() {
      this.visible = this.show;
    }
  }
}
</script>

<style scope lang="scss">

</style>
