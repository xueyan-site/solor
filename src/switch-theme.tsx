import React from 'react'
import cn from 'classnames'
import styles from './switch-theme.scss'
import { setColorMode, useColorMode, setMainColor, useMainColor, ColorMode } from './theme'
import { Select, SelectOption } from 'ark-select'
import { SunIcon, MoonIcon, StarIcon } from 'sicon'
import type { MainColor } from './theme'

function Label({
  icon,
  color,
  children
}: {
  icon?: React.ReactNode
  color?: string
  children: React.ReactNode
}) {
  return (
    <div className={styles.xrstylelabel}>
      {icon && <div className={styles.icon}>{icon}</div>}
      {color && (
        <div 
          className={styles.color} 
          style={{ 
            backgroundColor: `var(--${color})` 
          }}
        />
      )}
      {children}
    </div>
  )
}

const COLOR_MODE_OPTIONS: SelectOption<ColorMode>[] = [
  {
    value: 'light',
    label: <Label icon={<SunIcon color="var(--red5)"/>}>light</Label>
  },
  {
    value: 'dark',
    label: <Label icon={<MoonIcon color="var(--blue5)" />}>dark</Label>
  },
  {
    value: 'auto',
    label: <Label icon={<StarIcon color="var(--orange5)"/>}>auto</Label>
  }
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
    <Select
      className={cn(styles.xrstylecolormode, className)}
      style={style}
      value={colorMode}
      options={COLOR_MODE_OPTIONS}
      onChange={(value: ColorMode) => {
        setColorMode(value)
      }}
    />
  )
}

const MAIN_COLOR_OPTIONS: SelectOption<MainColor>[] = [
  {
    value: 'red',
    label: <Label color="red">red</Label>
  },
  {
    value: 'orange',
    label: <Label color="orange">orange</Label>
  },
  {
    value: 'yellow',
    label: <Label color="yellow">yellow</Label>
  },
  {
    value: 'green',
    label: <Label color="green">green</Label>
  },
  {
    value: 'cyan',
    label: <Label color="cyan">cyan</Label>
  },
  {
    value: 'blue',
    label: <Label color="blue">blue</Label>
  },
  {
    value: 'purple',
    label: <Label color="purple">purple</Label>
  },
  {
    value: 'pink',
    label: <Label color="pink">pink</Label>
  },
  {
    value: 'brown',
    label: <Label color="brown">brown</Label>
  },
  {
    value: 'indigo',
    label: <Label color="indigo">indigo</Label>
  },
  {
    value: 'mint',
    label: <Label color="mint">mint</Label>
  },
  {
    value: 'teal',
    label: <Label color="teal">teal</Label>
  }
]

export function SwitchMainColor({
  className,
  style
}: {
  className?: string
  style?: React.CSSProperties
}) {
  const mainColor = useMainColor()
  return (
    <Select
      className={cn(styles.xrstylemaincolor, className)}
      style={style}
      value={mainColor}
      options={MAIN_COLOR_OPTIONS}
      onChange={(value: MainColor) => {
        setMainColor(value)
      }}
    />
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
      className={cn(styles.xrstyleswitchtheme, className)}
    >
      <SwitchColorMode className={styles.colormode} />
      <SwitchMainColor className={styles.maincolor} />
    </div>
  )
}
