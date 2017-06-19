<template lang='pug'>
  transition(name='slide'): .box(v-if='isFocused')
      .row
        h1.title {{text}}
        //transition(name='slide')
        timer(v-if='showTimer',:time='time')
</template>
<script>
import Timer from './Timer.vue'

export default {
  components: {
    Timer
  },
  props: ['index', 'text', 'time'],
  data: () => ({
    showTimer: true
  }),
  computed: {
    isFocused () {
      return this.$store.state.slide === this.index
    }
  },
  methods: {
    showTimer () {

    },
    titleToTop () {

    }
  }
}
</script>
<style lang='scss' scoped>
  h1 {
    font-size: 4vw;
    animation-delay: 2s;
    animation-duration: 2s;
    animation-name: go-top;
    animation-fill-mode: forwards;
    // TODO mixin
  }


  @keyframes go-top {
    to {
      font-size: 2.5vw;
      transform: translateY(-30vh) translateX(-20vw);
    }
  }
</style>
