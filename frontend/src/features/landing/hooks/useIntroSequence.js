import { useState, useEffect, useRef } from 'react'
import { INTRO_FRAMES } from '../config/introFrames'

const FRAME_DURATION = 600

export function useIntroSequence() {
  const [phase, setPhase] = useState('idle')
  const [frameIndex, setFrameIndex] = useState(0)
  const [frameVisible, setFrameVisible] = useState(false)
  const [landingIn, setLandingIn] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    if (phase !== 'playing') return

    if (frameIndex >= INTRO_FRAMES.length) {
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

  return {
      phase,
      frameVisible,
      landingIn,
      currentFrame,
      start,
      skip,
      replay,
  }
}
