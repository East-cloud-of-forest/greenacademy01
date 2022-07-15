const MemoItem = ({ memo, removeMemo }) => {
  const clickRemove = (id) => {
    removeMemo(id)
  }
  return (
    <div>
      <p>
        제목 : {memo.title} <button onClick={()=>{clickRemove(memo.id)}}>X</button>
      </p>
      <p>내용 : {memo.memo}</p>
    </div>
  )
}

const MemoComp = ({ memo, removeMemo }) => {
  return (
    <div>
      {memo.map((memo) => (
        <MemoItem key={memo.id} memo={memo} removeMemo={removeMemo}></MemoItem>
      ))}
    </div>
  )
}

export default MemoComp
