'use client'

import { useState, useEffect } from 'react'

type Platform = 'windows' | 'mac' | 'linux'

const platforms = [
  {
    id: 'windows' as Platform,
    label: 'Download for Windows',
    sub: '.exe · 64-bit',
    primary: true,
    icon: (
      <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
      </svg>
    ),
  },
  {
    id: 'mac' as Platform,
    label: 'Download for macOS',
    sub: '.dmg · Apple Silicon + Intel',
    primary: false,
    icon: (
      <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.54 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
      </svg>
    ),
  },
  {
    id: 'linux' as Platform,
    label: 'Download for Linux',
    sub: '.AppImage · x86_64',
    primary: false,
    icon: (
      <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587.026 1.257.055 1.938.055.066 0 .134 0 .2-.004.07 0 .14.004.208.004.663 0 1.345-.028 1.938-.062.239.49.696.851 1.228.96.732.193 1.648-.013 2.55-.468.896-.453 1.93-.57 2.773-.767.402-.128.756-.27.93-.601.175-.338.139-.808-.105-1.483-.074-.242-.016-.572.04-.971.028-.136.055-.337.055-.536.004-.208-.043-.413-.133-.602-.21-.413-.555-.545-.864-.682-.308-.135-.59-.2-.797-.4-.212-.238-.402-.57-.664-.839a.424.424 0 00-.11-.135c.122-.806-.01-1.657-.287-2.489-.59-1.771-1.832-3.47-2.716-4.521-.75-1.067-.974-1.928-1.05-3.02-.072-1.594 1.073-5.99-3.17-6.298-.165-.013-.325-.021-.48-.021z"/>
      </svg>
    ),
  },
]

export default function DownloadButtons({ size = 'normal' }: { size?: 'normal' | 'small' }) {
  const [toast, setToast] = useState<{ show: boolean; msg: string }>({ show: false, msg: '' })
  const [downloadCount, setDownloadCount] = useState<number | null>(null)

  useEffect(() => {
    fetch('/api/downloads')
      .then(r => r.json())
      .then(d => { if (d.count > 0) setDownloadCount(d.count) })
      .catch(() => {})
  }, [])

  async function handleDownload(platform: Platform) {
    // Log to Supabase via API route
    fetch('/api/downloads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ platform }),
    }).then(r => r.json()).then(d => {
      if (d.ok) setDownloadCount(c => (c ?? 0) + 1)
    }).catch(() => {})

    // Show toast
    const names = { windows: 'Windows', mac: 'macOS', linux: 'Linux' }
    setToast({ show: true, msg: `${names[platform]} download starting` })
    setTimeout(() => setToast({ show: false, msg: '' }), 3500)
  }

  return (
    <>
      {/* Toast */}
      <div
        style={{
          position: 'fixed',
          bottom: 30,
          left: '50%',
          transform: toast.show ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(20px)',
          opacity: toast.show ? 1 : 0,
          transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
          background: 'var(--surface2)',
          border: '1px solid var(--border2)',
          borderRadius: 12,
          padding: '14px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          fontSize: 13,
          color: 'var(--text)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
          zIndex: 9999,
          pointerEvents: toast.show ? 'auto' : 'none',
          whiteSpace: 'nowrap',
        }}
      >
        <span style={{ fontSize: 18 }}>⬇️</span>
        <span>{toast.msg}</span>
        {downloadCount && (
          <span style={{ marginLeft: 6, color: 'var(--accent2)', fontWeight: 600 }}>
            · {downloadCount.toLocaleString()} total
          </span>
        )}
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
        {platforms.map(p => (
          <button
            key={p.id}
            onClick={() => handleDownload(p.id)}
            className={p.primary ? 'glow-btn' : 'ghost-btn'}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: size === 'small' ? '10px 18px' : '13px 22px',
              borderRadius: 12,
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 14,
              fontWeight: 500,
              cursor: 'pointer',
              border: p.primary ? 'none' : undefined,
              background: p.primary ? 'var(--accent)' : undefined,
              color: 'var(--text)',
            }}
          >
            {p.icon}
            <div style={{ lineHeight: 1.2, textAlign: 'left' }}>
              {p.label}
              <span style={{ display: 'block', fontSize: 10, opacity: 0.5, fontWeight: 400 }}>{p.sub}</span>
            </div>
          </button>
        ))}
      </div>

      {downloadCount && downloadCount > 0 && (
        <p style={{ textAlign: 'center', fontSize: 12, color: 'var(--text3)', marginTop: 12 }}>
          Free during beta · {downloadCount.toLocaleString()} downloads · No account required
        </p>
      )}
      {!downloadCount && (
        <p style={{ textAlign: 'center', fontSize: 12, color: 'var(--text3)', marginTop: 12 }}>
          Free during beta · No account required
        </p>
      )}
    </>
  )
}