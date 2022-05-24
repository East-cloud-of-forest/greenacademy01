import { useState, useEffect, useMemo } from "react"

const MainComp = () => {
  const [date, setDate] = useState(new Date())
  const [num, setNum] = useState(0)
  const [numarray, setNumarray] = useState([])

  useEffect(()=>{
    setInterval(()=>{
      setDate(new Date())
    },1000)
  }, [date])

  const onChange = (e) => {
    setNum(e.target.value)
  }
  const addNum = () => {
    setNumarray([
      ...numarray,
      parseInt(num)
    ])
    setNum(0)
  }
  const allAverage = (list) => {
    let sum = list.length > 0 ? list.reduce((p, c)=>p+c) : 0
    return list.length > 0 ? Math.round((sum / list.length)*100) / 100 : 0
  }
  const average = useMemo(()=>allAverage(numarray),[numarray])

  return (
    <div>
      <h1>{date.toLocaleTimeString()}</h1>
      <input type="number" value={num} onChange={(e)=>onChange(e)} />
      <button onClick={addNum}>추가</button>
      <h3>모든 수의 평균 : {average}</h3>
      <p>소수점 3번째 자리에서 반올림</p>
      <ul>
          {numarray.map((n, i)=><li key={i}>{n}</li>)}
      </ul>
    </div>
  )
}

export default MainComp