<template>
<div>
  <div class="search">
    <input class="input" type="text" placeholder="输入城市名或拼音" v-model="keyword"/>
  </div>
  <div class="search-content" ref="search" v-show="keyword">
    <ul>
      <li class="border-bottom" @click="handleCityClick(item.name)" v-for="item of list" :key="item.id">{{item.name}}</li>
      <li class="border-bottom" v-show="hasNoData">没有该城市</li>
    </ul>
  </div>
</div>

</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'

export default {
  name: 'CitySearch',
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  methods: {
    handleCityClick (name) {
      // this.$store.dispatch('changeCity', name)
      this.mChangeCity(name)
      this.$router.push('/')
    },
    ...mapMutations(['mChangeCity'])
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  mounted () {
    this.sScroll = new Bscroll(this.$refs.search)
  },
  props: {
    cities: Object
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        if (!this.keyword) {
          this.list = []
          return
        }
        const result = []
        // eslint-disable-next-line prefer-const
        for (let i in this.cities) {
          this.cities[i].forEach(element => {
            if (element.spell.indexOf(this.keyword) > -1 || element.name.indexOf(this.keyword) > -1) {
              result.push(element)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@styles/varibles.styl';
@import '~@styles/mixins.styl';

.search {
  background: $bgcolor;
  padding: 0 0.1rem;
  height: 0.72rem;

  .input {
    width: 100%;
    text-align: center;
    border-radius: 0.06rem;
    height: 0.62rem;
    // line-height .62rem
    padding: 0 0.2rem;
    box-sizing: border-box;
    color: #666;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }
}

.search-content
  position absolute
  top 1.6rem
  background #eee
  left 0
  right 0
  bottom 0
  overflow hidden
  z-index 1
  ul
    li
      padding-left: 0.2rem;
      padding: 0.25rem 0.2rem;
      display: flex;
      background #fff
      // align-items: flex-start;
</style>
