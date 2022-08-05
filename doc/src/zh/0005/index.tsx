import React from 'react'
import { Article, Segment } from 'ark-markdown'

const MARK1 = `
## 元素上设置颜色模式

本包导出了 styles 供使用方设置类名。包含有以下类名：

| 类名 | 说明 |
| - | - |
| xrstyleauto | 颜色模式跟随系统 |
| xrstylelight | 颜色模式为亮色 |
| xrstyledark | 颜色模式为暗黑色 |

用法如下：

\`\`\`
import { styles } from 'solor'
<div className={styles.xrstylelight}>
  ...
</div>
\`\`\`

## 元素上设置主色

\`\`\`css
.xxx {
  --main: var(--brown);
  --main1: var(--brown1);
  --main2: var(--brown2);
  --main3: var(--brown3);
  --main4: var(--brown4);
  --main5: var(--brown5);
  --main6: var(--brown6);
  --main7: var(--brown7);
  --main8: var(--brown8);
  --main9: var(--brown9);
  --main10: var(--brown10);
}
\`\`\`
`

export default function Main() {
  return (
    <Article>
      <Segment>{MARK1}</Segment>
    </Article>
  )
}
