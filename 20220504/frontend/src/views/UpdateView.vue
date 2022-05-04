<template>
    <div>
        <h1>글을 수정하는 곳입니다</h1>
        <input type="text" v-model="title"> <br>
        <textarea cols="30" rows="10" v-model='memo'></textarea> <br>
        <button @click="upadatememo">제출</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            title :'',
            memo : ''
        }
    },
    created() {
      this.$http.get('/api/memo/'+this.$route.params.id)
        .then((res)=>{
          this.title = res.data.title
          this.memo = res.data.memo
        })
    },
    methods : {
        upadatememo() {
            this.$http.put('/api/memo/'+this.$route.params.id,{
                data : {
                    title :this.title,
                    memo : this.memo
                }
            }).then((response)=>{
                console.log(response.data)
            });
            this.$router.push('/')
        }
    }
}
</script>