import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import './Intro.css'

export default function Intro({ onEnter }) {
  const [phase, setPhase] = useState('idle') // idle | revving | video | done
  const videoRef = useRef(null)

  const handleClick = () => {
    if (phase !== 'idle') return
    setPhase('revving')

    // After revving animation, switch to video
    setTimeout(() => {
      setPhase('video')
      // Small delay to let video element mount, then play
      setTimeout(() => {
        const v = videoRef.current
        if (v) {
          v.play().catch(() => {})
        }
      }, 100)
    }, 1400)
  }

  const handleVideoEnd = () => {
    setPhase('done')
    onEnter()
  }

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="intro"
          key="intro"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* ── Intro screen ── */}
          <AnimatePresence>
            {phase !== 'video' && (
              <motion.div
                className="intro__screen"
                key="screen"
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <div className="intro__grid" aria-hidden="true" />

                <div className="intro__content">
                  <motion.div
                    className="intro__logo"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <span className="intro__logo-aws">AWS</span>
                    <span className="intro__logo-text">Student Community Day</span>
                  </motion.div>

                  <motion.button
                    className={`intro__btn ${phase === 'revving' ? 'intro__btn--revving' : ''}`}
                    onClick={handleClick}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    whileHover={phase === 'idle' ? { scale: 1.04 } : {}}
                    whileTap={phase === 'idle' ? { scale: 0.97 } : {}}
                  >
                    <span className="intro__btn-inner">
                      {phase === 'idle' && <><EngineIcon /> Start Engine</>}
                      {phase === 'revving' && <span className="intro__btn-revving">VROOM...</span>}
                    </span>
                  </motion.button>

                  {phase === 'idle' && (
                    <motion.p
                      className="intro__hint"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.45 }}
                      transition={{ delay: 1, duration: 0.6 }}
                    >
                      Click to enter
                    </motion.p>
                  )}
                </div>

                {/* Racing lights */}
                <div className="intro__lights" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map(i => (
                    <motion.div
                      key={i}
                      className="intro__light"
                      animate={
                        phase === 'revving'
                          ? { backgroundColor: '#e10600', boxShadow: '0 0 20px #e10600' }
                          : { backgroundColor: '#222', boxShadow: 'none' }
                      }
                      transition={{ delay: phase === 'revving' ? i * 0.18 : 0, duration: 0.25 }}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Intro video ── */}
          {phase === 'video' && (
            <motion.div
              className="intro__video-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <video
                ref={videoRef}
                className="intro__video"
                src="/herobg/intro.mp4"
                playsInline
                onEnded={handleVideoEnd}
              />
              {/* Skip button */}
              <button className="intro__skip" onClick={handleVideoEnd}>
                Skip ›
              </button>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function EngineIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}
