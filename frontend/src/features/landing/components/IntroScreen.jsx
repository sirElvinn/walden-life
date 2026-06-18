export default function IntroScreen({
  phase,
  frameVisible,
  currentFrame,
  onStart,
  onSkip,
}) {
  return (
    <div className={`intro ${phase}`} onClick={phase === 'idle' ? onStart : undefined}>
      <div className={`intro-frame ${frameVisible ? 'visible' : ''}`}>
        <img
          src={currentFrame.src}
          alt={currentFrame.caption}
          className="intro-frame-image"
          style={{ objectPosition: currentFrame.position ?? 'center' }}
        />
      </div>

      <div className="intro-overlay" />

      {phase === 'playing' && frameVisible && (
        <p className="intro-caption">{currentFrame.caption}</p>
      )}

      {phase === 'idle' && (
        <div className="intro-idle">
          <span className="intro-wordmark">Walden</span>
          <span className="intro-play">▶</span>
          <span className="intro-hint">Click to begin</span>
        </div>
      )}

      {phase === 'playing' && (
        <button className="intro-skip" onClick={onSkip}>
          Skip →
        </button>
      )}
    </div>
  )
}
