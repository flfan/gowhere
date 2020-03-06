<template>
  <div class="warpper">
    <div class="home-title">今日特惠</div>
    <div class="items">
      <router-link tag="div" :to="'/detail/' + item.id" class="item" v-for="item of recommendList" :key="item.id">
        <img :src="item.imgurl"/>
        <p class="item-title">{{item.title}}</p>
        <p class="item-desc">{{item.desc}}</p>
        <p class="item-price">
          <span>
            <em>￥</em>
          </span>
          <span>
            <em>{{item.price}}</em>
            <span class="unit">起</span>
          </span>
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeRecommend',
  data () {
    return {
    }
  },
  props: {
    recommendList: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~@styles/mixins.styl';

.warpper {
  padding: 0 0.2rem;
}

.home-title {
  background: #17c0c8;
  margin: 0.15rem 0;
  width: 1.5rem;
  padding: 0.15rem 0.1rem;
  text-align: center;
  color: #ffffff;
  border-radius: 0.1rem;
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
  padding-bottom: .2rem;
  .item-title{
    padding-left: .1rem;
    font-weight: bold;
  }
  .item-desc {
    padding-left: .1rem;
    ellipsis();
    color: #999;
  }

  .item-price {
    margin-top: .1rem;
    padding-left: .1rem;
    color: #ff7400;
    font-size: 0.4rem;
    font-weight: bolder;

    em {
      font-style: italic;
    }

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
