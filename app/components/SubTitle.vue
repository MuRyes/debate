<template lang='pug'>
  .container(:id='index'): .box
    .row
      h2.title {{text}}
</template>

<script>
export default {
  props: ['index', 'text']
}
</script>

