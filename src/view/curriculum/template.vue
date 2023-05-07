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
                <van-button plain type="info" @click="cancle">取消</van-button>
                <van-button plain type="info" @click="select" style="margin-left: 10vw;">选定</van-button>
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
  },
  methods: {
    search() {
      const searchVal = this.searchVal;
      const arr = [];
      templateList.forEach((item)=> {
        const { name } = item;
        if (name.indexOf(searchVal) > -1) {
          arr.push(item)
        }
      })
      this.templateList = arr;
    },
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
    max-height: calc(100vh - 100px);
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
