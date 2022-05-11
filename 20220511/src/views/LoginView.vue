<template>
  <div class="login">
    <h1>로그인 페이지입니다</h1>
    이메일
    <input type="text" v-model="Email" />
    <br />
    비밀번호
    <input type="password" v-model="Password" />
    <br />
    <button @click="fnDologin">로그인</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Email: '',
      Password: '',
    }
  },
  methods: {
    fnDologin() {
      this.$store.dispatch('fnDologin', {
        pEmail: this.Email,
        pPassword: this.Password,
      })
    },
  },
}
</script>
