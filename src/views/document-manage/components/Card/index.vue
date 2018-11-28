<template>
  <div class="card">
    <div class="card-body">
      <img src="/src/assets/avatar.jpg">
      <router-link :to="'/manage/edit/'+content.id" tag="a" target="_blank" class="content">
        <div class="title-wrapper">
          <div class="title-left app-ellipse-1">{{ content.title }}</div>
          <div class="title-source">来源:{{ content.source }}</div>
        </div>
        <div class="desc app-ellipse-1">说明：{{ content.desc }}</div>
      </router-link>
    </div>
    <div class="card-footer">
      <div class="ft-left">
        <div class="status">
          <span :class="[ $options.filters.formatStatus(content.status) ]" class="point">
            {{ content.statusName }}</span>
          <span class="date">2018-10-26</span>
        </div>
      </div>
      <div class="ft-right">
        <!-- 待处理 流转中 -->
        <template v-if="content.status === 1 || content.status === 3">
          <i class="el-icon-news" title="转发"/>
          <i class="el-icon-tickets" title="日志"/>
          <i class="el-icon-edit-outline" title="编辑"/>
        </template>
        <!-- 已发布 -->
        <template v-if="content.status === 2">
          <i class="el-icon-news" title="转发"/>
        </template>
        <i class="el-icon-delete" title="删除"/>
      </div>
    </div>
  </div>
</template>
<script>
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
  props: {
    content: {
      type: Object,
      default: function() {
        return '已作废'
      }
    }
  },
  data() {
    return {
    }
  }

}
</script>

<style scope lang="scss">
  .card{
    width: 375px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    border-radius: 4px;
    .card-body{
      display: flex;
      padding: 16px;
      img{
        width: 50px;
        height: 50px;
        border-radius: 4px;
      }
      .content{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding-left: 16px;
        .desc{
          font-size: 13px;
          color: #666;
        }
      }
      .title-wrapper{
        display: flex;
        .title-left{
          flex: 1;
          font-size: 14px;
          color: 333;
        }
        .title-source{
          color: #999;
          font-size: 13px;
        }
      }
    }
    .card-footer{
      height: 45px;
      display: flex;
      align-items: center;
      padding: 0 16px;
      border-top: 1px solid #ebebeb;
      .ft-left{
        flex: 1;
        .status{
          display: flex;
          align-items: center;
          .point{
            position: relative;
            display: inline-block;
            font-size: 13px;
            color: #333;
            padding-left: 10px;
            &::before{
              content: '';
              position: absolute;
              width: 6px;
              height: 6px;
              left: 0px;
              top:2px;
              background: #666;
              border-radius: 50%;
            }
            &.red{
               &::before{
                 background: #f04134;
               }
            }
            &.orange{
               &::before{
                 background: #ff9900;
               }
            }
            &.green{
               &::before{
                 background: #00cc66;
               }
            }
            &.blue{
              &::before{
                 background: #108de9;
               }
            }
          }
          .date{
            font-size: 12px;
            color: #999;
            margin-left: 20px;
          }
        }
      }
      .ft-right{
        flex: 1;
        text-align: right;
        color: #999;
         i{
            cursor: pointer;
            font-size:18px;
            margin-left:8px;
          }
      }
    }
  }
</style>
