<template>
  <div class="header">
    <router-link to="/">
      <div class="iconfont back">&#xe743;</div>
    </router-link>
    <p class="title">城市选择</p>
  </div>
</template>

<script>
export default {
  name: 'CityHeader',
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
@import '~@styles/varibles.styl';
@import '~@styles/mixins.styl';

.header {
  position: relative;
  background: $bgcolor;
  color: #fff;

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
