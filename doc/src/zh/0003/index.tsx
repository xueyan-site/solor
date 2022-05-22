import React from 'react'
import { Article, Segment } from 'xueyan-react-markdown'

const MARK1 = `
## getColorMode

\`\`\`ts
type getColorMode = () => ColorMode

type ColorMode = 
  | 'auto'    // 跟随系统
  | 'light'   // 亮色
  | 'dark'    // 暗色
\`\`\`

获取页面全局颜色模式

## useColorMode

\`\`\`ts
type useColorMode = () => ColorMode
\`\`\`

组件内获取页面全局颜色模式

> 颜色模式更改时，它会引起组件的更新

## setColorMode

\`\`\`ts
type setColorMode = (
  colorMode: ColorMode
) => void
\`\`\`

设置页面全局颜色模式

## getMainColor

\`\`\`ts
type getMainColor = () => MainColor

type MainColor = 
  | 'red'     // 红色
  | 'orange'  // 橙色
  | 'yellow'  // 黄色
  | 'green'   // 绿色
  | 'cyan'    // 青色
  | 'blue'    // 蓝色
  | 'purple'  // 紫色
  | 'pink'    // 粉色
  | 'brown'   // 棕色
  | 'indigo'  // 靛蓝色
  | 'mint'    // 薄荷色
  | 'teal'    // 水蓝色
\`\`\`

获取页面全局主色

## useColorMode

\`\`\`ts
type useMainColor = () => MainColor
\`\`\`

组件内获取页面全局主色

> 主色更改时，它会引起组件的更新

## setMainColor

\`\`\`ts
type setMainColor = (
  mainColor: MainColor
) => void
\`\`\`

设置页面全局主色
`

export default function Main() {
  return (
    <Article>
      <Segment>{MARK1}</Segment>
    </Article>
  )
}
