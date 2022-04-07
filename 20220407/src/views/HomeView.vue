<template>
  <div class="home">
    <h1>게시글 목록입니다</h1>
    <nav>
      <a v-for="n in 3" :key="n">
        <router-link :to="'/board/'+n">{{n}}</router-link> |
      </a>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>
