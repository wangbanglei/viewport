<template>
    <div class="curriculum-index">
        <div class="curriculum-picture"></div>
        <div class="curriculum-info">
            <div class="base-info">
                <span class="course-name">{{courseName}}</span>
                <span class="teacher-name">授课老师：{{teacherName}}</span>
            </div>
            <div class="chapter-info">
                <span class="chapter-count">已更新{{chaptersCount}}章</span>
                <span class="chapter-current">已学习到第{{currentChapter}}章</span>
            </div>
            <div class="chapter-info">
                <span>课程时间：{{courseTime}}</span>
            </div>
        </div>
        <div class="curriculum-time-axis">
            <van-steps direction="vertical" :active="list.length - 1">
                <van-step v-for="(item, index) in list" :key="index">
                  <div class="list-item">
                    <img :src="item.src">
                    <div class="list-item-info">
                        <p>{{item.time}}</p>
                        <p><span class="keynote">{{item.operation}}</span>了{{item.worksType}}《{{item.worksName}}》</p>
                    </div>
                  </div>
                </van-step>
            </van-steps>
        </div>
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
            courseName: '暑假AI课程班', // 课程名称
            teacherName: '周优秀', // 老师名称
            chaptersCount: 5, // 章节数
            currentChapter: 1, // 当前章节
            courseTime: '2023-07-01 ~ 2023-09-01',
            list: [
                {
                    src: '', // 图片地址
                    time: '2023-01-01 10:30', // 时间
                    worksType: '作品集', // 作品集/章节/作品等
                    worksName: '聪明的一休', // 作品名称
                    operation: '创建', // 操作的动作 创建/学习/DIY/专家点评了
                },
                {
                    src: '', 
                    time: '2023-01-01 10:30',
                    worksType: '作品集',
                    worksName: '聪明的一休',
                    operation: '创建',
                },
                {
                    src: '', 
                    time: '2023-01-01 10:30',
                    worksType: '作品集',
                    worksName: '聪明的一休',
                    operation: '创建',
                },
                {
                    src: '', 
                    time: '2023-01-01 10:30',
                    worksType: '作品集',
                    worksName: '聪明的一休',
                    operation: '创建',
                },
                {
                    src: '', 
                    time: '2023-01-01 10:30',
                    worksType: '作品集',
                    worksName: '聪明的一休',
                    operation: '创建',
                },
                {
                    src: '', 
                    time: '2023-01-01 10:30',
                    worksType: '作品集',
                    worksName: '聪明的一休',
                    operation: '创建',
                },
                {
                    src: '', 
                    time: '2023-01-01 10:30',
                    worksType: '作品集',
                    worksName: '聪明的一休',
                    operation: '创建',
                },
                {
                    src: '', 
                    time: '2023-01-01 10:30',
                    worksType: '作品集',
                    worksName: '聪明的一休',
                    operation: '创建',
                },
                {
                    src: '', 
                    time: '2023-01-01 10:30',
                    worksType: '作品集',
                    worksName: '聪明的一休',
                    operation: '创建',
                },
                {
                    src: '', 
                    time: '2023-01-01 10:30',
                    worksType: '作品集',
                    worksName: '聪明的一休',
                    operation: '创建',
                },
                {
                    src: '', 
                    time: '2023-01-01 10:30',
                    worksType: '作品集',
                    worksName: '聪明的一休',
                    operation: '创建',
                },
                {
                    src: '', 
                    time: '2023-01-01 10:30',
                    worksType: '作品集',
                    worksName: '聪明的一休',
                    operation: '创建',
                },
                {
                    src: '', 
                    time: '2023-01-01 10:30',
                    worksType: '作品集',
                    worksName: '聪明的一休',
                    operation: '创建',
                }
            ], // 时间轴数据列表
        }
    },
    methods: {
        // 去作品集
        toWorks() {
            this.$router.push('/template')
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
    height: calc(100vh - 46px);
    padding: 1vh 2vw;
    box-sizing: border-box;
    .curriculum-picture {
        height: 16vh;
        width: 96vw;
        margin: 0 auto;
        border-radius: 10px;
        background: #f2f2f2;
    }
    .curriculum-info {
        margin-top: 1vh;
        font-size: 13px;
        .base-info {
            .course-name {

            }
            .teacher-name {
                color: #ccc;
                float: right;
            }
        }
        .chapter-info {
            margin-top: 1vh;
            .chapter-count {
                color: #ccc;
            } 
            .chapter-current {
                margin-left: 20px;
                color: #409EFF;
            }
        }
        .chapter-info {
            margin-top: 1vh;
            color: #ccc;
        }
    }
    .curriculum-time-axis {
        margin-top: 1vh; 
        height: 50vh;
        overflow-y: auto;
        .list-item {
            img {
                width: 60px;
                height: 60px;
                border-radius: 5px;
            }
            .list-item-info {
                display: inline-block;
                vertical-align: top;
                p {
                    padding: 5px 10px;
                    color: #000;
                }
                .keynote {
                    color: red;
                }
            }
        }
    }
    .curriculum-btn {
        text-align: center;
        font-size: 16px;
        margin-top: 1vh;
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
