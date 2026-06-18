import './Landing.css'
import { useIntroSequence } from './hooks/useIntroSequence'
import IntroScreen from './components/IntroScreen'
import LandingContent from './components/LandingContent'

export default function LandingView() {
  const {
    phase,
    frameVisible,
    landingIn,
    currentFrame,
    start,
    skip,
    replay,
  } = useIntroSequence()

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
