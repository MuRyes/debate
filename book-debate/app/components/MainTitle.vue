<template lang='pug'>
  transition(name='slide'): .box(v-if='isFocused')
    .row
      h1.title {{title}}
      h2.subtitle(v-if='subtitle') {{subtitle}}
</template>

<script>
export default {
  props: ['index', 'title', 'subtitle'],
  computed: {
    isFocused () {
      return this.$store.state.slide === this.index
    }
  }
}
</script>

<style lang="scss" scoped>
  h1 {
    font-size: 10vh;
  }

  h2 {
    font-size: 5vh;
  }
</style>
