import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import About from './pages/About'
import Board from './pages/Board'
import Boarditem from './pages/Boarditem'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/board" element={<Board />}>
            <Route path=":page" element={<Boarditem />}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
