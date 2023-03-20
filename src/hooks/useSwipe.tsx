import type { RefObject } from 'react'
import { useEffect, useRef, useState } from 'react'

interface Config {
  onTouchstart?: (event: TouchEvent) => void
  onTouchmove?: (event: TouchEvent) => void
  onTouchend?: (event: TouchEvent) => void
}
export const useSwipe = (elementRef: RefObject<HTMLElement>, config?: Config) => {
  const [direction, setDirection] = useState<'' | 'left' | 'right'>('')
  const x = useRef(-1)
  const onTouchstart = (e: TouchEvent) => {
    config?.onTouchstart?.(e)
    x.current = e.touches[0].clientX
  }
  const onTouchmove = (e: TouchEvent) => {
    config?.onTouchmove?.(e)
    const newX = e.touches[0].clientX
    const d = newX - x.current
    if (Math.abs(d) > 3) {
      setDirection('')
    } else if (d > 0) {
      setDirection('right')
    } else {
      setDirection('left')
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
