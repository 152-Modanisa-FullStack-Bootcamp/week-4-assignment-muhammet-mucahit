import Vue from "vue";
import Vuex from 'vuex'
import API from "@/api";

Vue.use(Vuex)

const api = new API("https://my-json-server.typicode.com/modanisa/bootcamp-video-db");

export const state = {
  videos: [],
  favorites: []
}

export const getters = {
  getFavorites: state => state.favorites,
  getVideos: state => state.videos,
  isFavorite: (state) => (item) => state.favorites.find(i => i.id === item.id)
}

export const mutations = {
  addToFavorites(state, item) {
    state.favorites.push(item)
  },
  removeFromFavorites(state, item) {
    state.favorites = state.favorites.filter(i => i !== item)
  },
  FETCH_VIDEOS(state, videos) {
    state.videos = videos
  }
}

export const actions = {
  async toggleFavorites(context, item) {
    if (state.favorites.includes(item)) {
      // If favorites includes the item then remove it
      item.favorite = false
      context.commit('removeFromFavorites', item)
    } else {
      // If favorites doesn't include the item then add it
      item.favorite = true
      context.commit('addToFavorites', item)
    }
    console.log(state.favorites, JSON.stringify(state.favorites), "1")
    // localStorage.setItem("favorites", JSON.stringify(state.favorites))
    await api.updateVideo(item.id, {"favorite": item.favorite})
  },
  async fetchVideos({commit}) {
    // let fav = JSON.parse(localStorage.getItem("favorites") || [])
    // state.favorites = fav
    await api.getVideoList()
      .then((response) => {
        commit("FETCH_VIDEOS", response);
      })
      .catch((error) => {
        console.log(error.statusText)
      });
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {}
})
