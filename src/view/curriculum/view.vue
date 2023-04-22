<template>
  <div id="app">
    {{scaleX}}--{{scaleY}}
    <button @click="addImg('/abk/static/img/%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F.53166f5..png', {left: 100,top: 100,width: 50,height: 50, angle: 0})">添加图片</button>
    <button @click="addRect({left: 100,top: 100, width: 50, height: 50, fill: 'red',stroke: 'black', angle: 0})">添加矩形框</button>
    <button @click="createImg">生成图片</button>
    <button @click="getData">获取数据</button>
    <div>
      <canvas id="canvas"></canvas>
    </div>
  </div>
</template>
<script>
import { fabric } from 'fabric';
export default {
  data() {
    return {
        canvas: null,
        scaleX: 1,
        scaleY: 1,
        width: 0, // 宽度
        height: 0 // 高度
    }
  },
  mounted() {
    const { w, h } = this.getContainerInfo(9 / 16);
    this.width = w;
    this.height = h;
    this.canvas = this.initCanvas('data:image/png;base64,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') //  /be/pic/183b2ecf-1cdb-43d0-8796-35b11aab9d4e.png
    // this.addImg('/abk/static/img/%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F.53166f5..png')
    // this.addRect({
    //   left: 100,
    //   top: 100,
    //   width: 50,
    //   height: 50,
    //   fill: 'red',
    //   stroke: 'black',
    //   angle: 0
    // })
  },
  methods: {
    // 从缓存中获取数据
  getDataByCache() {
    const data = JSON.parse(localStorage.getItem('canvasData')) || [];
    const sX = this.scaleX; // 整体的缩放比例
    const sY = this.scaleY; // 整体的缩放比例
    data.forEach((item)=> {
        const { type, angle } = item;
        const left = item.left * sX;
        const top = item.top * sY;
        const width = item.width * sX;
        const height = item.height * sY;
        if (type === 'image') {
            this.addImg('/abk/static/img/%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F.53166f5..png', {
                left,
                top,
                width,
                height,
                angle
            })
        } else if (type === 'rect') {
            this.addRect({
                left,
                top,
                width,
                height,
                angle,
                fill: 'red',
                stroke: 'black',
            })
        }
    })

  },

  // 根据当前屏幕按照比例计算出容器的大小(假设宽高比9/16)
  getContainerInfo(aspectRatio) {
    const w = document.body.clientWidth;
    const h = document.body.clientHeight;
    const containerSspectRatio = w / h; // 容器的宽高比
    console.log(containerSspectRatio);
    if (containerSspectRatio > aspectRatio) { // 如果容器的宽高比大于期望的宽高比,说明我们需要将容器的h作为高度，然后按照期待的缩放比求出宽度
        return {
            h,
            w: h * aspectRatio
        }
    } else {
        return {
            w,
            h: w / aspectRatio
        }
    }
  },

  // 初始化canvas
  initCanvas(url) {
    const canvas = new fabric.Canvas('canvas', {
      width: this.width,
      height: this.height
    });
    // 通过图片渲染成canvas的背景,如果存在背景图片
    if (url) {
      fabric.Image.fromURL(url, (img) => {
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
    const deleteImg = document.createElement('img');
    deleteImg.src = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E"
    fabric.Object.prototype.controls.deleteControl = new fabric.Control({
      x: 0.5,
      y: -0.5,
      offsetY: -16,
      offsetX: 16,
      cursorStyle: 'pointer',
      mouseUpHandler: this.deleteObject, // 删除按钮对应的事件
      render: this.renderIcon(deleteImg),
      cornerSize: 24
    });
    return canvas;
  },

  // 添加图片
  addImg(url, data) {
    if (url) {
      fabric.Image.fromURL(url, (img) => {
        if (data) {
            const { left, top, angle, width, height } = data;
            const scaleX = width / img.width;
            const scaleY = height / img.height;
            img.set({ width: img.width, height: img.height, left, top, angle, scaleX, scaleY }); // 拿图片的真实高度
        }
        this.canvas.add(img);
      })
    }
  },

  // 添加矩形
  addRect(data) {
    const { left, top, width, height, fill, stroke, angle } = data
    const rect = new fabric.Rect({
      left,
      top,
      width,
      height,
      fill,
      stroke,
      angle,
    });
    this.canvas.add(rect)
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
    }
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
      format: 'png',
      quality: 1
    });
    var link = document.createElement('a');
    link.download = 'fabric.png';
    link.href = dataURL;
    link.click();
  },
  // 获取数据（矩形旋转后，如果canvas画布变大后，再回显位置错位）
  getData() {
    const objects = this.canvas.getObjects();
    const data = []
    const sX = Number(this.scaleX);
    const sY = Number(this.scaleY);
    objects.forEach((item) => {
      let { width, height, left, top, angle, type, scaleX, scaleY } = item;
      // 所有的 宽高left,top都需要进行坐标转换
      if (type === 'image') {
          width = width * scaleX;
          height = height * scaleY;
      }
      data.push({
        left: left / sX,
        top: top / sY,
        width: width / sX,
        height: height / sY,
        angle,
        type,
      })
    })
    localStorage.setItem('canvasData', JSON.stringify(data));
  },

  // 计算选择后的位置
  getPosition(data) {
        // 计算旋转后的新坐标位置
        var radian = fabric.util.degreesToRadians(data.angle);
        var cos = Math.cos(radian);
        var sin = Math.sin(radian);
        var centerPoint = new fabric.Point(data.left + data.width / 2, data.top + data.height / 2);
        var newCenterPoint = new fabric.Point(centerPoint.x * cos + centerPoint.y * sin, centerPoint.y * cos - centerPoint.x * sin);
        data.left = newCenterPoint.x - data.width / 2;
        data.top = newCenterPoint.y - data.height / 2;
        return JSON.parse(JSON.stringify(data));
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
}
canvas {
  border: 1px solid red;
}
.canvas-container {
    margin: 0 auto;
}
</style>