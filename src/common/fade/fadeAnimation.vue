<template>
    <transition>
        <slot></slot>
    </transition>
</template>//在gallary中使用有问题

<script>
export default {
  name: 'commonFade'
}
</script>

<style lang="stylus" scoped>
  .v-enter, .v-leave-to
      opacity 0
  .v-enter-active, .v-leave-active
      transition opacity 0.5s
</style>
