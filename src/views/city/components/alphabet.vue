<template>
  <div class="alphabet">
    <div
      class="item"
      v-for="item in letters"
      v-bind:key="item"
      :ref="item"
      @click="handleLetterClick"
      @touchstart.prevent="handletouchStart"
      @touchmove="handletouchMove"
      @touchSend="handletouchEnd"
    >{{item}}</div>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (const i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs.A[0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handletouchStart () {
      this.touchStatus = true
    },
    handletouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index <= this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)// 页面卡顿，跳帧
      }
    },
    handletouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@styles/varibles.styl';
@import '~@styles/mixins.styl';

.alphabet {
  position: absolute;
  color: $bgcolor;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 0.4rem;
  font-size: 0.32rem;
  margin-right: 0.05rem;

  .item {
    margin-bottom: 0.1rem;
  }
}
</style>
