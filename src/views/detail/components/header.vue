<template>
  <div class="header">
    <router-link tag="div" to="/" class="abs" v-show="showAbs">
      <div class="iconfont abs-back">&#xe743;</div>
    </router-link>
    <div class="fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link tag="div" to="/" class="iconfont back">&#xe743;</router-link>
      <div class="title">景点详情</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const scrollTop = document.documentElement.scrollTop
      if (scrollTop > 46) {
        let opacity = scrollTop / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
      // console.log('scroll')
    }
  },
  activated () {
    window.document.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.document.removeEventListener('scroll', this.handleScroll)
  },
  mounted () {
    window.document.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.document.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~@styles/varibles.styl';
@import '~@styles/mixins.styl';

.abs {
  position: absolute;
  top: 0.1rem;
  left: 0.1rem;
  background: rgba(0, 0, 0, 0.8);
  width: 0.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  border-radius: 50%;
  z-index: 8;
  color: #ffffff;

  // font-size .4rem !important
  .abs-back {
    font-size: 0.8rem;
  }
}
.he{
    height: 50rem;
  }

.fixed {
  position: fixed;
  background: $bgcolor;
  color: #fff;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 8;

  .title {
    text-align: center;
    font-size: 0.32rem;
    height: $headerHeight;
    line-height: $headerHeight;
    padding: 0.1rem 0;
  }

  .back {
    position: absolute;
    backarrow();
    padding-top: 0.04rem;
  }
}
</style>
