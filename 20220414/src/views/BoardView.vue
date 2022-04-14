<template>
  <div class="hello">
    <h3>{{list.title}}</h3>
    <p>{{list.content}}</p>
  </div>
</template>

<script>
export default {
  name: 'BoardView',
  data() {
    return {
      list: this.$store.state.list[this.$route.params.id - 1]
    }
  }
}
</script>
