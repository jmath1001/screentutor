'use client'

import DownloadButtons from '@/components/DownloadButtons'

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', position: 'relative' }}>

      {/* Grid background */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(124,92,252,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(124,92,252,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      {/* Glow orbs */}
      <div className="animate-drift1" style={{
        position: 'fixed', borderRadius: '50%', pointerEvents: 'none', zIndex: 0,
        width: 600, height: 600,
        background: 'rgba(124,92,252,0.1)',
        filter: 'blur(100px)',
        top: -200, left: -100,
      }} />
      <div className="animate-drift2" style={{
        position: 'fixed', borderRadius: '50%', pointerEvents: 'none', zIndex: 0,
        width: 400, height: 400,
        background: 'rgba(34,211,238,0.06)',
        filter: 'blur(100px)',
        bottom: 0, right: -100,
      }} />

      {/* Nav */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center',
        padding: '0 40px', height: 60,
        background: 'rgba(6,6,8,0.7)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="font-syne" style={{ fontWeight: 800, fontSize: 17, color: '#fff', display: 'flex', alignItems: 'center', gap: 8 }}>
          <div className="animate-nav-pulse" style={{
            width: 8, height: 8, background: 'var(--accent2)',
            borderRadius: '50%', boxShadow: '0 0 12px var(--accent-glow)',
          }} />
          ScreenTutor
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <span className="animate-blink" style={{
            fontSize: 11, color: 'var(--green)',
            background: 'rgba(16,185,129,0.08)',
            border: '1px solid rgba(16,185,129,0.2)',
            padding: '4px 10px', borderRadius: 20, fontWeight: 500,
            display: 'flex', alignItems: 'center', gap: 5,
          }}>
            <span style={{
              width: 5, height: 5, background: 'var(--green)',
              borderRadius: '50%', boxShadow: '0 0 6px var(--green)',
              display: 'inline-block',
            }} />
            Free Beta
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        position: 'relative', zIndex: 2,
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center',
        padding: '100px 24px 60px',
      }}>
        {/* Eyebrow */}
        <div className="animate-fade-up font-syne" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          fontSize: 11, fontWeight: 600, letterSpacing: 2,
          textTransform: 'uppercase', color: 'var(--accent2)',
          background: 'rgba(124,92,252,0.08)',
          border: '1px solid rgba(124,92,252,0.2)',
          padding: '6px 14px', borderRadius: 20, marginBottom: 32,
        }}>
          ✦ AI-powered study tool
        </div>

        {/* Title */}
        <h1 className="animate-fade-up-1 font-syne" style={{
          fontWeight: 800,
          fontSize: 'clamp(44px, 7vw, 88px)',
          lineHeight: 1.0, letterSpacing: -2,
          color: '#fff', marginBottom: 12,
        }}>
          Understand anything<br />
          <span className="gradient-text">on your screen.</span>
        </h1>

        {/* Sub */}
        <p className="animate-fade-up-2" style={{
          fontSize: 'clamp(16px, 2vw, 20px)',
          color: 'var(--text2)', maxWidth: 520,
          margin: '0 auto 36px',
          fontWeight: 300, lineHeight: 1.6,
        }}>
          Press a shortcut, select any text, equation, or diagram —
          and get a full explanation with solved steps in seconds.
        </p>

        {/* Hotkey hint */}
        <div className="animate-fade-up-3" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          fontSize: 13, color: 'var(--text3)', marginBottom: 40,
        }}>
          Just press{' '}
          {['Ctrl', 'Shift', 'E'].map((k, i) => (
            <span key={i} className="font-syne" style={{
              background: 'var(--surface2)',
              border: '1px solid var(--border2)',
              borderBottom: '2px solid var(--border2)',
              borderRadius: 5, padding: '2px 8px',
              fontSize: 11, color: 'var(--text2)', letterSpacing: '0.5px',
            }}>{k}</span>
          ))}
          {' '}anywhere
        </div>

        {/* Download buttons */}
        <div className="animate-fade-up-4">
          <DownloadButtons />
        </div>
      </section>

      {/* Demo window */}
      <div className="animate-fade-up-5" style={{
        position: 'relative', zIndex: 2,
        padding: '0 24px 100px',
        display: 'flex', justifyContent: 'center',
      }}>
        <div className="demo-window" style={{
          width: '100%', maxWidth: 860,
          background: 'var(--surface)',
          border: '1px solid var(--border2)',
          borderRadius: 16, overflow: 'hidden',
        }}>
          {/* Titlebar */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 7,
            padding: '12px 16px',
            background: 'var(--surface2)',
            borderBottom: '1px solid var(--border)',
          }}>
            {[
              { color: '#ff5f57' },
              { color: '#ffbd2e' },
              { color: '#28c840' },
            ].map((dot, i) => (
              <div key={i} style={{ width: 11, height: 11, borderRadius: '50%', background: dot.color }} />
            ))}
            <span className="font-syne" style={{
              margin: '0 auto', transform: 'translateX(-22px)',
              fontSize: 11, color: 'var(--text3)', letterSpacing: '0.5px',
            }}>
              ScreenTutor — Demo
            </span>
          </div>

          {/* Video body */}
          <div style={{
            position: 'relative', width: '100%',
            aspectRatio: '16/9', background: '#000',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            overflow: 'hidden',
          }}>
            
              <video autoPlay muted loop playsInline style={{ width:'100%', height:'100%', objectFit:'cover' }}>
                <source src="/demo.mp4" type="video/mp4" />
              </video>
            
            <div style={{
              width: '100%', height: '100%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'radial-gradient(ellipse at 50% 60%, rgba(124,92,252,0.12) 0%, transparent 70%)',
              position: 'relative',
            }}>
              {/* Scan line */}
              <div className="animate-scan" style={{
                position: 'absolute', left: 0, right: 0, height: 2,
                background: 'linear-gradient(90deg, transparent, var(--accent2), transparent)',
                opacity: 0.5,
              }} />
              {/* Selection box */}
              <div className="animate-select-pulse" style={{
                position: 'absolute',
                width: 280, height: 120,
                border: '2px solid var(--accent2)',
                borderRadius: 4,
              }} />
              
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      {[
        { icon: '⚡', title: 'Instant answers', desc: 'Select anything on screen and get a full explanation in under 5 seconds.' },
        { icon: '🧮', title: 'Math rendered', desc: 'Equations, derivatives, integrals — fully solved with step-by-step workings.' },
        { icon: '📚', title: 'Any subject', desc: 'Works on textbooks, PDFs, coding problems, lectures — anything on screen.' },
        { icon: '🔒', title: 'Runs locally', desc: 'Lightweight app that runs on your computer. No browser extension needed.' },
      ].map((f, i) => (null)).length === 0 ? null : (
        <div className="animate-fade-up-5" style={{
          position: 'relative', zIndex: 2,
          display: 'flex', flexWrap: 'wrap',
          justifyContent: 'center', gap: 2,
          padding: '0 24px 100px',
          maxWidth: 900, margin: '0 auto',
        }}>
          {[
            { icon: '⚡', title: 'Instant answers', desc: 'Select anything on screen and get a full explanation in under 5 seconds.' },
            { icon: '🧮', title: 'Math rendered', desc: 'Equations, derivatives, integrals — fully solved with step-by-step workings.' },
            { icon: '📚', title: 'Any subject', desc: 'Works on textbooks, PDFs, coding problems, lectures — anything on screen.' },
            { icon: '🔒', title: 'Runs locally', desc: 'Lightweight app that runs on your computer. No browser extension needed.' },
          ].map((f, i) => (
            <div key={i} style={{
              flex: 1, minWidth: 200, padding: '24px 28px',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: i === 0 ? '16px 0 0 16px' : i === 3 ? '0 16px 16px 0' : 0,
              transition: 'border-color 0.2s, background 0.2s',
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.background = 'var(--surface2)'
                ;(e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border2)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.background = 'var(--surface)'
                ;(e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)'
              }}
            >
              <span style={{ fontSize: 22, marginBottom: 10, display: 'block' }}>{f.icon}</span>
              <div className="font-syne" style={{ fontWeight: 700, fontSize: 14, color: '#fff', marginBottom: 5 }}>{f.title}</div>
              <div style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.6 }}>{f.desc}</div>
            </div>
          ))}
        </div>
      )}

      {/* Bottom CTA */}
      <div className="animate-fade-up-6" style={{
        position: 'relative', zIndex: 2,
        textAlign: 'center', padding: '0 24px 120px',
      }}>
        <div style={{
          display: 'inline-block',
          padding: '60px 80px',
          background: 'var(--surface)',
          border: '1px solid var(--border2)',
          borderRadius: 24,
          maxWidth: 600, width: '100%',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Top shine line */}
          <div style={{
            position: 'absolute', top: -1, left: '50%',
            transform: 'translateX(-50%)',
            width: '60%', height: 1,
            background: 'linear-gradient(90deg, transparent, var(--accent2), transparent)',
          }} />
          <h2 className="font-syne" style={{
            fontSize: 32, fontWeight: 800, color: '#fff',
            marginBottom: 12, letterSpacing: -0.5,
          }}>
            Ready to actually understand?
          </h2>
          <p style={{ color: 'var(--text2)', fontSize: 15, marginBottom: 32 }}>
            Join thousands of students using ScreenTutor to get unstuck faster.
          </p>
          <DownloadButtons size="small" />
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        position: 'relative', zIndex: 2,
        textAlign: 'center', padding: '30px 24px',
        borderTop: '1px solid var(--border)',
        fontSize: 12, color: 'var(--text3)',
      }}>
        © 2025 ScreenTutor · Built for students
      </footer>

    </main>
  )
}