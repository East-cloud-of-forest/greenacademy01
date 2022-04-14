<template>
  <div class="home">
    <table>
      <tr>
        <td>번호</td>
        <td>제목</td>
        <td>클릭횟수(조회수)</td>
      </tr>
      <tr v-for="list in list" :key="list.id"
      @click="clickboard(list.id)">
        <td>{{list.id}}</td>
        <td>{{list.title}}</td>
        <td>{{list.click}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      list : this.$store.state.list
    }
  },
  methods: {
    clickboard(id) {
      this.$router.push('/board/'+id)
      this.$store.commit('clickboard', id)
    }
  },
}
</script>
