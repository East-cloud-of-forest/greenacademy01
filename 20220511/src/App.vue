<template>
  <div id="app">
    <nav>
      <a v-if="fnGetAuthStatus">
        <router-link to="/start">Home</router-link> |
        <a @click="fnDoLogout">로그아웃</a> |
        <a @click="fnDelete">회원탈퇴</a>
      </a>
      <a v-else>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">회원가입</router-link>
      </a>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    fnDoLogout() {
      this.$store.dispatch('fnDoLogout')
    },
    fnDelete() {
      this.$store.dispatch('fnDelete')
    }
  },
  computed: {
    fnGetAuthStatus() {
      return this.$store.getters.fnGetAuthStatus
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: underline;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
