// 모듈로 서버생성
const { response } = require('express')
const express = require('express')

// 서버생성
const app = express()

// request 이벤트 리스너 설정
app.use((request, response)=>{
  response.send('<h1>Hello express</h1>')
})

app.listen(8080,()=>{
  console.log('server running at http://127.0.0.1:8080')
})