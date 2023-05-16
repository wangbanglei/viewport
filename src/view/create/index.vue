<template>
    <div class="create-index">
        <div class="isNone">
            <div class="none-img">！这里是张图片</div>
            <div class="none-content">请选择一副个人作品，开始创作</div>
            <van-button color="" native-type="file" round type="primary" size="mini">上传作品</van-button>
        </div>

        <van-popup v-model="popup" :close-on-click-overlay="false" :round="true">
            <div class="popup-modal">
                <div class="popup-top">
                    <van-field v-model="name" class="popus-input" placeholder="请输入作品名称" />
                </div>
                <div class="popup-bottom">
                    <van-button plain type="primary" class="popus-btn continue" @touchstart="continueAction">继续上次</van-button>
                    <van-button plain type="info" class="popus-btn" @touchstart="confirm">确认</van-button>
                    <span class="popup-exit" @touchstart="exit">取消并退出</span>
                </div>
            </div>
        </van-popup>
        <!-- <div class="create-sidebar">
            <div></div>
            <div class="create-btn">
                <van-button class="btn-item">开始创作</van-button>
                <van-button class="btn-item">继续上次</van-button>
            </div>
        </div>
        <van-popup v-model="show">
            <van-field v-model="value" label="文本" placeholder="请输入用户名" />
        </van-popup> -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            popup: true, // 弹框
            name: '',
            // show: true,
            // value: ''
        }
    },
    continueAction () {

    },
    confirm () {

    },
    exit () {

    }
}
</script>
<style lang="less">
.create-index {
  .popup-modal {
    width: 80vw;
    height: 60vw;
    .popup-top {
      padding: 20px;
      border: 1px solid #f1f1f1;
      .popus-input {
        background: #f6f9fd;
        border-radius: 5px;
      }
    }
    .popup-bottom {
      padding: 20px;
      .popus-btn {
        width: 100%;
        background: linear-gradient(to right, #52d484, #29cfb8);
        border: none;
        color: #fff;
        border-radius: 20px;
        margin-bottom: 15px;
        &.continue {
            background: #fff;
            color: #29cfb8;
            border:1px solid #29cfb8;
        }
      }
      .popup-exit {
        display: block;
        font-size: 12px;
        color: #999;
        text-align: center;
        width: 100%;
        cursor: pointer;
      }
    }
  }
  .isNone {
        text-align: center;
        font-size: 12px;
        color:#666;
        background: #eee;
        height:100vh;
        .none-content{
            margin-top: 15px;
        }
        button {
            background: linear-gradient(to bottom, #52d484, #29cfb8);
            margin: 15px;
            padding: 0 20px;
            border:none
        }
    }
}
// .create-index {
//     position: relative;
    // width: 100vh;
    // height: 100vw;
    // margin-top: calc(-100vw - 46px);
    // transform: rotate(90deg);
    // transform-origin: bottom left;
    // .create-sidebar {
    //     position: absolute;
    //     bottom: 0;
    //     height: 44px;
    //     width: 100vh;
    //     background: #f2f2f2;
    // }
    // .create-btn {
    //     text-align: center;
    //     .btn-item {
    //         // transform: rotate(90deg);
    //         width: max-content;
    //     }
    // }
// }
</style>
