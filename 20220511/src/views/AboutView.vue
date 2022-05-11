<template>
  <div class="about">
    <h1>회원가입 페이지입니다</h1>
    이메일 <input type="text" v-model="Email"> <br>
    비밀번호 <input type="password" v-model="Password"> <br>
    <button @click="fnRegi">회원가입</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Email: '',
      Password: ''
    }
  },
  methods: {
    fnRegi() {
      this.$store.dispatch('fnRegi', {
        pEmail : this.Email,
        pPassword : this.Password
      })
    }
  },
}
</script>