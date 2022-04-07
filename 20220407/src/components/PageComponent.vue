<template>
  <div class="hello">
    <h3>{{$route.params.id}} 페이지 입니다</h3>
    <p>{{boarddata[$route.params.id - 1].memo}}</p>
  </div>
</template>

<script>
import jsondata from '../../data.json'

export default {
  name: 'PageComponent',
  data() {
    return {
      boarddata : jsondata.board
    }
  }
}
</script>