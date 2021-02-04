<template>
  <div>
    <div v-for="(item,index) in videos" :key="index" class="warp">
      <van-row type="flex" justify="center">
        <van-col>
          <span class="title-text">{{item.title}}</span>
        </van-col>
      </van-row>
      <van-row type="flex" justify="center">
        <van-col span="20">
          <div @click="touch">
            <video controls preload="auto" loop="loop" :poster=item.img @play="handlePlay(index)">
              <source :src=item.video type="video/mp4" />
            </video>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videos: [
        {
          title: '如何玩转嘉品优拍',
          video: require('@/assets/second.mp4'),
          img: require('@/assets/first.jpg'),
        },
        {
          title: '如何玩转嘉品优拍',
          video: require('@/assets/second.mp4'),
          img: require('@/assets/second.jpg'),
        },
      ],
    }
  },
  mounted() {
    this.videoElement = document.getElementsByTagName('video') // 获取页面上所有的video对象
  },
  methods: {
    handlePlay(index) {
      const videoElement = this.videoElement
      if (videoElement && videoElement.length > 0) {
        for (let i = 0; i < videoElement.length; i++) {
          if (i === index) {
            this.videoElement[i].play()
          } else {
            this.videoElement[i].pause()
          }
        }
      }
    },
    touch() {},
  },
}
</script>

<style scoped>
.warp {
  height: 100%;
  background: #9932cd;
}

video {
  height: 400px;
  width: 100%;
  border-radius: 25px;
  margin: 10px 0;
}

.title-text {
  margin: 10px 0;
  font-weight: 600;
  font-size: 25px;
  margin-bottom: 0px;
  cursor: pointer;
  background-image: -webkit-linear-gradient(bottom, red, #ff5f60, #f0c41b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
