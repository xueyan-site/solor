import cn from 'classnames'
import { useEffect, useState } from 'react'
import EventEmitter from 'eventemitter3'
import styles from './theme.scss'

export type ColorMode = 
  | 'auto' 
  | 'light' 
  | 'dark'

export type MainColor = 
  | 'red' 
  | 'orange' 
  | 'yellow' 
  | 'green' 
  | 'cyan' 
  | 'blue' 
  | 'purple' 
  | 'pink' 
  | 'brown' 
  | 'indigo' 
  | 'mint' 
  | 'teal'

const COLOR_MODE_KEY = '_xr_style_3Kv8ge'

const MAIN_COLOR_KEY = '_xr_style_ciY2nq'

const eventBus = new EventEmitter()

/**
 * 自动加载本地颜色模式
 */
if (!(window as any)[COLOR_MODE_KEY]) {
  setColorMode(getColorMode())
}

/**
 * 自动加载本地主色
 */
if (!(window as any)[MAIN_COLOR_KEY]) {
  setMainColor(getMainColor())
}

/**
 * 获取颜色模式
 */
export function getColorMode(): ColorMode {
  if ((window as any)[COLOR_MODE_KEY]) {
    return (window as any)[COLOR_MODE_KEY]
  }  else if (localStorage) {
    const theme = localStorage.getItem(COLOR_MODE_KEY)
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
 * 获取页面主色
 */
export function getMainColor(): MainColor {
  if ((window as any)[MAIN_COLOR_KEY]) {
    return (window as any)[MAIN_COLOR_KEY]
  }  else if (localStorage) {
    const theme = localStorage.getItem(MAIN_COLOR_KEY)
    return (theme as any) || 'blue'
  } else {
    return 'blue'
  }
}

/**
 * 设置颜色模式
 */
export function setColorMode(colorMode: ColorMode) {
  (window as any)[COLOR_MODE_KEY] = colorMode;
  eventBus.emit(COLOR_MODE_KEY, colorMode)
  if (localStorage) {
    localStorage.setItem(COLOR_MODE_KEY, colorMode)
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
    colorMode === 'dark' 
      ? styles.dark 
      : colorMode === 'light'
      ? styles.light
      : ''
  )
  if (domCN) {
    dom.setAttribute('class', domCN)
  } else {
    dom.removeAttribute('class')
  }
}

/**
 * 设置页面主色
 */
export function setMainColor(mainColor: MainColor) {
  (window as any)[MAIN_COLOR_KEY] = mainColor;
  eventBus.emit(MAIN_COLOR_KEY, mainColor)
  if (localStorage) {
    localStorage.setItem(MAIN_COLOR_KEY, mainColor)
  }
  const dom = document.documentElement
  dom.style.setProperty('--main', `var(--${mainColor})`)
  dom.style.setProperty('--main1', `var(--${mainColor}1)`)
  dom.style.setProperty('--main2', `var(--${mainColor}2)`)
  dom.style.setProperty('--main3', `var(--${mainColor}3)`)
  dom.style.setProperty('--main4', `var(--${mainColor}4)`)
  dom.style.setProperty('--main5', `var(--${mainColor}5)`)
}

export function useColorMode(): ColorMode {
  const [theme, setTheme] = useState(getColorMode)
  useEffect(() => {
    eventBus.on(COLOR_MODE_KEY, setTheme)
    return () => {
      eventBus.removeListener(COLOR_MODE_KEY, setTheme)
    }
  }, [])
  return theme
}

export function useMainColor(): MainColor {
  const [mainColor, setMainColor] = useState(getMainColor)
  useEffect(() => {
    eventBus.on(MAIN_COLOR_KEY, setMainColor)
    return () => {
      eventBus.removeListener(MAIN_COLOR_KEY, setMainColor)
    }
  }, [])
  return mainColor
}
