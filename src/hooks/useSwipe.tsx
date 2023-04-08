import type { RefObject } from 'react'
import { useEffect, useRef, useState } from 'react'

interface Config {
  onTouchstart?: (event: TouchEvent) => void
  onTouchmove?: (event: TouchEvent) => void
  onTouchend?: (event: TouchEvent) => void
}
export const useSwipe = (elementRef: RefObject<HTMLElement>, config?: Config) => {
  const [direction, setDirection] = useState<'' | 'left' | 'right' | 'up' | 'down'>('')
  const x = useRef(-1)
  const y = useRef(-1)
  const onTouchstart = (e: TouchEvent) => {
    config?.onTouchstart?.(e)
    x.current = e.touches[0].clientX
    y.current = e.touches[0].clientY
  }
  const onTouchmove = (e: TouchEvent) => {
    config?.onTouchmove?.(e)
    const newX = e.touches[0].clientX
    const newY = e.touches[0].clientY
    const dx = newX - x.current
    const dy = newY - y.current
    if (Math.abs(dx) > Math.abs(dy)) {
      if (Math.abs(dx) > 3) {
        setDirection('')
      } else if (dx > 0) {
        setDirection('right')
      } else {
        setDirection('left')
      }
    } else {
      if (Math.abs(dy) < 3) {
        setDirection('')
      } else if (dy > 0) {
        setDirection('down')
      } else {
        setDirection('up')
      }
    }  
  }
  const onTouchend = (e: TouchEvent) => {
    config?.onTouchend?.(e)
    setDirection('')
  }
  useEffect(() => {
    if (!elementRef.current) { return }
    elementRef.current.addEventListener('touchstart', onTouchstart)
    elementRef.current.addEventListener('touchmove', onTouchmove)
    elementRef.current.addEventListener('touchend', onTouchend)

    return () => {
      if (!elementRef.current) { return }
      elementRef.current.removeEventListener('touchstart', onTouchstart)
      elementRef.current.removeEventListener('touchmove', onTouchmove)
      elementRef.current.removeEventListener('touchend', onTouchend)
    }
  }, [])
  return { direction }
}
