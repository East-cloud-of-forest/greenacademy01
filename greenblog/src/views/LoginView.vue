<template>
  <v-container>
    <v-card class="pa-10">
      <v-text-field label="아이디" v-model="user" outlined></v-text-field>
      <v-text-field label="패스워드" outlined type="password"></v-text-field>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="$router.push('/')">취소</v-btn>
        <v-btn @click="loginUser">로그인</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      user : "",
    }
  },
  methods: {
    loginUser() {
      this.$emit('login-user', this.user)
      this.$router.push('/')
    }
  },
}
</script>