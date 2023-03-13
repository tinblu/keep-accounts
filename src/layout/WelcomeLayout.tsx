import { animated, useTransition } from '@react-spring/web'
import type { ReactNode } from 'react'
import { useRef, useState } from 'react'
import { Link, useLocation, useOutlet } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
const linkMap = {
  '/welcome/1': '/welcome/2',
  '/welcome/2': '/welcome/3',
  '/welcome/3': '/welcome/4',
  '/welcome/4': '/welcome/xxx',
}
export const WelcomeLayout: React.FC = () => {
  const map = useRef<Record<string, ReactNode>>({})
  const location = useLocation()
  const outlet = useOutlet()
  map.current[location.pathname] = outlet
  const [extraStyle, setExtraStyle] = useState({ position: 'relative' })
  const transitions = useTransition(location.pathname, {
    from: { transform: location.pathname === '/welcome/1' ? 'translateX(0%)' : 'translateX(100%)' },
    enter: { transform: 'translateX(0%)' },
    leave: { transform: 'translateX(-100%)' },
    config: { duration: 300 },
    onStart: () => {
      setExtraStyle({ position: 'absolute' })
    },
    onRest: () => {
      setExtraStyle({ position: 'relative' })
    },
  })
  return (
    <div>
      <header>
        <img src={logo}/>
        <h1>蓝莓记账</h1>
      </header>
      <main>
        {
          transitions((style, pathname) =>
            <animated.div key={pathname} style={style}>
              <div>
                {map.current[pathname]}
              </div>
            </animated.div>,
          )
        }
      </main>
      <footer>
        <Link to={linkMap[location.pathname]}>下一页</Link>
        <Link to="/welcome/xxx">跳过</Link>
      </footer>
    </div>
  )
}
