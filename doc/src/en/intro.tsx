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
      <ColorBlock name="base" maxNum={2} />
      <ColorBlock name="font" maxNum={3} />
      <ColorBlock name="mask" maxNum={4} />
      <ColorBlock name="area" maxNum={10} />
      <ColorBlock name="red" maxNum={10} />
      <ColorBlock name="orange" maxNum={10} />
      <ColorBlock name="yellow" maxNum={10} />
      <ColorBlock name="green" maxNum={10} />
      <ColorBlock name="cyan" maxNum={10} />
      <ColorBlock name="blue" maxNum={10} />
      <ColorBlock name="purple" maxNum={10} />
      <ColorBlock name="pink" maxNum={10} />
      <ColorBlock name="brown" maxNum={10} />
      <ColorBlock name="indigo" maxNum={10} />
      <ColorBlock name="mint" maxNum={10} />
      <ColorBlock name="teal" maxNum={10} />
    </div>
  )
}
