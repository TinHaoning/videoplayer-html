<template>
  <div>
    <div v-for="(item,index) in videos" :key="index" class="warp">
      <van-row type="flex" justify="center">
        <van-col style="margin-top:45px">
          <span class="title-tip">{{item.title}}</span>
        </van-col>
      </van-row>
      <van-row type="flex" justify="center">
        <van-col style="margin-top:15px">
          <span class="title-text">{{item.titleText}}</span>
        </van-col>
      </van-row>
      <van-row type="flex" justify="center">
        <van-col span="20" style="margin-top:25px">
          <div class="videobox">
            <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions" @play="onPlayerPlay($event)" @pause="onPlayerPause($event)">
            </video-player>
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
      playerOptions: {},
      videos: [
        {
          title: '1.如何玩转嘉品优拍',
          titleText: '第一步:选购商品,交纳保证金',
          video: require('@/assets/first.mp4'),
          img: require('@/assets/first.jpg'),
        },
        {
          title: '2.如何参加活动',
          titleText: '第二步:参与竞拍,加价得利',
          video: require('@/assets/second.mp4'),
          img: require('@/assets/second.jpg'),
        },
      ],
    }
  },
  mounted() {
    this.videoData()
  },
  methods: {
    videoData() {
      // console.log(this.videos[0])
      for (let i of this.videos) {
        console.log(i)
        this.playerOptions = {
          playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
          autoplay: false, //如果true,浏览器准备好时开始回放。
          muted: false, // 默认情况下将会消除任何音频。
          loop: false, // 导致视频一结束就重新开始。
          preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: 'zh-CN',
          aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [
            {
              type: 'video/mp4',
              src: i.video, //url地址
            },
          ],
          poster: i.img, //你的封面地址
          // width: document.documentElement.clientWidth,
          notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
          controlBar: {
            timeDivider: true,
            durationDisplay: true,
            remainingTimeDisplay: false,
            fullscreenToggle: true, //全屏按钮
          },
        }
      }
    },
    full(element) {
      //做兼容处理
      // W3C
      if (element.requestFullscreen) {
        element.requestFullscreen()
      }
      // FireFox
      else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen()
      }
      // IE/Edge
      else if (element.msRequestFullscreen) {
        element.msRequestFullscreen()
      } else if (element.oRequestFullscreen) {
        element.oRequestFullscreen()
      }
      // Chrome, Safari and Opera
      else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullScreen()
      } else {
        var docHtml = document.documentElement
        var docBody = document.body
        var videobox = document.getElementsByClassName('video-player')
        var cssText = 'width:100%;height:100%;overflow:hidden;'
        docHtml.style.cssText = cssText
        docBody.style.cssText = cssText
        videobox.style.cssText = cssText + ';' + 'margin:0px;padding:0px;'
        document.IsFullScreen = true
      }
    },
    onPlayerPlay(player) {
      this.full(player)
    },
  },
}
</script>

<style scoped>
.warp {
  height: 100%;
  /* background: #9932cd; */
}
>>> .vjs-poster {
  background-size: cover;
}

>>> .vjs-custom-skin > .video-js {
  height: 400px;
  width: 100%;
  border-radius: 15px;
  margin: 10px 0;
}

.title-tip {
  margin: 10px 0;
  font-weight: 600;
  font-size: 25px;
  margin-bottom: 0px;
  cursor: pointer;
  color: #ffffff;
  /* background-image: -webkit-linear-gradient(bottom, red, #ff5f60, #f0c41b); */
  /* -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
}
.title-text {
  color: #ffffff;
  font-size: 17px;
  font-weight: 400;
}
</style>
