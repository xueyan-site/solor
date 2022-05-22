import React, { useEffect, useRef, useState } from 'react'
import cn from 'classnames'
import { useColorMode } from 'xueyan-react-style'
import styles from './color-item.scss'
import { copyToClipboard } from 'utl/browser'

export function ColorItem({
  name,
  className
}: {
  name: string
  className?: string
}) {
  const colorMode = useColorMode()
  const rootRef = useRef<HTMLDivElement>(null)
  const [color, setColor] = useState<number[]>()
  const [alpha, setAlpha] = useState<number>()
  useEffect(() => {
    if (rootRef.current) {
      const c = getComputedStyle(rootRef.current).backgroundColor
      const r = /([0-9\.]+), ([0-9\.]+), ([0-9\.]+)(, ([0-9\.]+))?/.exec(c)
      if (r) {
        setColor([Number(r[1]),Number(r[2]),Number(r[3])])
        setAlpha(r[5] ? Number(r[5]) : 1)
      }
    }
  }, [colorMode])
  return (
    <div 
      ref={rootRef}
      className={cn(className, styles.coloritem)} 
      style={{ backgroundColor: `var(--${name})` }}
      onClick={() => {
        copyToClipboard(`var(--${name})`)
      }}
    >
      <div className={styles.label}>
        {name}
      </div>
      {color && (
        <div className={styles.color}>
          {color.join(',')}
        </div>
      )}
      {alpha !== undefined && (
        <div className={styles.alpha}>{alpha}</div>
      )}
    </div>
  )
}