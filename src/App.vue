<template lang="pug">
  #app
    music-header
    router-view
    music-footer
</template>

<script>
import MusicFooter from '@/components/layout/Footer.vue'
import MusicHeader from '@/components/layout/Header.vue'

export default {
  name: 'app',
  components: {
    MusicFooter, MusicHeader
  }
}
</script>

<style lang="scss" >
  @import './scss/main.scss';
  .is-active {
    border: 3px #23d160 solid;
  }
  .is-danger{
    background-color: $success
  }
</style>
