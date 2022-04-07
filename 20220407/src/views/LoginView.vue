<template>
  <div>
    아이디 <input type="text" v-model="id"> <br>
    패스워드 <input type="password"> <br>
    <button @click="loginUser">로그인</button>
    <button>취소</button>
  </div>
</template>

<script>
export default {
  name : "LoginView",
  data() {
    return {
      id: "",
    }
  },
  methods: {
    loginUser() {
      this.$emit('login-user', this.id)
      this.$router.push('/')
    }
  },
}
</script>