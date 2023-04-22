<template>
    <div class="works-container">
        <div>
          <canvas id="canvas"></canvas>
        </div>
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
import { fabric } from 'fabric';
import { templateList } from "@/asset/config/index.js";
export default {
  data() {
    return {
      popup: false, // 弹框
      name: "", // 作品名称
      canvas: null,
      scaleX: 1,
      scaleY: 1,
      width: 0, // 宽度
      height: 0, // 高度
      imgList: [],
      id: '', // 模板id
      type: '' //  当前类型
    };
  },
  created() {
    this.popup = true;
    const { id, type } = this.$route.query;
    this.id = id;
    this.type = type;
    this.imgList = templateList[id].images;
    console.log(templateList, id, templateList[id])
  },
  mounted() {
    const { w, h } = this.getContainerInfo(9 / 16);
    this.width = w;
    this.height = h;
    this.canvas = this.initCanvas(this.imgList[0]) //  /be/pic/183b2ecf-1cdb-43d0-8796-35b11aab9d4e.png
    // this.addImg('/abk/static/img/%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F.53166f5..png')
    this.addRect({
      left: 100,
      top: 100,
      width: 50,
      height: 50,
      fill: 'red',
      stroke: 'black',
      angle: 0
    })
  },
  methods: {
    // 退出
    exit() {
      window.history.go(-1);
    },
    // 确认
    confirm() {
      this.popup = false;
    },
    // 从缓存中获取数据
    getDataByCache() {
      const data = JSON.parse(localStorage.getItem("canvasData")) || [];
      const sX = this.scaleX; // 整体的缩放比例
      const sY = this.scaleY; // 整体的缩放比例
      data.forEach(item => {
        const { type, angle } = item;
        const left = item.left * sX;
        const top = item.top * sY;
        const width = item.width * sX;
        const height = item.height * sY;
        if (type === "image") {
          this.addImg(
            this.imgList[0],
            {
              left,
              top,
              width,
              height,
              angle
            }
          );
        } else if (type === "rect") {
          this.addRect({
            left,
            top,
            width,
            height,
            angle,
            fill: "red",
            stroke: "black"
          });
        }
      });
    },

    // 根据当前屏幕按照比例计算出容器的大小(假设宽高比9/16)
    getContainerInfo(aspectRatio) {
      const w = document.body.clientWidth;
      const h = document.body.clientHeight;
      const containerSspectRatio = w / h; // 容器的宽高比
      console.log(containerSspectRatio);
      if (containerSspectRatio > aspectRatio) {
        // 如果容器的宽高比大于期望的宽高比,说明我们需要将容器的h作为高度，然后按照期待的缩放比求出宽度
        return {
          h,
          w: h * aspectRatio
        };
      } else {
        return {
          w,
          h: w / aspectRatio
        };
      }
    },

    // 初始化canvas
    initCanvas(url) {
      const canvas = new fabric.Canvas("canvas", {
        width: this.width,
        height: this.height
      });
      // 通过图片渲染成canvas的背景,如果存在背景图片
      if (url) {
        fabric.Image.fromURL(url, img => {
          const scaleX = canvas.width / img.width;
          const scaleY = canvas.height / img.height;
          this.scaleX = scaleX;
          this.scaleY = scaleY;
          canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
            scaleX,
            scaleY
          });
          this.getDataByCache();
        });
      }
      // 新增删除控制器
      const deleteImg = document.createElement("img");
      deleteImg.src =
        "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";
      fabric.Object.prototype.controls.deleteControl = new fabric.Control({
        x: 0.5,
        y: -0.5,
        offsetY: -16,
        offsetX: 16,
        cursorStyle: "pointer",
        mouseUpHandler: this.deleteObject, // 删除按钮对应的事件
        render: this.renderIcon(deleteImg),
        cornerSize: 24
      });
      return canvas;
    },

    // 添加图片
    addImg(url, data) {
      if (url) {
        fabric.Image.fromURL(url, img => {
          if (data) {
            const { left, top, angle, width, height } = data;
            const scaleX = width / img.width;
            const scaleY = height / img.height;
            img.set({
              width: img.width,
              height: img.height,
              left,
              top,
              angle,
              scaleX,
              scaleY
            }); // 拿图片的真实高度
          }
          this.canvas.add(img);
        });
      }
    },

    // 添加矩形
    addRect(data) {
      const { left, top, width, height, fill, stroke, angle } = data;
      const rect = new fabric.Rect({
        left,
        top,
        width,
        height,
        fill,
        stroke,
        angle
      });
      this.canvas.add(rect);
    },

    // icon渲染函数
    renderIcon(icon) {
      return function renderIcon(ctx, left, top, styleOverride, fabricObject) {
        const size = this.cornerSize;
        ctx.save();
        ctx.translate(left, top);
        ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
        ctx.drawImage(icon, -size / 2, -size / 2, size, size);
        ctx.restore();
      };
    },
    // 删除按钮对应的事件
    deleteObject(eventData, transform) {
      const target = transform.target;
      const canvas = target.canvas;
      canvas.remove(target);
      canvas.requestRenderAll();
    },
    // 生成图片
    createImg() {
      const dataURL = this.canvas.toDataURL({
        format: "png",
        quality: 1
      });
      var link = document.createElement("a");
      link.download = "fabric.png";
      link.href = dataURL;
      link.click();
    },
    // 获取数据（矩形旋转后，如果canvas画布变大后，再回显位置错位）
    getData() {
      const objects = this.canvas.getObjects();
      const data = [];
      const sX = Number(this.scaleX);
      const sY = Number(this.scaleY);
      objects.forEach(item => {
        let { width, height, left, top, angle, type, scaleX, scaleY } = item;
        // 所有的 宽高left,top都需要进行坐标转换
        if (type === "image") {
          width = width * scaleX;
          height = height * scaleY;
        }
        data.push({
          left: left / sX,
          top: top / sY,
          width: width / sX,
          height: height / sY,
          angle,
          type
        });
      });
      localStorage.setItem("canvasData", JSON.stringify(data));
    },

    // 计算选择后的位置
    getPosition(data) {
      // 计算旋转后的新坐标位置
      var radian = fabric.util.degreesToRadians(data.angle);
      var cos = Math.cos(radian);
      var sin = Math.sin(radian);
      var centerPoint = new fabric.Point(
        data.left + data.width / 2,
        data.top + data.height / 2
      );
      var newCenterPoint = new fabric.Point(
        centerPoint.x * cos + centerPoint.y * sin,
        centerPoint.y * cos - centerPoint.x * sin
      );
      data.left = newCenterPoint.x - data.width / 2;
      data.top = newCenterPoint.y - data.height / 2;
      return JSON.parse(JSON.stringify(data));
    }
  }
};
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
