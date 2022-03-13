import React from 'react'
import { SwitchTheme } from 'xueyan-react-style'

export default function Main() {
  return (
    <div>
      <SwitchTheme
        style={{ 
          marginBottom: '16px' 
        }}
      />
      <div 
        style={{ 
          width: '100px',
          height: '80px',
          background: 'var(--back)',
          boxShadow: '0 0 4px var(--shadow)'
        }}
      />
    </div>
  )
}
