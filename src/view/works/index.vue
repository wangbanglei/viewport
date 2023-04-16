<template>
    <div class="works-container">
        <van-popup v-model="popup" :close-on-click-overlay="false" :round="true">
            <div class="popup-modal">
                <div class="popup-top">
                    <van-field v-model="name" class="popus-input" placeholder="请输入作品名称" />
                </div>
                <div class="popup-bottom">
                    <van-button plain type="info" class="popus-btn" @touchstart="confirm">确认</van-button>
                    <span class="popup-exit" @touchstart="exit">取消并退出</span>
                </div>
            </div>
        </van-popup>
    </div>
</template>
<script>
export default {
    data() {
        return {
            popup: false, // 弹框
            name: '', // 作品名称
        }
    },
    created() {
        this.popup = true;
    },
    methods: {
        // 退出
        exit() {
            window.history.go(-1)
        },
        // 确认
        confirm() {
            this.popup = false;
        }
    }
}
</script>
<style lang="less">
.works-container {
    height: calc(100vh - 46px);
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
            }
            .popup-exit {
                display: block;
                font-size: 12px;
                color: #999;
                text-align: center;
                width: 100%;
                cursor: pointer;
                margin-top: 20px; 
            }
        }
    }
}
</style>
