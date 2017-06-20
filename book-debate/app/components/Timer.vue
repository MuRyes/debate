<template lang='pug'>
  .timer
    .block
      .digit {{computedMinutes}}분
    .block
      .digit {{computedSeconds}}초
    button(@click='toggle') 시작/정지
    button(@click='reset') 초기화
</template>
<script>
const hangulMap = ['영', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구', '십']

export default {
  props: ['time'],
  data: function () {
    return {
      minutes: Number(this.time.split(':')[0]),
      seconds: Number(this.time.split(':')[1]),
      run: false,
      resetting: false,
      expired: false
    }
  },

  computed: {
    computedMinutes () {
      return this.filter(Number(this.minutes))
    },
    computedSeconds () {
      return this.filter(Number(this.seconds))
    }
  },

  methods: {
    filter: (v) => String(v).split('').reduce((pv, cv, index, arr) => (index === 1 ? (pv === '일' ? '' : pv) + ((cv === '0') ? '십' : '십' + hangulMap[cv]) : hangulMap[cv]), 0),
    toggle () {
      this.run = !this.run
      this.start()
    },
    start () {
      if(this.run)
        setTimeout(this.callback, 1000)
    },
    reset () {
      clearTimeout(this.callback)
      this.run = false
      this.expired = false
      this.resetting = true
      this.minutes = Number(this.time.split(':')[0])
      this.seconds = Number(this.time.split(':')[1])
    },

    callback () {
      if(this.resetting)
        return (this.resetting = false)
      if(this.expired) {
        if(this.seconds == 59) {
          this.seconds = 0
          this.minutes++
          return this.start()
        }
        this.seconds++
        return this.start()
      }
      if(this.minutes == 0 && this.seconds == 0)
        return (this.expired = true, this.seconds = 1, this.start())
      if(this.seconds == 0) {
        this.minutes--
        this.seconds = 59
      }
      this.seconds--
      return this.start()
    }
    // TODO 알림 소리
    // 소리 테스트 버튼도.
  }
}
</script>
<style lang='scss' scoped>
  .timer {
    position: relative;
  }
</style>
