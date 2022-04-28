<template>
  <div class="list">
    <h1>메모 리스트</h1>
    <table>
      <tr>
        <td>번호</td>
        <td>제목</td>
        <td>작성자</td>
      </tr>
      <tr v-for="memo in memo" :key="memo.id" @click="$router.push('/page'+memo.id)">
        <td>{{memo.id}}</td>
        <td>{{memo.title}}</td>
        <td>{{memo.wtirer}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'ListView',
  created() {
    this.$http.get('/api/memo')
      .then((res)=>{
        this.memo = res.data
      })
  },
  data() {
    return {
      memo: []
    }
  }
}
</script>

<style>
  table {
    margin: auto;
    width: 60%;
  }
</style>