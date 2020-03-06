<template>
  <div>
    <div class="container" @click="handleBannerClick">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item, index) of gallaryImgs" :key="index">
          <img class="banner-img" :src="item" />
        </swiper-slide>
      </swiper>
      <div class="banner-info">
        <div class="info-l">{{singtName}}</div>
        <div class="info-r">
          {{gallaryImgs.length}}
          <span class="iconfont icon">&#xe7de;</span>
        </div>
      </div>
    </div>
    <common-fade>
      <common-gallary :imgs="gallaryImgs" v-show="showGallary" @change="handleGallaryChange"></common-gallary>
    </common-fade>
  </div>
</template>

<script>
import commonGallary from '@common/gallary/gallary'
import commonFade from '@common/fade/fadeAnimation'

export default {
  name: 'detailBanner',
  components: {
    commonGallary,
    commonFade
  },
  data () {
    return {
      showGallary: false,
      currentIndex: '',
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true,
        effect: 'coverflow',
        loop: true,
        on: {
          touchEnd: function (event) {
            console.log(event)
          }
        }
      }
    }
  },
  props: {
    gallaryImgs: Array,
    singtName: String,
    bannerImg: String
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryChange () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.container {
  position: relative;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    width: 100%;
    position: absolute;
    bottom: 0;
    font-size: 0.32rem;
    display: flex;
    justify-content: space-between;
    background: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
    color: #ffffff;
    padding: 0.2rem;
    box-sizing: border-box;
    z-index: 3;

    .info-l {
      padding-left: 0.2rem;
    }

    .info-r {
      padding-right: 0.2rem;

      .icon {
        margin-left: 0.1rem;
      }
    }
  }
}
</style>
