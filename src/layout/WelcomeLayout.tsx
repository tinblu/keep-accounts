import { animated, useTransition } from '@react-spring/web'
import type { ReactNode } from 'react'
import React from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
const map: Record<string, ReactNode> = {}
export const WelcomeLayout: React.FC = () => {
  const location = useLocation() // 获取当前地址栏信息
  // location.pathname = /welcome/1
  // location.pathname = /welcome/2
  const outlet = useOutlet() // 获取元素子元素
  map[location.pathname] = outlet
  const transition = useTransition(location.pathname, {
    // 进入状态
    from: { transform: 'translateX(100%)' },
    // 稳定状态
    enter: { transform: 'translateX(0%)' },
    // 离开状态
    leave: { transform: 'translateX(-100%)' },
    config: { duration: 3000 },
  })
  return transition((style, pathname) => {
    return <animated.div key={pathname} style={style}>
      <div style={{ textAlign: 'center' }}>
        {map[pathname]}
      </div>
    </animated.div>
  },
  )
}
