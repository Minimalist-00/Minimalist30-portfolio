import { useState, useEffect, MouseEvent } from 'react'

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<{
    x: number
    y: number
  }>({ x: -200, y: 0 })

  const updateMousePosition = (event: any) => {
    //TODO any型をなんとかする
    setMousePosition({ x: event.pageX, y: event.pageY })
  }

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition)

    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return mousePosition
}

export default useMousePosition
