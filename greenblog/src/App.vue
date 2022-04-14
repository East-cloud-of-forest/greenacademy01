<template>
  <div id="app">
    <v-app>
      <v-app-bar app color="primary" dark>
        <v-toolbar-title @click="$router.push('/')"><h2>Blog</h2></v-toolbar-title>
        <v-spacer></v-spacer>
        
        <div v-if="login">
          <v-btn class="mr-2" outlined @click="$router.push('/board')">글 목록</v-btn>
          <v-btn class="mr-2" outlined @click="$router.push('/user/'+username)">{{username}}님의 정보</v-btn>
          <v-btn @click="logOut">로그아웃</v-btn>
        </div>

        <v-btn v-else @click="$router.push('/login')">로그인</v-btn>
      </v-app-bar>


      <v-main>
        <router-view @login-user="loginUser" />
      </v-main>
    </v-app>
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

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
export default {
  name: "app",
  data() {
    return {
      login : false,
      username : "",
    }
  },
  methods: {
    loginUser(user) {
      this.username = user
      this.login = true
    },
    logOut() {
      this.username = ''
      this.login = false
      this.$router.push('/')
    }
  },
}
</script>