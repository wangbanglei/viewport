<template>
    <div class="template-container">
        <van-search v-model="searchVal" @search="search"  @clear="clear" placeholder="请输入搜索关键词" shape="round" left-icon="" right-icon="search" background=""></van-search>
        <van-grid :gutter="20" :column-num="2" class="list-container" :border=false>
            <van-grid-item v-for="(item, index) in templateList" :key="index" :clickable=true @click="previewImage(item)">
                <van-image :src="item.src" radius="20"/>
                <span class="template-name">{{item.name}}</span>
            </van-grid-item>
        </van-grid>
        <van-image-preview v-model="show" :images="images" showIndicators className="preview">
            <template v-slot:index>
                <span>{{currentTemplate.name}}</span>
            </template>
            <template v-slot:cover>
                <van-button plain type="info" @touchstart="cancle">取消</van-button>
                <van-button plain type="info" @touchstart="select" style="margin-left: 10vw;">选定</van-button>
            </template>
        </van-image-preview>
    </div>
</template>
<script>
import { templateList } from "@/asset/config/index.js";
export default {
  data() {
    return {
      searchVal: "", // 搜索内容
      templateList: templateList,
      show: false, // 是否展示图片预览框
      images: [], // 展示的图片地址
      currentTemplate: {} // 当前模板
    };
  },
  created() {},
  mounted() {
    const { w, h } = this.getContainerInfo(9 / 16);
    this.width = w;
    this.height = h;
    this.canvas = this.initCanvas(
      "data:image/png;base64,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"
    ); //  /be/pic/183b2ecf-1cdb-43d0-8796-35b11aab9d4e.png
    // this.addImg('/abk/static/img/%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F.53166f5..png')
    // this.addRect({
    //   left: 100,
    //   top: 100,
    //   width: 50,
    //   height: 50,
    //   fill: 'red',
    //   stroke: 'black',
    //   angle: 0
    // })
  },
  methods: {
    search() {},
    clear() {
      this.searchVal = "";
    },
    // 预览图片
    previewImage(val) {
      this.show = true;
      this.images = val.images || [];
      this.currentTemplate = val;
    },
    // 取消
    cancle() {
      this.show = false;
    },
    // 选择
    select() {
      this.$router.push({ path: "works", query: { id: this.currentTemplate.id, type: "create" } });
    }
  }
};
</script>
<style lang="less">
.template-container {
  height: calc(100vh - 46px);
  .list-container {
    padding: 1vh 0;
    height: calc(100vh - 100px);
    box-sizing: border-box;
    overflow-y: auto;
    .template-name {
      font-size: 14px;
    }
  }
  .van-image-preview__cover {
    bottom: 15vh;
    top: auto;
    left: 50%;
    transform: translateX(-50%);
  }
  .preview {
    .van-image-preview__image {
      width: 70vw;
      position: absolute;
      height: auto;
      margin: 0 auto;
      background: #fff;
      border-radius: 2.66667vw;
      top: 10vh;
    }
    .van-image__img {
      border-radius: 10px;
    }
    .van-swipe__indicators {
      bottom: 26vh;
    }
    .van-image-preview__index {
      top: calc(10vh - 30px);
    }
  }
}
</style>
