import { Routes, Route, useLocation } from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import Timeline from './pages/Timeline.jsx'
import DayView from './pages/DayView.jsx'
import NotFound from './pages/NotFound'
import WaldenMinimap from './components/WaldenMiniMap.jsx'
import MapPage from './pages/MapPage.jsx'

export default function App() {
  const { pathname } = useLocation()
  const showMap = pathname.startsWith('/timeline') || pathname.startsWith('/day')

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/day/:id" element={<DayView />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {showMap && <WaldenMinimap />}
    </>
  )
}