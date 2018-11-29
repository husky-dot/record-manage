<!-- -->
<template>
  <div class="page">
    <!-- 头部搜索 -->
    <filter-header />
    <div class="btns-wrapper">
      <el-button type="primary" size="mini">新建文件</el-button>
      <el-button size="mini" style="margin-right:20px" @click="transmitDialog = true">转发文件</el-button>
      <el-button-group class="btn-group" size="mini">
        <el-button :class="{'btn-active': activeList}" size="mini" @click="toggleList(true)">
          <i class="iconfont icon-leibie"/>
        </el-button>
        <el-button :class="{'btn-active': !activeList}" size="mini" @click="toggleList(false)">
          <i class="iconfont icon-liebiao1"/>
        </el-button>
      </el-button-group>
    </div>
    <div class="list-wrapper">
      <div v-if="activeList" class="list1-container">
        <card
          v-for="item of list"
          :key="item.id"
          :content="item"
          @handleTransmit="transmitDialog = true"
          @handleLog="operLogDialog = true"
          @handleDel="delDialog = true"
        />
      </div>
      <div v-if="!activeList" class="list2-container">
        <el-table :data="list" style="width: 100%" border >
          <el-table-column type="selection" width="55" />
          <el-table-column label="时间" width="160" prop="dateTime" />
          <el-table-column label="文件名称">
            <template slot-scope="scope">
              <router-link :to="'/manage/edit/'+scope.row.id" tag="a" target="_blank" class="app-ellipse-1 blue">
                {{ scope.row.title }}
              </router-link>
            </template>
          </el-table-column>
          <el-table-column prop="source" label="来源" width="100" />
          <el-table-column prop="person" label="经办人" width="80" />
          <el-table-column prop="desc" label="说明" />
          <el-table-column prop="statusName" label="状态" width="100">
            <template slot-scope="scope">
              <span :class="[ $options.filters.formatStatus(scope.row.status) ]" class="point">{{ scope.row.statusName }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="200">
            <template slot-scope="scope">
              <template v-if="scope.row.status ===2">
                <el-button type="text" size="mini">作废</el-button>
                <el-button type="text" size="mini" @click="transmitDialog = true">转发</el-button>
              </template>
              <template v-if="scope.row.status ===3">
                <el-button type="text" size="mini">编辑</el-button>
                <el-button type="text" size="mini" @click="operLogDialog = true">操作日志</el-button>
                <el-button type="text" size="mini" @click="transmitDialog = true">转发</el-button>
              </template>
              <el-button v-if="scope.row.status !=2 " type="text" size="mini" @click="delDialog = true">移除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <!-- 分页 -->
    <pagination
      :current-page.sync="searchParams.currentPage"
      :page-size.sync="searchParams.pageSize"
      :total="total"
      style="margin-top:50px"
      @change="onPaginatorSearch"
    />
    <!-- 转发文件 -->
    <transmit :show.sync="transmitDialog" title="转发文件" />
    <!-- 操作日志 -->
    <operator-log :show.sync="operLogDialog" title="操作日志" />
    <!-- 删除确认 S -->
    <confirm-dialog :show.sync="delDialog" :content="'确定删除？'" @handleConfirm="handleDelete()" />
  </div>
</template>

<script type="text/ecmascript-6">
import { getList } from '@/api/document'
import { success } from '@/utils/message'
import FilterHeader from '@/components/FilterHeader/index'
import Card from './components/Card/index'
import Pagination from '@/components/Pagination/index'
import Transmit from '@/components/Transmit/index'
import OperatorLog from './components/OperatorLog/index'
import ConfirmDialog from '@/components/ConfirmDialog'
export default {
  filters: {
    formatStatus(value) {
      switch (value) {
        case 0:
          return 'red';
        case 1:
          return 'orange';
        case 2:
          return 'green';
        case 3:
          return 'blue';
      }
    }
  },
  components: {
    FilterHeader,
    Card,
    Pagination,
    Transmit,
    OperatorLog,
    ConfirmDialog
  },
  data() {
    return {
      list: [],
      activeList: true,
      transmitDialog: false, // 转发文件
      operLogDialog: false, // 操作日志
      delDialog: false, // 删除
      total: 0,
      searchParams: {
        currentPage: 1,
        pageSize: 10
      }
    }
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      getList().then(res => {
        const { code, data } = res;
        if (code === 20000) {
          this.list = data;
          this.total = this.list.length;
        }
      })
    },
    onPaginatorSearch() {},
    toggleList(value) {
      this.activeList = value;
    },
    // 确认删除
    handleDelete() {
      success('删除成功!');
      this.delDialog = false;
    }
  }
}
</script>

<style scoped lang="scss">
  .page{
    min-height: calc(100vh - 50px);
    background-color: #fff;
  }
  .blue{
    color: #108de9;
  }
  .list-wrapper{
    padding: 16px;
    .card{
      margin-right: 20px;
      margin-bottom: 15px;
    }
  }
  .list1-container{
    display: flex;
    flex-wrap: wrap;
  }
  .btns-wrapper{
    margin: 20px 16px 16px 16px;
  }
  .btn-group{
    button{
      background: #f2f2f2;
    }
    i {
      font-size: 12px !important;
      color: #999;
    }
    .btn-active{
      background: #fff;
      i{
        color: #666;
      }
    }
  }
  .point{
    position: relative;
    display: inline-block;
    font-size: 13px;
    color: #333;
    padding-left: 10px;
    &::before{
      content: '';
      position: absolute;
      width: 4px;
      height: 4px;
      left: 0px;
      top:10px;
      background: #666;
      border-radius: 50%;
    }
    &.red{
      color: #f04134;
      &::before{
        background: #f04134;
      }
    }
    &.orange{
      color: #ff9900;
      &::before{
        background: #ff9900;
      }
    }
    &.green{
      color:#00cc66;
      &::before{
        background: #00cc66;
      }
    }
    &.blue{
      color: #108de9;
      &::before{
        background: #108de9;
      }
    }
  }
</style>

