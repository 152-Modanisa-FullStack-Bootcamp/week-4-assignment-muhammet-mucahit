<template>
  <div id="app">
    <div class="navbar">
      <router-link :to="{name: 'HomePage'}" class="navbar-link">Home</router-link>
      <router-link :to="{name: 'Favorites', params: {userid: 'bootcamp'}}" class="navbar-link">
        Favorites
      </router-link>
    </div>
    <div class="body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'App',
  methods: {
    ...mapActions(["fetchVideos"])
  },
  async created() {
    await this.fetchVideos()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.navbar {
  display: flex;
  justify-content: space-between;
  background-color: #2c3e50;
  padding: 30px;
}

.body {
  margin-top: 30px;
}

.navbar-link {
  color: white;
}

</style>
