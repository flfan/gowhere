<template>
  <div>
    <div class="list" v-for="(item, index) of lists" :key="index">
      <div class="content border-bottom">{{item.title}}</div>
      <div class="child" v-if="item.children">
        <detail-list :lists="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailList',
  data () {
    return {}
  },
  props: {
    lists: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~@styles/varibles.styl';
@import '~@styles/mixins.styl';

.list {
  font-size: 0.4rem;

  & > .content {
    padding: 0.2rem;
    background: $bgcolor;
    color: #ffffff
  }

  .child {
    padding-left: 0.2rem;
    background: #ffffff;

    .list {
      .content {
        background: #fff;
        color: #000
      }
    }
  }
}
</style>
