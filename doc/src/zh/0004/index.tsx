import React from 'react'
import { Article, Segment } from 'xueyan-react-markdown'
import { SwitchColorMode, SwitchMainColor, SwitchTheme } from '../../../../src/switch-theme'

const MARK1 = `
## SwitchColorMode

切换页面全局颜色模式

\`\`\`
type SwitchColorMode = (props: {
  className?: string;            // 类名
  style?: React.CSSProperties;   // 样式
}) => JSX.Element
\`\`\`
`

const MARK2 = `
## SwitchMainColor

切换页面全局主色

\`\`\`
type SwitchMainColor = (props: {
  className?: string;            // 类名
  style?: React.CSSProperties;   // 样式
}) => JSX.Element
\`\`\`
`

const MARK3 = `
## SwitchTheme

切换页面全局颜色模式和主色

\`\`\`
type SwitchTheme = (props: {
  className?: string;            // 类名
  style?: React.CSSProperties;   // 样式
}) => JSX.Element
\`\`\`
`

export default function Main() {
  return (
    <Article>
      <Segment>{MARK1}</Segment>
      <SwitchColorMode/>
      <Segment>{MARK2}</Segment>
      <SwitchMainColor/>
      <Segment>{MARK3}</Segment>
      <SwitchTheme style={{ width: '280px' }}/>
    </Article>
  )
}
