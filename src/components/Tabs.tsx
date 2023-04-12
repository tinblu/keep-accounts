import classNames from 'classnames'
import s from './Tabs.module.scss'
import { ReactNode } from 'react'
import { Gradient } from './Gradient'
type Props<T> = {
  tabItems: {
    key: T
    text: string
    element?: ReactNode
  }[]
  value: T
  onChange: (key: T) => void
  className: string
}
export const Tabs = <T extends string> (props:  Props<T>) =>{
  const { tabItems, value, onChange, className } = props
  return (
    <div >
      <ol className={className}  flex text-bluegray children-px-24px children-py-12px bg='#e9defa'>
        {
          tabItems.map(tr => <li key={tr.key} 
          className={tr.key === value ? s.selected : ''}
          onClick={() => onChange(tr.key)}>{tr.text}</li>)
        }
      </ol>
      <div text-center>
        {tabItems.filter(item => item.key === value)[0].element}
      </div>
    </div>
  )
}