<template>
    <div>
        <div class="container" @click="handleGallaryClick">
            <div class="wrapper">
                <swiper :options="swiperOption">
                <!-- slides -->
                <swiper-slide v-for="(item, index) of imgs" :key="index">
                    <img class="wrapper-img" :src="item" />
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'commonGallary',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true,
        effect: 'coverflow',
        loop: true
      }
    }
  },
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('change')
    }
  }
}
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container
  overflow inherit
.container
  position fixed
  top 0
  bottom 0
  right 0
  left 0
  background #000
  display flex
  flex-direction column
  justify-content center
  z-index 99
  .wrapper
    overflow hidden
    height 0
    width 100%
    padding-bottom 100%
    .wrapper-img
      width 100%
    .swiper-pagination
      color #ffffff
      bottom -1rem

</style>
