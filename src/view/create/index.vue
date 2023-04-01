<template>
    <div class="create-index">
        <div class="create-sidebar">
            <div></div>
            <div class="create-btn">
                <van-button class="btn-item">开始创作</van-button>
                <van-button class="btn-item">继续上次</van-button>
            </div>
        </div>
        <van-popup v-model="show">
            <van-field v-model="value" label="文本" placeholder="请输入用户名" />
        </van-popup>
    </div>
</template>
<script>
export default {
    data() {
        return {
            show: true,
            value: ''
        }
    }
}
</script>
<style lang="less">
.create-index {
    position: relative;
    width: 100vh;
    height: 100vw;
    margin-top: calc(-100vw - 46px);
    transform: rotate(90deg);
    transform-origin: bottom left;
    .create-sidebar {
        position: absolute;
        bottom: 0;
        height: 44px;
        width: 100vh;
        background: #f2f2f2;
    }
    .create-btn {
        text-align: center;
        .btn-item {
            // transform: rotate(90deg);
            width: max-content;
        }
    }
}
</style>
