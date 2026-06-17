import { useState, useEffect, useRef } from 'react'
import './Landing.css'
import { INTRO_FRAMES } from './data/introFrames'
import IntroScreen from './components/landing/IntroScreen'
import LandingContent from './components/landing/LandingContent'

const FRAME_DURATION = 600

export default function Landing() {
  const [phase, setPhase]               = useState('idle')   // 'idle' | 'playing' | 'landing'
  const [frameIndex, setFrameIndex]     = useState(0)
  const [frameVisible, setFrameVisible] = useState(false)
  const [landingIn, setLandingIn]       = useState(false)
  const timerRef                        = useRef(null)

  
  useEffect(() => {
    if (phase !== 'playing') return

    if (frameIndex >= INTRO_FRAMES.length) {
      // All frames done — cross-fade to landing
      setTimeout(() => {
        setPhase('landing')
        setTimeout(() => setLandingIn(true), 80)
      }, 200)
      return
    }

    setFrameVisible(true)

    timerRef.current = setTimeout(() => {
      setFrameVisible(false)
      timerRef.current = setTimeout(() => {
        setFrameIndex(i => i + 1)
      }, 80)
    }, FRAME_DURATION)

    return () => clearTimeout(timerRef.current)
  }, [phase, frameIndex])

  function start() {
    if (phase !== 'idle') return
    setPhase('playing')
    setFrameIndex(0)
  }

  function skip(e) {
    e.stopPropagation()
    clearTimeout(timerRef.current)
    setFrameVisible(false)
    setPhase('landing')
    setTimeout(() => setLandingIn(true), 80)
  }

  function replay() {
    setLandingIn(false)
    setTimeout(() => {
      setPhase('idle')
      setFrameIndex(0)
      setFrameVisible(false)
    }, 400)
  }

  const currentFrame = INTRO_FRAMES[Math.min(frameIndex, INTRO_FRAMES.length - 1)]

  if (phase === 'idle' || phase === 'playing') {
    return (
      <IntroScreen
        phase={phase}
        frameVisible={frameVisible}
        currentFrame={currentFrame}
        onStart={start}
        onSkip={skip}
      />
    )
  }

  return <LandingContent landingIn={landingIn} onReplay={replay} />
}
