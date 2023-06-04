<template>
    <div class="learning-map">
        <div class="bg"><img :src="bgUrl" /></div>
        <van-overlay :show="show" @click="show = false">
            <div class="stars">这里是小星星</div>
            <div class="swiper">
                <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                    <van-swipe-item><div>1</div></van-swipe-item>
                    <van-swipe-item><div>2</div></van-swipe-item>
                    <van-swipe-item><div>3</div></van-swipe-item>
                    <van-swipe-item><div>4</div></van-swipe-item>
                </van-swipe>
            </div>
            <div class="btn-group">
                <van-button plain type="info" class="popus-btn" @touchstart="confirm">二次创作</van-button>
            </div>
        </van-overlay>
    </div>
</template>
<script>
export default {
    data() {
        return {
            show: false,
            bgUrl: require('../../asset/image/map/map-bg.png')
        }
    },
    methods: {
        confirm () {
            //
        }
    }
}
</script>
<style lang="less">
.learning-map {
    position: relative;
    text-align: center;
    width: 100%;
    height:calc(100vh - 46px);
    .bg{
        position: absolute;
        left:0;
        bottom:0;
        width: 100%;
        height:100%;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .swiper{
        height: 300px;
        width: 200px;
        margin: 0 auto;
    }
    .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        padding-bottom: 20px;
    }
    .btn-group {
        width: 80%;
        margin-top: 30px;
        margin: 0 auto;
        .popus-btn {
            width: 100%;
            background: linear-gradient(to right, #52d484, #29cfb8);
            border: none;
            color: #fff;
            border-radius: 20px;
            margin-bottom: 15px;
        }
    }
}
</style>
