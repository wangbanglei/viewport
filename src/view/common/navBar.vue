<template>
  <div class="nav-bar">
    <van-nav-bar 
    left-text="返回"
    left-arrow
    @click-left="goBack"
    ></van-nav-bar>
  </div>
</template>

<script>
import {
  NavBar 
} from 'vant';

export default {
  components: {
    [NavBar.name]: NavBar
  },

  data() {
    return {
    };
  },

  methods: {
    goBack() {
      window.history.go(-1)
    }
  }
};
</script>

<style lang="less">
</style>
