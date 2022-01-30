<template>
  <div class="homepage">
    <VideoBox v-for="video in videos" :key="video.id" :video="video"/>
  </div>
</template>

<script>
import VideoBox from "../components/VideoBox";

export default {
  name: "Home",
  components: {VideoBox},
  computed: {
    videos() {
      return this.$store.getters.getVideos;
    }
  },
}
</script>

<style scoped>
div.homepage {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}
</style>
