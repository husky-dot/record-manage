<template>
  <div class="dashboard-container">
    <h1 class="title">档案管理系统</h1>
    <!-- <div class="avatar-box">姓名:{{ name }}</div> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  data() {
    return {
      height: 0
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  },
  mounted() {
    this.height = document.body.clientHeight - 50;
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    position: relative;
    display: block;
    height:calc(100vh - 85px);
    width: 100%;
    overflow: hidden;
    align-items: center;
    box-sizing: border-box;
    background-color: #409EFF;
    overflow: hidden !important;
    &:before, &:after {
      content: "";
      position: absolute;
      left: 50%;
      min-width: 300vw;
      min-height: 300vw;
      background-color: #fff;
      animation-name: rotate;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
    &:before {
      bottom: 15vh;
      border-radius: 45%;
      animation-duration: 10s;
    }
    &:after {
      bottom: 12vh;
      opacity: .5;
      border-radius: 47%;
      animation-duration: 10s;
    }
  }
  &-text {
    z-index: 10;
    font-size: 30px;
    line-height: 46px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
}
.avatar-box{
  position: absolute;
  z-index: 9;
  left: 50%;
  top: 40%;
  transform: translate(-50%,-40%);
  border-radius: 50%;
  background-size: cover, 100% 100%;
  background-position: 0 0, -120px 0;
  background-blend-mode: luminosity;
  background-repeat: no-repeat;
  transition: .5s background-position linear;
}
.avatar-box:hover {
    background-position: 0 0, 0 0;
}
@keyframes rotate {
  0% {
      transform: translate(-50%, 0) rotateZ(0deg);
  }
  50% {
      transform: translate(-50%, -2%) rotateZ(180deg);
  }
  100% {
      transform: translate(-50%, 0%) rotateZ(360deg);
  }
}

.title{
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translate(-50%,-25%);
  background: #EEE url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAHklEQVQImWNkYGBgYGD4//8/A5wF5SBYyAr+//8PAPOCFO0Q2zq7AAAAAElFTkSuQmCC) repeat;
  text-shadow: 5px -5px black, 4px -4px white;
  font-weight: bold;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}
</style>
