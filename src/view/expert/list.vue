<template>
    <div class="expert-container">
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text=""
            @load="onLoad"
        >
            <div v-for="item in list" :key="item.id" class="expert-item" @click="toDetail(item)">
                <van-image  width="80" height="80" :src="item.avatar" radius="10"  style="border: 1px solid #ccc;"/>
                <span class="expert-name">{{item.name}}</span>
                <span class="expert-position">{{item.position}}</span>
            </div>
        </van-list>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loading: false, // 加载状态（可能存在分页）
            finished: true, // 加载是否完成
            list: [] // 列表数据
        }
    },
    created() {
        this.getExpertList();
    },
    methods: {
        getExpertList() {
            console.log(333)
            for (let i = 0; i < 20; i++) {
                this.list.push({
                    avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202106%2F22%2F20210622154903_3c36a.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1683601045&t=a328565b4f99fef193d6e6fc0bac8bf6', // 头像地址
                    name: '周优秀', // 专家名称
                    position: '中央美院-教授-博士生导师', // 职位
                    id: i // 专家唯一id 获取专家详情
                })
            }
        },
        // 加载方法
        onLoad() {
            console.log("加载")
        },
        // 跳转详情页
        toDetail(item) {
            this.$router.push({ path: 'expertdetail', query: { id: item.id }})
        }
    }
}
</script>
<style lang="less">
.expert-container {
    height: calc(100vh - 46px);
    font-size: 16px;
    overflow-y: auto;
    .expert-item {
        position: relative;
        margin: 2vh 4vw;
        .expert-name {
            position: absolute;
            top: 10px;
            margin-left: 10px; 
        }
        .expert-position {
            position: absolute;
            bottom: 10px;
            margin-left: 10px;
            color: #7f7f7f;
        }
    }
}
</style>
