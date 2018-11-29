<!-- -->
<template>
  <div class="log-page">
    <!-- 头部搜索 -->
    <filter-header />

    <div class="list-container">
      <div class="rec-msg">共搜索到 922 条数据</div>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column prop="title" label="" width="100" >
          <template slot-scope="scope">
            <div :class="{'green': scope.row.operCode === 1, 'red': scope.row.operCode === 0}" class="point-wrapper">
              <div class="point" />
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="title" label="文件名称" />
        <el-table-column prop="person" label="操作人" width="100" />
        <el-table-column prop="date" label="操作时间" width="160"/>
        <el-table-column prop="operType" label="操作类型" width="100" />
        <el-table-column prop="operCon" label="操作内容" width="200"/>
        <el-table-column prop="operRes" label="操作结果" width="100">
          <template slot-scope="scope">
            <span :class="{ 'green': scope.row.operCode === 1, 'red': scope.row.operCode === 0 }" class="tb-res">{{ scope.row.operRes }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="mark" label="备注" />
      </el-table>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import FilterHeader from '@/components/FilterHeader/index'
export default {
  components: {
    FilterHeader
  },
  data() {
    return {
      tableData: [{
        title: '泉州港水运工程.......',
        person: '小陈',
        date: '2018-09-21  08:50:08',
        operType: '转发',
        operCon: '转发给“用户”',
        operRes: '成功',
        operCode: 1,
        mark: '这是备注描述内容'
      }, {
        title: '泉州港水运工程.......',
        person: '小陈',
        date: '2018-09-21  08:50:08',
        operType: '转发',
        operCon: '删除',
        operRes: '失败',
        operCode: 0,
        mark: '这是备注描述内容'
      }, {
        title: '泉州港水运工程.......',
        person: '小陈',
        date: '2018-09-21  08:50:08',
        operType: '下载',
        operCon: '下载文档',
        operRes: '成功',
        operCode: 1,
        mark: '这是备注描述内容'
      }, {
        title: '泉州港水运工程.......',
        person: '小陈',
        date: '2018-09-21  08:50:08',
        operType: '编辑',
        operCon: '新增“修订内容”',
        operRes: '成功',
        operCode: 1,
        mark: '这是备注描述内容'
      }, {
        title: '泉州港水运工程.......',
        person: '小陈',
        date: '2018-09-21  08:50:08',
        operType: '作废',
        operCon: '作废文档',
        operRes: '成功',
        operCode: 1,
        mark: '这是备注描述内容'
      }]
    }
  }
}
</script>

<style scoped lang="scss">
  .log-page{
    min-height: calc(100vh - 50px);
    background-color: #fff;
    /deep/ .el-table .cell, .el-table th div{
      overflow: visible !important;
    }
  }
  .rec-msg{
    font-size: 13px;
    color: #999;
    margin: 20px 0;
  }
  .list-container{
    padding: 16px;
  }
  .tb-res{
    position: relative;
    &::before{
      content: '';
      position: absolute;
      left: -10px;
      top:6px;
      width: 4px;
      height: 4px;
    }
  }
  .point-wrapper{
    &.green{
      background: #2eba07;
    }
    &.red{
      background: #f04134;
    }
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    &::after{
      content: '';
      position: absolute;
      height: 28px;
      width: 1px;
      background: #ebebeb;
      bottom: -35px;
      z-index: 2;
    }
    .point{
      width: 6px;
      height: 6px;
      background: #fff;
      border-radius: 50%
    }
  }
  .green{
    &::before{
      background: #2eba07;
    }
  }
  .red{
    color: #fe5500;
    &::before{
      background: #f04134;
    }
  }
</style>
