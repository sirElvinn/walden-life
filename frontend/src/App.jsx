import { Routes, Route, Navigate } from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import Timeline from './pages/Timeline.jsx'
import DayView from './pages/DayView.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/timeline" element={<Timeline />} />
      <Route path="/day/:id" element={<DayView />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
