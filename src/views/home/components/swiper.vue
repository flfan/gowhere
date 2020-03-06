<template>
  <div class="wrapper" >
    <swiper :options="swiperOption" v-if="swiperShow">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img :src="item.imgurl" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'homeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        speed: 1000,
        autoplay: 2000,
        autoplayDisableOnInteraction: false
        // speed: 1000,
        // autoplay: {
        //   delay: 500,
        //   stopOnLastSlide: true,
        //   disableOnInteraction: true
        // }
      }
    }
  },
  props: {
    swiperList: Array
  },
  computed: {
    swiperShow () {
      return this.swiperList.length
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff;
}

.wrapper >>> .swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 30px;
  left: 0;
  width: 100%;
}

.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  background-color: #eee;
  padding-bottom: 30.45%;

  img {
    width: 100%;
  }
}
</style>
