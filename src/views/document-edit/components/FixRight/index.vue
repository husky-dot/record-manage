<template>
  <div class="fix-right">
    <div class="item" title="修改" @click="handleEdit">
      <i class="iconfont icon-xiugai"/>
    </div>
    <div class="item" title="删除">
      <i class="iconfont icon-shanchu"/>
    </div>
    <div class="item" title="下载">
      <i class="iconfont icon-xiazai"/>
    </div>
    <div class="item" title="撤销">
      <i class="iconfont icon-ziyuanbaosongshenqingshujuchexiao"/>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    handleEdit() {
      this.$emit('handleEdit');
    }
  }
}
</script>

<style scope lang="scss">
  .fix-right{
    position: fixed;
    right: 5vw;
    top:40vh;
    display: flex;
    flex-direction: column;
    .item{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 15px;
      i{
        font-size:20px;
        position: relative;
      }
    }
  }
</style>
