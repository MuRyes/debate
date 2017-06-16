<template lang='pug'>
  #app(v-on:keyup='next()')
    .container
      main-title(:index='0', title='독서 디베이트', subtitle='1학년 4반')
      timer-slide(:index='1', text='1. 개회와 도서 선정 이유', speaker='사회자', time='2:00')
      timer-slide(:index='2', text='2. 저자의 시대와 삶', speaker='저자조사자', time='3:00')
      timer-slide(:index='3', text='3. 주요 내용 발췌', speaker='발췌자', time='5:00')
      timer-slide(:index='4', text='4. 첫번째 핵심개념', speaker='핵심개념 설명자', time='2:00')
      timer-slide(:index='5', text='5. 두번째 핵심개념', speaker='핵심개념 설명자', time='2:00')
      timer-slide(:index='6', text='6. 논제 소개', speaker='영상 자료', time='1:00')
      timer-slide(:index='7', text='7. 찬반 토론', speaker='1회전', time='20:00')
      timer-slide(:index='8', text='7. 찬반 토론', speaker='2회전', time='20:00')
      timer-slide(:index='9', text='7. 찬반 토론', speaker='3회전', time='20:00')
      timer-slide(:index='10', text='8. 배심원 토론', speaker='다같이', time='10:00')
      timer-slide(:index='11', text='9. 선생님 강평', speaker='김태철 선생님', time='4:00')
      timer-slide(:index='12', text='10. 폐회와 다음 토론 안내', speaker='사회자', time='1:00')
    fixed-timer
</template>

<script>
  import 'notosans-fontface/css/notosans-fontface.min.css'
  import 'typeface-dohyeon'
  import 'skeleton-css/css/normalize.css'
  // import 'skeleton-css/css/skeleton.css'
  import './app.scss'

  import MainTitle from './components/MainTitle.vue'
  import SubTitle from './components/SubTitle.vue'
  import TimerSlide from './components/TimerSlide.vue'
  import FixedTimer from './components/FixedTimer.vue'

  import {mapActions} from 'vuex'

  export default {
    components: {
      'main-title': MainTitle,
      'sub-title': SubTitle,
      'timer-slide': TimerSlide,
      'fixed-timer': FixedTimer
    },
    methods: {
      ...mapActions([
        'next',
        'previous'
      ])
    },
    created () {
      window.addEventListener('keyup', (e) => {
        switch (e.keyCode) {
          // LEFT
          case 37:
            this.previous()
            break
          // RIGHT
          case 39:
            this.next()
            break
        }
      })
    }
  }
</script>
