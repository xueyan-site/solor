import React from 'react'
import { Article, Segment } from 'xueyan-react-markdown'
import { SwitchColorMode, SwitchMainColor, SwitchTheme } from '../../../../src/switch-theme'

const MARK1 = `
## SwitchColorMode

\`\`\`ts
type SwitchColorMode = (props: {
  className?: string;
  style?: React.CSSProperties;
}) => JSX.Element
\`\`\`

| 属性 | 名称 | 类型 | 说明 |
| - | - | - | - |
| className | 类名 | \`? string\` |  |
| style | 样式 | \`? React.CSSProperties\` |  |

切换页面全局颜色模式
`

const MARK2 = `
## SwitchMainColor

\`\`\`ts
type SwitchMainColor = (props: {
  className?: string;
  style?: React.CSSProperties;
}) => JSX.Element
\`\`\`

| 属性 | 名称 | 类型 | 说明 |
| - | - | - | - |
| className | 类名 | \`? string\` |  |
| style | 样式 | \`? React.CSSProperties\` |  |

切换页面全局主色
`

const MARK3 = `
## SwitchTheme

\`\`\`ts
type SwitchTheme = (props: {
  className?: string;
  style?: React.CSSProperties;
}) => JSX.Element
\`\`\`

| 属性 | 名称 | 类型 | 说明 |
| - | - | - | - |
| className | 类名 | \`? string\` |  |
| style | 样式 | \`? React.CSSProperties\` |  |

切换页面全局颜色模式和主色
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
