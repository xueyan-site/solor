import React from 'react'
import { SwitchTheme } from 'xueyan-react-style'

function ColorItem({
  name
}: {
  name: string
}) {
  const color = `var(--${name})`
  return (
    <div style={{ width: '60px' }}>
      <div style={{ fontSize: '12px' }}>{name}</div>
      <div 
        style={{ 
          width: '40px',
          height: '40px',
          backgroundColor: color 
        }} 
        onClick={() => { 
          console.log(color) 
        }}
      />
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
    <div style={{ marginTop: '16px', display: 'flex' }}>
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
    <div style={{ backgroundColor: 'var(--back)' }}>
      <SwitchTheme />
      {/* <div style={THEME_DISPLAY_STYLE} /> */}

      {[
        'back',
      ].map((name) => (
        <ColorBlock key={name} name={name} maxNum={2} />
      ))}

      {[
        'font',
        'alpha',
        'beta',
        'gamma'
      ].map((name) => (
        <ColorBlock key={name} name={name} maxNum={10} />
      ))}

      {[
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
