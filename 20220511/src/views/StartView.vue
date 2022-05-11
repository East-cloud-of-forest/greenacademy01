<template>
  <div>
    <div>
      <h1>메인페이지입니다</h1>
      <img :src="fnGetUser.photoURL" alt="">
      <h3>{{fnGetUser.name}}</h3>
      <p>{{fnGetUser.email}}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    fnGetUser() {
      console.log(this.$store.getters.fnGetUser)
      return this.$store.getters.fnGetUser
    }
  }
}
</script>
