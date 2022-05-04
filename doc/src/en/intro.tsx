import React from 'react'
import { SwitchTheme } from 'xueyan-react-style'

function ColorItem({
  name
}: {
  name: string
}) {
  return (
    <div 
      style={{ 
        width: '60px',
        height: '20px',
        padding: '0 8px',
        fontSize: '12px',
        lineHeight: '20px',
        color: `var(--font)`,
        backgroundColor: `var(--${name})`,
      }}
    >
      {name}
    </div>
  )
}

function ColorBlock({
  name,
  maxNum
}: {
  name: string
  maxNum: number
}) {
  const maxLine = Math.ceil(maxNum / 5)
  return (
    <div style={{ display: 'flex' }}>
      <ColorItem name={name} />
      <div>
        {Array(maxLine).fill(null).map((_i, i) => (
          <div key={i} style={{ display: 'flex' }}>
            {Array(5).fill(null).map((_j, j) => {
              const key = (i * 5) + 1 + j
              return key > maxNum ? null : (
                <ColorItem key={j} name={name + ((i * 5) + 1 + j)} />
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Main() {
  return (
    <div 
      style={{ 
        backgroundColor: 'var(--base)',
        padding: '16px'
      }}
    >
      <SwitchTheme style={{ width: '240px' }} />
      {[
        'base',
        'font',
        'mask',
      ].map((name) => (
        <ColorBlock key={name} name={name} maxNum={2} />
      ))}
      {[
        'area',
        'red',
        'orange',
        'yellow',
        'green',
        'cyan',
        'blue',
        'purple',
        'pink',
        'brown',
        'indigo',
        'mint',
        'teal'
      ].map((name) => (
        <ColorBlock key={name} name={name} maxNum={10} />
      ))}
    </div>
  )
}
