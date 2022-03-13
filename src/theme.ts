import cn from 'classnames'
import { useEffect, useState } from 'react'
import EventEmitter from 'eventemitter3'
import styles from './theme.scss'

export type StyleTheme = 'auto' | 'light' | 'dark'

const THEME_KEY = '_xr_style_3Kv8ge'

const eventBus = new EventEmitter()

/**
 * 调用该包时，自动加载本地全局主题设置
 */
if (!(window as any)[THEME_KEY]) {
  setTheme(getTheme())
}

/**
 * 获取页面全局主题
 */
export function getTheme(): StyleTheme {
  if ((window as any)[THEME_KEY]) {
    return (window as any)[THEME_KEY]
  }  else if (localStorage) {
    const theme = localStorage.getItem(THEME_KEY)
    return (theme as any) || 'auto'
  } else {
    const root = document.documentElement
    const rootCL = root.classList
    return rootCL.contains(styles.dark)
      ? 'dark'
      : rootCL.contains(styles.light)
      ? 'light'
      : 'auto'
  }
}

/**
 * 设置页面全局主题
 */
export function setTheme(theme: StyleTheme) {
  (window as any)[THEME_KEY] = theme;
  eventBus.emit(THEME_KEY, theme)
  if (localStorage) {
    localStorage.setItem(THEME_KEY, theme)
  }
  const dom = document.documentElement
  let domCN = dom.className
  if (domCN) {
    if (domCN.includes(styles.dark)) {
      domCN = domCN.replace(styles.dark, '')
    }
    if (domCN.includes(styles.light)) {
      domCN = domCN.replace(styles.light, '')
    }
  }
  domCN = cn(
    domCN,
    theme === 'dark' 
      ? styles.dark 
      : theme === 'light'
      ? styles.light
      : ''
  )
  if (domCN) {
    dom.setAttribute('class', domCN)
  } else {
    dom.removeAttribute('class')
  }
}

export function useTheme() {
  const [theme, setTheme] = useState(getTheme)
  useEffect(() => {
    eventBus.on(THEME_KEY, setTheme)
    return () => {
      eventBus.removeListener(THEME_KEY, setTheme)
    }
  }, [])
  return theme
}
