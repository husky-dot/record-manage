<template>
  <div class="hisedit-view">
    <el-dialog
      :title="title"
      :show="show"
      :visible.sync="visible"
      width="35%"
      @close="$emit('update:show', false);"
    >
      <div class="list">
        <div v-for="item in [1,2]" :key="item" class="item">
          <img :src="require('@assess/avatar.jpg')" class="avatar">
          <div class="name-and-date">
            <span class="name">小智</span>
            <span class="date">2018-10-11 12:30</span>
          </div>
          <div class="open">
            <el-button type="text" size="mini">删除</el-button>
          </div>
          <div class="content">
            第六条水运工程施工单位应当定期组织安全生产管理人员，工程技术人员和其他相关人员排查工程项目的重大事故隐.....
          </div>
          <div class="preview-img" @click="innerVisible = true">
            <img :src="require('@assess/avatar.jpg')">
            <p @click="innerVisible = true">查看快照</p>
          </div>
        </div>
      </div>
    </el-dialog>
    <el-dialog
      :visible.sync="innerVisible"
      width="30%"
      title="图片详情"
      class="pre-dialog"
      append-to-body>
      <div class="preview-wrapper">
        <img :src="require('@assess/avatar.jpg')">
      </div>
    </el-dialog>
  </div>
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
      innerVisible: false
    }
  },
  watch: {
    show() {
      this.visible = this.show;
    }
  }
}
</script>

<style scope lang='scss'>
  .hisedit-view{
    .el-dialog__body{
      padding: 0 !important;
    }
    .el-dialog{
      height: 60vh;
    }
    .list{
      padding:0 16px;
      border-top: 1px solid #ebebeb;
    }
    .item{
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ebebeb;
      padding-top: 16px;
      .avatar{
        width: 46px;
        height: 46px;
        border-radius: 50%;
        border:1px solid #e2e2e2;
      }
      .name-and-date{
        width: 150px;
        display: flex;
        flex-direction: column;
        padding-left: 16px;
        .name{
          font-size: 14px;
          color: #666;
          line-height: 30px;
        }
        .date{
          font-size: 13px;
          color: #999;
        }

      }
      .open{
        width: 80px;
        text-align: center;
      }
      .content{
        flex: 1;
        font-size: 13px;
        color: #666;
        padding: 0 16px;
        line-height: 2em;
      }
      .preview-img{
        img{
          width: 70px;
          height: 90px;
        }
        p{
          font-size: 13px;
          color: #308de9;
          margin: 0;
          padding: 0;
          line-height: 30px;
          text-align: center;
        }
      }
    }
  }

    .preview-wrapper{
      padding-top: 10px;
      border-top: 1px solid #ebebeb;
      text-align: center;
      img{
        object-fit: contain;
        width: 100% !important;
      }
    }
    .pre-dialog{
      .el-dialog__body{
        min-height: 50vh !important;
        background: #fff;
      }
    }
</style>
