import classNames from 'classnames'
import s from './Tabs.module.scss'
type Props<T> = {
  tabItems: {
    key: T
    text: string
  }[]
  value: T
  onChange: (key: T) => void
  className: string
}
export const Tabs = <T extends string> (props:  Props<T>) =>{
  const { tabItems, value, onChange, className } = props
  return (
    <ol className={className}  flex text-bluegray children-px-24px children-py-12px cursor-pointer>
      {
        tabItems.map(tr => <li key={tr.key} 
        className={tr.key === value ? s.selected : ''}
        onClick={() => onChange(tr.key)}>{tr.text}</li>)
      }
    </ol>
  )
}