<template>
  <div>
    <h1>시작페이지</h1>
    <p @click="fnDoGoogleLogin_popup" style="cursor: pointer;">구글로그인</p>
    <p @click="$router.push('/login')" style="cursor: pointer;">이메일로그인</p>
  </div>
</template>

<script>
export default {
  methods: {
    fnDoGoogleLogin_popup() {
      this.$store.dispatch('fnDoGoogleLogin_popup')
    },
  },
}
</script>
