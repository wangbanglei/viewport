<template>
  <div class="nav-bar">
    <van-nav-bar 
    left-text="返回"
    :title="title"
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

  computed: {
    title() {
      return this.$route.meta.title
    }
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
