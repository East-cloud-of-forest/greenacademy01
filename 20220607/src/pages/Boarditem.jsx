import { useParams } from 'react-router-dom'

const Boarditem = () => {
  const { page } = useParams()
  return (
    <>
      <h2>{page}페이지 입니다</h2>
    </>
  )
}

export default Boarditem
