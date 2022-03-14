import React from 'react'
import { SwitchTheme } from 'xueyan-react-style'

export default function Main() {
  return (
    <div>
      <SwitchTheme />
      <div 
        style={{ 
          marginTop: '16px',
          width: '80px',
          height: '60px',
          boxSizing: 'border-box',
          background: 'var(--back)',
          border: '4px solid var(--main)'
        }}
      />
    </div>
  )
}
