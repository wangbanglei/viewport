<template>
    <div class="expert-container">
        <van-image  width="90vw" height="40vh" :src="avatar" radius="10"  class="expert-avatar"/>
        <div class="expert-detail">
            <p class="expert-name detail-item">{{name}}</p>
            <p class="expert-position detail-item">{{position}}</p>
            <p class="expert-info detail-item">{{info}}</p>
        </div>
        <div class="expert-btn">
            <div class="btn" @touchstart="invite">邀他点评</div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            avatar: '', // 头像地址
            name: '', // 姓名
            position: '', // 职位
            info: '' // 其它信息，暂时不知道什么数据结构
        }
    },
    created() {
        this.getDetail()
    },
    methods: {
        // 获取详情
        getDetail() {
            const id = this.$route.query.id || '';
            console.log(id);
            setTimeout(()=> {
                this.name = '专家1', // 姓名
                this.avatar = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202106%2F22%2F20210622154903_3c36a.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1683601045&t=a328565b4f99fef193d6e6fc0bac8bf6'
                this.position = '中央美院-教授-博士生导师' // 职位
                this.info = '专家实力雄厚' // 其它信息
            }, 300)
        },
        // 邀请
        invite() {

        }
    }
}
</script>
<style lang="less">
.expert-container {
    height: calc(100vh - 46px);
    font-size: 16px;
    overflow-y: auto;
    padding: 0 5vw;
    color: #7F7F7F;
    .expert-avatar {
        margin: 2vh 0;
    }
    .expert-detail {
        height: calc(56vh - 110px);
        box-sizing: border-box;
        .detail-item {
            padding-bottom: 20px;
        }
        .expert-name {
            color: #000;
        }
    }
    .expert-btn {
        position: fixed;
        bottom: 10px;
        text-align: center;
        width: 90vw;
        .btn {
            display: inline-block;
            width: 80vw;
            line-height: 45px;
            background-color: rgb(64, 158, 255);
            color: #FFFFFF;
            border-radius: 5px;
            &:active {
                background: rgb(102, 177, 255);
                color: #fff;
            }
        }
    }
}
</style>
