<template>
  <div class="video-card">
    <div class="image-container">
      <router-link :to="{name: 'Watch', query:{id: video.id}}">
        <img :src="video.coverImage" alt="Video Image" class="cover-image" width="100%" height="auto">
      </router-link>
      <button v-text="favoriteButtonText" @click="this.toggleFavorite"></button>
    </div>

    <div class="information">
      <img :src="video.ownerImage" alt="Owner Image" class="owner-image">
      <div class="video-information">
        <h3>{{ video.title }}</h3>
        <h4>{{ video.ownerName }}</h4>
        <div class="statistic">
          <span>{{ video.viewCount }}</span>
          <span>---</span>
          <span>{{ video.publishDateInMonth }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {mapActions} from "vuex";

export default {
  name: 'VideoBox',
  props: {
    video: Object,
  },
  computed: {
    favoriteButtonText() {
      return this.$store.getters.isFavorite(this.video) ? '★' : '☆';
    }
  },
  methods: {
    toggleFavorite() {
      this.toggleFavorites(this.video)
    },
    ...mapActions(["toggleFavorites"])
  }
}
</script>

<style scoped>
h3, h4 {
  margin: 0;
}

.image-container {
  position: relative;
  width: 360px;
  height: 200px;
}

.image-container button {
  position: absolute;
  top: 3%;
  right: 3%;
  background-color: #555;
  color: white;
  font-size: 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.video-card {
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 360px;
  height: 360px;
  background-color: lightgray;
}

img.owner-image {
  height: 36px;
  width: 36px;
  border-radius: 50%;
}

.video-card .information {
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-content: center;
}

.video-card .video-information {
  display: flex;
  flex-direction: column;
  padding: 2px 12px;
  width: 300px;
}

.statistic {
  display: flex;
}

</style>
