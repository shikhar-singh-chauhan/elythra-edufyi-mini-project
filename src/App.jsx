import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Auralith from './pages/Auralith'
import Pelora from './pages/Pelora'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auralith" element={<Auralith />} />
      <Route path="/pelora" element={<Pelora />} />
    </Routes>
  )
}