import React from 'react'
import { PageDoc } from 'com/page-doc'
import { ComponentIcon, FunctionIcon, VariableIcon } from 'sicon'
import pkg from '../../../package.json'
import type { PageProps } from 'sdin-react'
import type { Collection } from 'ark-doc'

const FUNCTION_ICON = <FunctionIcon color="var(--orange)" />
const COMPONENT_ICON = <ComponentIcon color="var(--blue)" />
const VARIABLE_ICON = <VariableIcon color="var(--purple)" />

const COLLECTIONS: Collection<string,string>[] = [
  {
    value: '9999',
    label: '指南',
    contents: [
      {
        value: '0001',
        label: '颜色列表',
        content: () => import('./0001')
      },
      {
        value: '0006',
        label: '用法',
        content: () => import('./0006')
      },
      {
        value: '0002',
        label: '说明',
        content: () => import('./0002')
      }
    ]
  },
  {
    value: '9998',
    label: '接口文档',
    contents: [
      {
        value: '0003',
        label: '方法',
        icon: FUNCTION_ICON,
        content: () => import('./0003')
      },
      {
        value: '0004',
        label: '组件',
        icon: COMPONENT_ICON,
        content: () => import('./0004')
      },
      {
        value: '0005',
        label: '样式',
        icon: VARIABLE_ICON,
        content: () => import('./0005')
      }
    ]
  }
]

export default function Index(props: PageProps) {
  return (
    <PageDoc 
      {...props}
      language="zh"
      version={pkg.version}
      collections={COLLECTIONS}
      name={pkg.name}
      description={pkg.description}
    />
  )
}
