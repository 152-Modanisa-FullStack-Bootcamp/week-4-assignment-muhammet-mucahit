<template>
  <div class="favorites-page">
    <VideoBox v-for="favoriteVideo in favorites" :video="favoriteVideo" :key="favoriteVideo.id"/>
  </div>
</template>

<script>
import VideoBox from "../components/VideoBox";

export default {
  name: "Favorites",
  components: {VideoBox},
  data() {
    return {
      videos: []
    }
  },
  computed: {
    favorites() {
      return this.$store.getters.getFavorites
    }
  }
}
</script>
