<template>
    <div class="timeline">
        <van-row class="r">
            <van-col span="12">
                <div class="img">这是一张图片</div>
            </van-col>
            <van-col span="12">
                <div class="title">
                    <h5>森林Party</h5>
                    <span>2023-01-01 18:00</span>
                </div>
            </van-col>
        </van-row>
        <van-row class="l">
            <van-col span="12">
                <div class="title">
                    <h5>森林Party</h5>
                    <span>2023-01-01 18:00</span>
                </div>
            </van-col>
            <van-col span="12">
                <div class="img">这是一张图片</div>
            </van-col>
        </van-row>
        
        <van-row class="r">
            <van-col span="12">
                <div class="img">这是一张图片</div>
            </van-col>
            <van-col span="12">
                <div class="title">
                    <h5>森林Party</h5>
                    <span>2023-01-01 18:00</span>
                </div>
            </van-col>
        </van-row>
        <van-row class="l">
            <van-col span="12">
                <div class="title">
                    <h5>森林Party</h5>
                    <span>2023-01-01 18:00</span>
                </div>
            </van-col>
            <van-col span="12">
                <div class="img">这是一张图片</div>
            </van-col>
        </van-row>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less">
.timeline {
    .img {
            background:#eee;
            border-radius: 10px;
            margin:10px;
            height: 140px;
            font-size: 12px;
        }
        .title {
            height:40px;
            padding: 50px 0;
            text-align: right;
            padding-right: 20px;
            span{
                font-size: 12px;
                color:#666;
            }
        }
    .r {
        .title {
            text-align: left;
            padding-left: 20px;
        }
    }
}
</style>
