import React from 'react'
import cn from 'classnames'
import styles from './switch-theme.scss'
import { setColorMode, useColorMode, setMainColor, useMainColor } from './theme'
import DARK_IMG from './dark.svg'
import LIGHT_IMG from './light.svg'
import AUTO_IMG from './auto.svg'
import type { MainColor } from './theme'

const MAIN_COLOR_MATRIX: MainColor[][] = [
  ['red', 'orange', 'yellow', 'green'],
  ['cyan', 'blue', 'purple', 'pink',],
  ['brown', 'indigo', 'mint', 'teal']
]

export function SwitchColorMode({
  className,
  style
}: {
  className?: string
  style?: React.CSSProperties
}) {
  const colorMode = useColorMode()
  return (
    <img
      style={style}
      title={colorMode}
      className={cn(styles.colorMode, className)}
      src={
        colorMode === 'dark' 
          ? DARK_IMG
          : colorMode === 'light' 
          ? LIGHT_IMG
          : AUTO_IMG
      }
      onClick={() => {
        setColorMode(
          colorMode === 'dark' 
            ? 'light' 
            : colorMode ==='light'
            ? 'auto'
            : 'dark'
        )
      }}
    />
  )
}

export function SwitchMainColor({
  className,
  style
}: {
  className?: string
  style?: React.CSSProperties
}) {
  const mainColor = useMainColor()
  return (
    <div style={style} className={cn(styles.colorMatrix, className)}>
      {MAIN_COLOR_MATRIX.map((list, index) => (
        <div key={index} className={styles.colorList}>
          {list.map(item => (
            <div
              key={item}
              className={styles.mainColor}
              title={item}
              style={{
                backgroundColor: `var(--${item === mainColor ? 'back' : item})`,
                borderColor: `var(--${item})`
              }}
              onClick={() => {
                setMainColor(item)
              }}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export function SwitchTheme({
  className,
  style
}: {
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <div 
      style={style}
      className={cn(styles.switchTheme, className)}
    >
      <SwitchColorMode />
      <SwitchMainColor />
    </div>
  )
}
