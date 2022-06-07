import { useNavigate } from "react-router-dom"

const About = () => {
  const navi = useNavigate()
  return (
    <>
      <h1>About</h1>
      <p>과제 제출을 위한 리액트 프론트엔드</p>
      <button onClick={()=>navi(-1)}>뒤로가기</button>
    </>
  )
}

export default About