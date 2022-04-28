<template>
  <div class="page">
    <h1>{{memo.title}}</h1>
    <p>{{memo.memo}}</p>
  </div>
</template>

<script>
export default {
  name: "PageView",
  created() {
    this.$http.get('/api/memo/'+this.$route.params.id)
      .then((res)=>{
        this.memo = res.data
      })
  },
  data() {
    return {
      memo: {}
    }
  }
}
</script>