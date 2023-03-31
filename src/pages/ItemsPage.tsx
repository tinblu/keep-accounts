import React,{ useState } from "react"
import styled from "styled-components"
import { AddItemFloatButton } from "../components/AddItemFloatButton"
import { TimeRange, TimeRangePicker } from "../components/TimeRangePicker"
import { Topnav } from "../components/Topnav"
import { ItemsList } from "./ItemsPage/ItemsList"
import { ItemsSummary } from "./ItemsPage/ItemsSummary"
import { TopMenu } from "../components/TopMenu"
import { useMenuStore } from "../stores/useMenuStore"

const Div = styled.div`
  background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);
`
export const ItemsPage: React.FC = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>('thisMonth')
  const [items] = useState<Item[]>([
    {
      id: 1,
      kind: 'incomes',
      amount: 1000,
      user_id: 1,
      tag_ids: [1],
      happen_at: '2021-01-01T00:00:00.000Z',
      created_at: '2021-01-01T00:00:00.000Z',
      updated_at: '2021-01-01T00:00:00.000Z',
    }, {
      id: 2,
      kind: 'incomes',
      amount: 1000,
      user_id: 1,
      tag_ids: [1],
      happen_at: '2021-01-01T00:00:00.000Z',
      created_at: '2021-01-01T00:00:00.000Z',
      updated_at: '2021-01-01T00:00:00.000Z',
    }
  ])
  const { visible } = useMenuStore()
  return (
    <div>
        <Div>
          <Topnav />
          <TimeRangePicker selected={timeRange} onSelected={setTimeRange}/>
        </Div>
        <ItemsSummary />
        <ItemsList items={items}/>
        <AddItemFloatButton />
        {visible  ? <TopMenu/> : null}
    </div>
  )
}