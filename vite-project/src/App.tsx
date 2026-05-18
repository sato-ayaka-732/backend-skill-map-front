import { Routes, Route } from 'react-router-dom'
import SkillMap from './pages/SkillMap'

function App() {
  return (
    <Routes>
      <Route path="/" element={<SkillMap />} />
    </Routes>
  )
}

export default App
