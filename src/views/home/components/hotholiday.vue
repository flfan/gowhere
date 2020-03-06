<template>
  <div class="warpper">
    <div class="home-title">
      <span class="iconfont tree">&#xe6ab;</span>
      当季热门度假
    </div>
    <div class="items">
      <div class="item" v-for="item of hotholidayList" :key="item.id">
        <img :src="item.imgurl" />
        <div class="position">
          <p class="fromto">
            <span class="from">{{item.from}}</span>
            <span>&nbsp;-&nbsp;</span>
            <span class="to">{{item.to}}</span>
          </p>
          <p class="msg">{{item.msg}}</p>
        </div>
        <p class="item-desc">{{item.desc}}</p>
        <p class="item-price">
          <span>
            <em>￥</em>
          </span>
          <span>
            <em>{{item.price}}</em>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeHotholiday',
  data () {
    return {
    }
  },
  props: {
    hotholidayList: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~@styles/mixins.styl';

.warpper {
  padding: 0 0.2rem;
}

.home-title {
  margin: 0.15rem 0;
  padding: 0.15rem 0.1rem;
  font-size: 0.4rem;
  font-weight: bolder;

  .tree {
    color: #00bcd4;
    font-size: 0.45rem;
    padding-right: 0.1rem;
  }
}

.items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.item {
  width: 49%;
  border-radius: 0.1rem;
  line-height: 0.45rem;
  margin-bottom: 0.2rem;
  box-shadow: 0px 4px 8px 0px #d8d8d8;
  padding-bottom: 0.2rem;
  position: relative;

  .position {
    position: absolute;
    margin: 0 auto;
    width: 2rem;
    background: rgba(0, 0, 0, 0.6);
    top: 1.15rem;
    color: #fff;
    text-align: center;
    padding: 0.07rem;
    left: 0;
    right: 0;

    .msg {
      color: #ffde00;
    }
  }

  .item-desc {
    padding-left: 0.1rem;
    font-weight: bold;
    ellipsis();
  }

  .item-price {
    margin-top: 0.1rem;
    padding-left: 0.1rem;
    color: #ff7400;
    font-size: 0.4rem;
    font-weight: bolder;

    .unit {
      margin-left: 0.1rem;
      font-size: 0.28rem;
    }
  }

  img {
    width: 100%;
    border-radius: 0.1rem;
  }
}
</style>
