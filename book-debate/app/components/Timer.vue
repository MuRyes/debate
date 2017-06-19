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
const filter = (v) => String(v).split('').reduce((pv, cv, index) => index == 1 ? (hangulMap[pv] + (cv == 0 ? '' : '십' + hangulMap[cv])) : hangulMap[cv])

export default {
  props: ['time'],
  data: function () {
    return {
      minutes: Number(this.time.split(':')[0]),
      seconds: Number(this.time.split(':')[1]),
      computedMinutes: filter(this.time.split(':')[0]),
      computedSeconds: filter(this.time.split(':')[1]),
      run: false,
      resetting: false
    }
  },

  watch: {
    minutes () {
      this.computedMinutes = filter(this.minutes)
    },
    seconds () {
      this.computedSeconds =  filter(this.seconds)
    }
  },
  methods: {
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
      this.resetting = true
      this.minutes = Number(this.time.split(':')[0])
      this.seconds = Number(this.time.split(':')[1])
      // TODO : Vue.set
    },

    callback () {
      if(this.resetting)
        return (this.resetting = false)
      if (this.seconds == 0)
        this.minutes--, this.seconds = 59;
      else 
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
    position: fixed;
  }
</style>
