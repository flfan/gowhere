<template>
  <div class="list" ref="wrapper">
    <div class="maincontent">
      <div class="area">
        <div class="title border-topbottom">您的位置</div>
        <div class="items">
          <div class="item">{{this.currentCity}}</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="items">
          <div class="item" @click="handleCityClick(item.name)" v-for="item of hotCities" :key="item.id">{{item.name}}</div>
        </div>
      </div>
      <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="list-item" v-for="el of item" :key="el.id" @click="handleCityClick(el.name)">
          <div class="content border-bottom">{{el.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'CityList',
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick (name) {
      // this.$store.dispatch('changeCity', name)
      this.mChangeCity(name)
      this.$router.push('/')
    },
    ...mapMutations(['mChangeCity'])
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@styles/varibles.styl';
@import '~@styles/mixins.styl';

.border-topbottom {
  &:before {
    border-color: #999;
  }

  &:after {
    border-color: #999;
  }
}

.border-bottom {
  &:before {
    border-color: #aaa;
  }
}

.list {
  overflow: hidden;
  position: absolute;
  top: 1.6rem;
  bottom: 0;
  left: 0;
  right: 0;
}

.title {
  background: #eee;
  padding: 0.25rem 0.2rem;
  display: flex;
  align-items: flex-start;
}

.items {
  padding: 0.2rem 0.2rem 0 0.2rem;
  display: flex;
  flex-wrap: wrap;

  .item {
    border: #999 solid 0.01rem;
    text-align: center;
    padding: 0.1rem 0;
    border-radius: 0.06rem;
    width: 30%;
    margin: 0 0.2rem 0.2rem 0;
  }
}

.list-item {
  .content {
    padding-left: 0.2rem;
    padding: 0.25rem 0.2rem;
    display: flex;
    align-items: flex-start;
  }
}
</style>
