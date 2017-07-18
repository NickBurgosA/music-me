<template lang="pug">
  main
    transition(name='move')
      music-notification(v-show='showNotification')
        p(slot='body') No se encontraron resultados

    transition(name='move')
      music-loader(v-show='isLoading')
    section.section(v-show='!isLoading')
      nav.nav
        .container
          input.input.is-large(v-model='searchQuery',
                              type='text', placeholder='Busca tus canciones',
                              @keyup.enter='search')
          a.button.is-info.is-large(@click='search') Buscar
          a.button.is-danger.is-large &times;
      .container
        transition(name='move')
          music-notification(v-show='showResults', :isResult='showResults')
            p(slot='body') Canciones encontradas {{ results }}

      .container
        .columns.is-multiline
          .column.is-one-quarter(v-for='t in tracks')
            music-track(:track='t',
                        @select='setSelectedTrack',
                        :class='{ "is-active": t.id === selectedTrack }',
                        v-blur='t.preview_url')
</template>

<script>
import trackService from '@/services/track'

import MusicTrack from '@/components/Track.vue'

import MusicLoader from '@/components/shared/Loader.vue'
import MusicNotification from '@/components/shared/Notification.vue'

export default {
  name: 'app',
  components: {
    MusicTrack, MusicLoader, MusicNotification
  },
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      selectedTrack: '',
      showNotification: false,
      results: 0,
      showResults: false
    }
  },
  methods: {
    search () {
      if (!this.searchQuery) return
      this.isLoading = true
      trackService.search(this.searchQuery).then(res => {
        this.showNotification = res.tracks.total === 0
        this.results = res.tracks.total
        this.showResults = this.results > 0
        this.tracks = res.tracks.items
        this.isLoading = false
      })
    },
    reset () {

    },
    setSelectedTrack (id) {
      this.selectedTrack = id
    }

  },
  computed: {
    searchMessagge () {
      return `Resultados ${this.tracks.length}`
    }
  },
  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  }
}
</script>

<style lang="scss" >
  .is-active {
    border: 3px #23d160 solid;
  }
</style>
