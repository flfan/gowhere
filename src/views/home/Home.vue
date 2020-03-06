<template>
  <div class="home">
    <!-- <home-header :city="city"></home-header> -->
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-hotholiday :hotholidayList="hotholidayList"></home-hotholiday>
  </div>
</template>

<script>
import HomeHeader from './components/header'
import homeSwiper from './components/swiper'
import homeIcons from './components/icons'
import homeRecommend from './components/recommend'
import homeHotholiday from './components/hotholiday'
import axios from 'axios'
import { mapState } from 'vuex'
// @ is an alias to /src
export default {
  name: 'Home',
  data () {
    return {
      swiperList: [],
      recommendList: [],
      iconList: [],
      hotholidayList: [],
      lastCity: ''
    }
  },
  components: {
    HomeHeader,
    homeSwiper,
    homeIcons,
    homeRecommend,
    homeHotholiday
    // HomeHeader: HomeHeader
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        const { iconList, swiperList, hotholidayList, recommendList } = data
        this.iconList = iconList
        this.swiperList = swiperList
        this.recommendList = recommendList
        this.hotholidayList = hotholidayList
      }
    }
  },
  computed: {
    ...mapState(['city'])
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    // console.log(this.lastCity, this.city)
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>
