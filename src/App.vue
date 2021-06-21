<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <h1>Welcom to dynamic Components!</h1>
    <ul class="nav nav-tabs">
    <!-- 조건에 따라 'active' 클래스를 설정 -->
      <li v-for="page in pages" :class="isActivePage(page) ? 'active' : ''">
        <a @click="setPage(page)"> {{page | capitalize}}</a>
      </li>
    </ul>
    <components :is="activePage"></components>
  </div>
</template>

<script>
import Vue from 'vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Stories from './components/Stories.vue'
import Famous from './components/Famous.vue'

Vue.filter('capitalize', function (value){
  return value.charAt(0).toUpperCase() + value.substr(1)
})

export default {
  name: 'App',

  components: {
    Login,
    Register,
    Stories,
    Famous
  },

  data() {
    return {
      pages: [
        'stories',
        'register',
        'login'
      ],
      activePage: 'stories'
    }
  },
  methods: {
    setPage (newPage) {
      this.activePage = newPage
    },
    isActivePage (page) {
      this.activePage === page;
    }
  }
}
</script>
