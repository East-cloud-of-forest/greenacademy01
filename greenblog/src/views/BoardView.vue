<template>
  <div class="borad">
    <h1>게시글 목록입니다</h1>
    
    <a v-for="n in 10" :key="n">
      <router-link :to="'/board/'+n"> {{n}} </router-link>|
    </a>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name : 'BoardView'
}
</script>