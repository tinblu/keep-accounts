import { animated, useSpring } from "@react-spring/web"
import { CurrentUser } from "./TopMenu/CurrentUser"
import { Menu } from "./TopMenu/Menu"

interface Props {
  onClickMask?: () => void
  visible?: boolean
}
export const TopMenu: React.FC<Props> = (props) =>{
  const { onClickMask, visible} = props
  const maskStyles = useSpring({
    opacity: visible ? 1 : 0,
    config: { duration: 500 }
  })
  const menuStyles = useSpring({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateX(0%)' : 'translateX(-100%)',
    config: { duration: 500 }
  })
  return (
    <>
      <animated.div fixed top-0 left-0 w="100%" h="100%" className="bg-black:75" z="[calc(var(--z-menu)-1)]"
        onClick={onClickMask} style={maskStyles}/>
      <animated.div fixed top-0 left-0 w="70vw" max-w-20em h-screen flex flex-col z="[var(--z-menu)]"
        style={menuStyles}>
        <CurrentUser className="grow-0 shrink-0" />
        <Menu className="grow-1 shrink-1" />
      </animated.div>
    </>
  )
}