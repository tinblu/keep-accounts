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
  const { visible, setVisible } = useMenuStore()
  return (
    <div>
        <Div>
          <Topnav />
          <TimeRangePicker selected={timeRange} onSelected={setTimeRange}/>
        </Div>
        <ItemsSummary />
        <ItemsList />
        <AddItemFloatButton />
        <TopMenu visible={visible} onClickMask={() => setVisible(!visible)}/>
    </div>
  )
}