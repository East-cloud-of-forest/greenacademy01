<template>
  <div class="write">
    <h1>메모 작성</h1>
    <form action="/api/memo" method="post">
      <input type="text" name="title"> <br> <br>
      <textarea name="memo" cols="22" rows="10"></textarea> <br> <br>
      <input type="submit" value="전송">
    </form>
  </div>
</template>

<script>
export default {
  name: "WriteView"
}
</script>