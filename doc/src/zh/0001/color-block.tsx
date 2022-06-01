import React from 'react'
import styles from './color-block.scss'
import { ColorItem } from './color-item'

export function ColorBlock({
  name,
  label,
  maxNum
}: {
  name: string
  label: string
  maxNum: number
}) {
  const maxLine = Math.ceil(maxNum / 5)
  return (
    <div className={styles.colorblock}>
      <div className={styles.label}>{label}</div>
      <div className={styles.list}>
        <ColorItem className={styles.item} name={name} />
      </div>
      {Array(maxLine).fill(null).map((_i, i) => (
        <div key={i} className={styles.list}>
          {Array(5).fill(null).map((_j, j) => {
            const key = (i * 5) + 1 + j
            return key > maxNum ? null : (
              <ColorItem 
                className={styles.item} 
                key={j} 
                name={name + ((i * 5) + 1 + j)}
              />
            )
          })}
        </div>
      ))}
    </div>
  )
}