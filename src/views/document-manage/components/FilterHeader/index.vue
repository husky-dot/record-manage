<template>
  <el-collapse v-model="activeNames">
    <el-collapse-item name="1">
      <template slot="title">
        <div class="collapse-title"> 文件查找</div>
      </template>
      <div class="collapse-container">
        <el-form :inline="true" :model="formFitler" class="demo-form-inline">
          <el-form-item label="文件">
            <el-select v-model="formFitler.fileSource" placeholder="请选择文件来源">
              <el-option label="全部" value="0" />
              <el-option label="部分" value="1" />
            </el-select>
          </el-form-item>

          <el-form-item label="文件状态">
            <el-select v-model="formFitler.fileStatus" placeholder="请选择文件来源">
              <el-option label="全部" value="0" />
              <el-option label="部分" value="1" />
            </el-select>
          </el-form-item>

          <el-form-item label="文件关键字">
            <el-input v-model="formFitler.fileKeyworld" placeholder="请输入" />
          </el-form-item>

          <el-form-item label="创建人">
            <el-input v-model="formFitler.fileKeyworld" placeholder="请输入" />
          </el-form-item>

          <el-form-item label="文件时间">
            <el-date-picker
              v-model="formFitler.fileTime"
              :picker-options="pickerOptions2"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="~"
              start-placeholder="开始日期"
              end-placeholder="结束日期"/>
          </el-form-item>
          <el-form-item class="filter-item-center">
            <el-button type="primary" @click="searchForm('ruleForm')">搜索</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>
<script>
export default {
  data() {
    return {
      pickerOptions2: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      activeNames: ['1'],
      formFitler: {
        fileSource: '0',
        fileStatus: '0',
        fileKeyworld: '',
        fileTime: ''
      }
    }
  }
}
</script>

<style scope lang="scss">
  .collapse-title{
    padding:0 16px;
    font-size: 16px;
  }
  .collapse-container{
    padding:16px 30px 0px 30px;
    .el-form-item{
      &:not(:last-child) {
        margin-right:20px
      }
    }
  }
  .filter-item-center{
    display: flex !important;
    width: 100%;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 0 !important;
  }
</style>
