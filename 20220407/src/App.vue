<template>
  <div id="app">
    <div v-if="login">
      <button @click="$router.push('/')">글목록</button>
      <button @click="$router.push(`/user/${user}`)">green님의 정보</button>
      <button @click="logOut">로그아웃</button>
    </div>
    <button v-else @click="$router.push('/login')">로그인</button>
    
    <router-view @login-user="loginUser" />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>
export default {
  data() {
    return {
      login : false,
      user : ""
    }
  },
  methods: {
    loginUser(user) {
      this.user = user
      this.login = true
    },
    logOut() {
      this.user = ""
      this.login = false
      this.$router.push('/')
    }
  },
}
</script>