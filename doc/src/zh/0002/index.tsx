import React from 'react'
import { Article, Segment } from 'xueyan-react-markdown'
import MODE1_IMG from './mode1.png'
import MODE2_IMG from './mode2.png'

const MARK1 = `
本包是一个颜色库，支持暗、亮两种配色。

> 可操作侧边栏颜色设置选项，体验它的具体效果。  

## 色彩搭配

<p>
  <img style="width:478px" src="${MODE1_IMG}"/>
</p>

适当的色彩搭配方案，可以使人心情愉悦和放松。

<p>
  <img style="width:478px" src="${MODE2_IMG}"/>
</p>

不当的搭配方式，会让人眼睛酸痛，产生抗拒感。

自然界没有计算机中定义的纯黑色，所以我们选择了更自然一点的深黑色，作为暗黑主题的背景色。

为了匹配暗亮两种模式，我们对颜色逐一进行了调整，使其与背景搭配效果更自然。

为满足各种用途，我们以降低透明度和混合背景色两种方式，对颜色进行了分割，使它们能与背景进行不同程度地融合，以突出元素携带的信息在页面上占据的比重。  

## 全局和局部

本包提供的方法和组件，均作用于全局，不能设置局部的颜色模式或主色。  

若对设置局部的颜色模式或主色有需要，请 [参考此处](${XT_PATH}?doc=0005) 自行实现。  

> 温馨提示：这种做法一般是不必要的，它可能会破坏页面整体的视觉效果。  
`

export default function Main() {
  return (
    <Article>
      <Segment>{MARK1}</Segment>
    </Article>
  )
}
