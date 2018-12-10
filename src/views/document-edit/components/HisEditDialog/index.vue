<template>
  <div class="hisedit-view">
    <el-dialog
      :title="title"
      :show="show"
      :visible.sync="visible"
      width="50vw"
      @close="$emit('update:show', false);"
    >
      <div class="list">
        <div v-for="(item, index) in list" :key="index" class="item">
          <img :src="require('@assess/avatar.jpg')" class="avatar">
          <div class="name-and-date">
            <span class="name">小智</span>
            <span class="date">{{ showList[index].time | formatDate }}</span>
          </div>
          <div class="open">
            <el-button type="text" size="mini" @click="handleHisDel(index)">删除</el-button>
          </div>
          <div class="content">
            {{ showList[index].content }}
          </div>
          <div class="preview-img" @click="showHugImg(showList[index])">
            <img :src="showList[index].imgSrc">
            <p @click="showHugImg(showList[index])">查看快照</p>
          </div>
        </div>
      </div>
    </el-dialog>
    <el-dialog
      :visible.sync="innerVisible"
      width="50vw"
      title="图片详情"
      class="pre-dialog"
      append-to-body>
      <div class="preview-wrapper">
        <img :src="hugImg">
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  filters: {
    formatDate(value) {
      const date = new Date(value);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const h = date.getHours();
      const m = date.getMinutes();
      return `${year}-${month}-${day} ${h}:${m}`;
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '提示'
    },
    list: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      visible: this.show,
      innerVisible: false,
      hugImg: '',
      showList: [
        {
          imgSrc: require('@/assets/a1.jpg'),
          content: ' 第六条水运工程施工单位应当定期组织安全生产管理人员，工程技术人员和其他相关人员排查工程项目的重大事故隐.....',
          time: new Date()
        },
        {
          imgSrc: require('@/assets/a2.jpg'),
          content: ' 本办法所称重大事故隐患是指水运工程施工过程中存在的危害和整改难度较大，需要局部或者全部停止作业，并经过.....',
          time: new Date()
        },
        {
          imgSrc: require('@/assets/a3.jpg'),
          content: ' 第三条 福建省泉州港口管理局负责本辖区水运工程生产安全重大事故隐患排查治理挂牌督办管理工作。局相关处室.....',
          time: new Date()
        },
        {
          imgSrc: require('@/assets/a4.jpg'),
          content: ' 第七条 水运工程施工单位应及时将工程项目重大事故隐患排查治理的有关情况向建设单位报告。建设单位应积极协.....',
          time: new Date()
        }
      ]
    }
  },
  watch: {
    show() {
      this.visible = this.show;
    }
  },
  methods: {
    handleHisDel(index) {
      this.$emit('handleHisDel', index);
    },
    // 查看快照
    showHugImg(item) {
      this.innerVisible = true;
      this.hugImg = item.imgSrc;
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
      height: 60vh !important;
      overflow-y: scroll;
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
