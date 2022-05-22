import React from 'react'
import { Article, Segment } from 'xueyan-react-markdown'
import { ColorBlock } from './color-block'

const MARK1 = `
> 点击色块，复制 css 变量。
`

export default function Main() {
  return (
    <Article>
      <Segment>{MARK1}</Segment>
      <ColorBlock label="主色（可修改）" name="main" maxNum={10} />
      <ColorBlock label="背景基色" name="base" maxNum={2} />
      <ColorBlock label="字体色" name="font" maxNum={3} />
      <ColorBlock label="蒙层颜色" name="mask" maxNum={4} />
      <ColorBlock label="区块颜色" name="area" maxNum={10} />
      <ColorBlock label="白色" name="white" maxNum={10} />
      <ColorBlock label="红色" name="red" maxNum={10} />
      <ColorBlock label="橙色" name="orange" maxNum={10} />
      <ColorBlock label="黄色" name="yellow" maxNum={10} />
      <ColorBlock label="绿色" name="green" maxNum={10} />
      <ColorBlock label="青色" name="cyan" maxNum={10} />
      <ColorBlock label="蓝色" name="blue" maxNum={10} />
      <ColorBlock label="紫色" name="purple" maxNum={10} />
      <ColorBlock label="粉色" name="pink" maxNum={10} />
      <ColorBlock label="棕色" name="brown" maxNum={10} />
      <ColorBlock label="靛蓝色" name="indigo" maxNum={10} />
      <ColorBlock label="薄荷色" name="mint" maxNum={10} />
      <ColorBlock label="水蓝色" name="teal" maxNum={10} />
    </Article>
  )
}
