<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back">&#xe743;</div>
    </div>
    <div class="header-input">
      <div class="iconfont search">&#xe6a5;</div>输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        <div class="hr-content">{{this.city}}</div>
        <div class="iconfont arrow">&#xe600;</div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
  // props: {
  //   city: String
  // }
}
</script>

<style lang="stylus" scoped>
@import '~@styles/varibles.styl';
@import '~@styles/mixins.styl';

.header {
  display: flex;
  box-sizing: border-box;
  line-height: .86rem;
  background-color: $bgcolor;
  color: #fff;

  .header-left {
    width: 0.64rem;
    float: left;

    .back {
      backarrow();
    }
  }

  .header-input {
    flex: 1;
    height: 0.64rem;
    // line-height: 0.64rem;
    align-items: center;
    margin-left: 0.2rem;
    margin-top: 0.12rem;
    background-color: #fff;
    border-radius: 0.1rem;
    color: #ccc;
    padding-left: 0.2rem;
    display: flex;

    .search {
      padding-right: 0.2rem;
    }
  }

  .header-right {
    padding: 0 0.1rem;
    min-width: 1.24rem;
    float: right;
    // text-align: center;
    // display: flex;
    // align-items: center;
    // justify-content: space-around;
    color: #fff;
    // display: inline-block;

    .hr-content{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      float: left ;
      width: 50%;
    }
    .arrow {
      margin-left: 0.7rem;
      font-size: 0.4rem;
      margin-top: -0.01rem;
    }
  }
}
</style>
