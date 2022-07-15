import React, { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [active, setActive] = useState(false)
  const onChange = (e) => {
    setActive(false)
    setName(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    setActive(true)
  }

  return (
    <div className="App">
      <h1>Home</h1>
      <p>당신의 이름은 무엇입니까?</p>
      <form onSubmit={onSubmit}>
        <input value={name} onChange={onChange}></input>
      </form>
      {active && <b>반갑습니다 {name}님</b>}
    </div>
  )
}

export default App
