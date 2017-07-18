<template lang="pug">
  section.hero.is-success
    .hero-head
      header.nav
        .container
          .nav-left
            .nav-item
              strong 🎵 Music.me
          .nav-right.nav-menu
            router-link.nav-item(to='/') Buscar
            router-link.nav-item(to='about') Nosotros

    .hero-body
      .container.has-text-centered
        h1.title Music.me
        h2.subtitle Canciones que estan Vue-nisimas!!
        music-player
</template>
<script>
  import MusicPlayer from '@/components/Player.vue'
  export default {
    components: {
      MusicPlayer
    }
  }
</script>
