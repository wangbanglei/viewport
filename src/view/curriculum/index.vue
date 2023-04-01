<template>
    <div class="curriculum-index">
        <div class="curriculum-picture"></div>
        <div class="curriculum-info"></div>
        <div class="curriculum-time-axis"></div>
        <div class="curriculum-btn">
            <van-button class="btn-works" @touchstart="toWorks">作品集</van-button>
            <van-button class="btn-create" @touchstart="toCreate">动态创作</van-button>
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
        // 去作品集
        toWorks() {
            this.$router.push('/works')
        },
        // 去创作
        toCreate() {
            this.$router.push('/create')
        }
    }
}
</script>
<style lang="less">
.curriculum-index {
    .curriculum-btn {
        text-align: center;
        font-size: 16px;
        margin: 1vh;
        .btn-works {
            background-color: #f0f7ff;
            color: #409EFF;
            border-radius: 5px;
            border: 1px solid #409EFF;
            &:active {
                background: #409EFF;
                color: #fff;
            }
        }
        .btn-create {
            margin-left: 20px; 
            background-color: #fff7eb;
            color: rgb(255, 153, 0);
            border-radius: 5px;
            border: 1px solid #FF9900;
            &:active {
                background: #FF9900;
                color: #fff;
            }
        }
    }
}
</style>
