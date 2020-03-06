<template>
  <div>
    <detail-banner :gallaryImgs="gallaryImgs" :singtName="singtName" :bannerImg="bannerImg"></detail-banner>
    <detail-header></detail-header>
    <detail-list :lists="categoryList"></detail-list>
    <!-- <div class="he" style="height:50rem"></div> -->
  </div>
</template>

<script>
import detailBanner from './components/banner'
import detailHeader from './components/header'
import detailList from './components/list'
import axios from 'axios'

export default {
  name: 'detail',
  components: {
    detailBanner,
    detailHeader,
    detailList
  },
  data () {
    return {
      categoryList: [],
      singtName: '',
      bannerImg: '',
      gallaryImgs: []
    }
  },
  methods: {
    getDetailInfo () {
      axios
        .get('/api/detail.json', {
          params: {
            id: this.$route.params.id
          }
        })
        .then(this.handleAxiosSucc)
    },
    handleAxiosSucc (res) {
      res = res.data

      if (res.ret && res.data) {
        const data = res.data
        this.singtName = data.singtName
        this.gallaryImgs = data.gallaryImgs
        this.categoryList = data.categoryList
        this.bannerImg = data.bannerImg
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped></style>
