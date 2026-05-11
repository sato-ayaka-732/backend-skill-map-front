import { Routes, Route } from 'react-router-dom'
import SkillCard from './component/SkillCard'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<SkillCard />} />
    </Routes>
  )
}

export default App
