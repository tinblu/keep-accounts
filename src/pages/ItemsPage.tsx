import React,{ useState } from "react"
import styled from "styled-components"
import { AddItemFloatButton } from "../components/AddItemFloatButton"
import { TimeRange, TimeRangePicker } from "../components/TimeRangePicker"
import { Topnav } from "../components/Topnav"
import { ItemsList } from "./ItemsPage/ItemsList"
import { ItemsSummary } from "./ItemsPage/ItemsSummary"
import { TopMenu } from "../components/TopMenu"
import { useMenuStore } from "../stores/useMenuStore"
import { Gradient } from "../components/Gradient"
import { Icon } from "../components/Icon"

export const ItemsPage: React.FC = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>('thisMonth')
  const { visible, setVisible } = useMenuStore()
  return (
    <div>
        <Gradient>
          <Topnav title="账目列表" icon={
            <Icon name="menu"  onClick={() => setVisible(!visible)}/>
          }/>
          <TimeRangePicker selected={timeRange} onSelected={setTimeRange}/>
        </Gradient>
        <ItemsSummary />
        <ItemsList />
        <AddItemFloatButton />
        <TopMenu visible={visible} onClickMask={() => setVisible(!visible)}/>
    </div>
  )
}