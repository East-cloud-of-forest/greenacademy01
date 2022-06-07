import { Link, Outlet, useNavigate } from 'react-router-dom'

const Board = () => {
  const navi = useNavigate()
  const page = []
  const count = 5
  for (let i = 0; i < count; i++) {
    page.push(i + 1)
  }
  return (
    <>
      <h1>Board</h1>
      <p>파라미터 및 중첩 라우터를 사용하여 아래 Board의 내용이 보입니다</p>
      <Outlet></Outlet>
      <nav>
        {
          page.map(a=>(
            <Link to={"/board/"+a} key={a}>{a}</Link>
          ))
        }
      </nav>
      <button onClick={() => navi(-1)}>뒤로가기</button>
    </>
  )
}

export default Board
