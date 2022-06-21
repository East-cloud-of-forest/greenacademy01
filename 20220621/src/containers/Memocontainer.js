import MemoComp from '../components/MemoComp'
import { useSelector, useDispatch } from 'react-redux'
import { useCallback, useState } from 'react'
import { addMemo, removeMemo } from '../modules/memo'

const Memocontainer = () => {
  const { memo } = useSelector(state => state)
  const dispatch = useDispatch()
  const sendModule = useCallback((memo) => dispatch(addMemo(memo)), [dispatch])
  const removeModule = useCallback((id) => dispatch(removeMemo(id)), [dispatch])
  const [title, setTitle] = useState('')
  const [memoinput, setMemo] = useState('')
  const titleChange = (e) => {
    setTitle(e.target.value)
  }
  const memoChange = (e) => {
    setMemo(e.target.value)
  }
  const sendMemo = () => {
    sendModule({
      title: title,
      memo: memoinput,
    })
    setTitle('')
    setMemo('')
  }

  return (
    <div>
      <br></br>
      <input type="text" value={title} onChange={titleChange}></input> <br></br>
      <br></br>
      <textarea
        cols="22"
        rows="5"
        value={memoinput || ''}
        onChange={memoChange}
      ></textarea>{' '}
      <br></br>
      <button onClick={sendMemo}>입력</button>
      <hr style={{ width: '500px', opacity: '0.5' }}></hr>
      <MemoComp memo={memo} removeMemo={removeModule}></MemoComp>
    </div>
  )
}

export default Memocontainer
