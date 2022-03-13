import React from 'react'
import cn from 'classnames'
import styles from './switch-theme.scss'
import { setTheme, useTheme } from './theme'
import DARK_IMG from './dark.svg'
import LIGHT_IMG from './light.svg'
import AUTO_IMG from './auto.svg'

export function SwitchTheme({
  className,
  style
}: {
  className?: string
  style?: React.CSSProperties
}) {
  const theme = useTheme()
  return (
    <img
      style={style}
      className={
        cn(styles.switchTheme, className)
      }
      src={
        theme === 'dark' 
          ? DARK_IMG
          : theme === 'light' 
          ? LIGHT_IMG
          : AUTO_IMG
      }
      onClick={() => {
        setTheme(
          theme === 'dark' 
            ? 'light' 
            : theme ==='light'
            ? 'auto'
            : 'dark'
        )
      }}
    />
  )
}
