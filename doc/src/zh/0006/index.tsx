import React from 'react'
import { Article, Segment } from 'ark-markdown'

const MARK1 = `
## 使用本包配色

在项目入口文件顶端引入本包。

\`\`\`
import 'solor'
\`\`\`

书写与颜色有关的 css 属性值时，用 [css 变量](?doc=0001) 代替。

\`\`\`css
background-color: var(--base1);
\`\`\`

## 修改页面背景色和默认字体颜色

将以下样式加入全局css样式中。

\`\`\`css
body {
  color: var(--font);
  background-color: var(--base);
}
\`\`\`

## 更换主题

1、以组件的形式

效果如左侧。

\`\`\`
<SwitchTheme />
// 或者
<SwitchColorMode />
<SwitchMainColor />
\`\`\`

2、以函数的形式

\`\`\`
setColorMode('dark')
setMainColor('blue')
\`\`\`

## 查询主题

1、 组件内部

\`\`\`
useColorMode()
useMainColor()
\`\`\`

2、组件外部

\`\`\`
getColorMode()
getMainColor()
\`\`\`
`

export default function Main() {
  return (
    <Article>
      <Segment>{MARK1}</Segment>
    </Article>
  )
}
