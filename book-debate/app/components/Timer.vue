<template lang='pug'>
  div
    .block
      .digit
    .block
      .digit
</template>
<script>
export default {
  props: ['time'],
  data: function () {
    return {
      minutes: this.time.split(':')[0],
      seconds: this.time.split(':')[1],
      started: false
    }
  },
  methods: {
    toggle () {
      this.started = !this.started
    },

    reset () {
      this.minutes = this.time.split(':')[0]
      this.seconds = this.time.split(':')[1]
    },

    callback () {
      if (this.seconds === 0) {
        this.minutes--
        this.seconds = 58
      }
      this.seconds++
    }
    // TODO 알림 소리
    // 소리 테스트 버튼도.
  }
}
</script>
<style lang='scss' scoped>

</style>
