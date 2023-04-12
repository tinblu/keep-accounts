import { ReactNode, useState } from "react"
import { Gradient } from "../components/Gradient"
import { Icon } from "../components/Icon"
import { Tabs } from "../components/Tabs"
import { Topnav } from "../components/Topnav"
import { Tags } from "./ItemsNewPage/Tags"

const tabItems: { key: Item['kind'], text: string, element?: ReactNode }[] = [
  { key: 'expenses', text: '支出', element:  <Tags kind="expenses" />},
  { key: 'income', text: '收入', element: <Tags kind="income" /> }
]
export const ItemsNewPage: React.FC = () =>{
  const [ tabItem, setTabItem ] = useState<Item['kind']>('expenses')
  return (
    <div>
      <Gradient>
        <Topnav title="记一笔" icon={ <Icon name="back"/> }/>
      </Gradient>
        <Tabs className="children-flex-1 text-center" tabItems={tabItems} value={ tabItem } onChange={(item) => setTabItem(item)}/>
    </div>
  )
}