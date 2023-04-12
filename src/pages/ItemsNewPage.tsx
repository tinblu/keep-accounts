import { ReactNode, useState } from "react"
import { Gradient } from "../components/Gradient"
import { Icon } from "../components/Icon"
import { Tabs } from "../components/Tabs"
import { Topnav } from "../components/Topnav"

type ItemKind = 'income' | 'expenses'
const tabItems: { key: ItemKind, text: string, element?: ReactNode }[] = [
  { key: 'expenses', text: '支出', element: <div>支出</div>},
  { key: 'income', text: '收入', element: <div>收入</div> }
]
export const ItemsNewPage: React.FC = () =>{
  const [ tabItem, setTabItem ] = useState<ItemKind>('expenses')
  return (
    <div>
      <Gradient>
        <Topnav title="记一笔" icon={ <Icon name="back"/> }/>
      </Gradient>
        <Tabs className="children-flex-1 text-center" tabItems={tabItems} value={ tabItem } onChange={(item) => setTabItem(item)}/>
    </div>
  )
}