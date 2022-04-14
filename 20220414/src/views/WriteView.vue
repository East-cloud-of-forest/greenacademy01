<template>
  <div>
    <h1>글을 작성하는 공간입니다</h1>
    <input type="text" size="28" v-model="title"> <br>
    <textarea name="" id="" cols="30" rows="10" v-model="content"></textarea> <br>
    <button @click="addboard({title, content})">완료</button>
  </div>
</template>

<script>
export default {
  name: 'WriteView',
  data() {
    return {
      title: "",
      content: ""
    }
  },
  methods: {
    addboard(data) {
      this.$store.commit('addboard', data)
      this.$router.push('/')
    }
  },
}
</script>