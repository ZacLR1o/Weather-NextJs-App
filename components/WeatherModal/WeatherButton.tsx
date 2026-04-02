'use client'

import { useState } from 'react'
import { Button } from '../ui/button'
// import dynamic from 'next/dynamic'
import WeatherDialog from './WeatherDialog'

// 1. Simulate a 3-second delay for the dynamic import
// export const WeatherDialog = dynamic(
//   async () => {
//     await new Promise((resolve) => setTimeout(resolve, 3000))
//     return import('./WeatherDialog')
//   },
//   {
//     loading: () => <p>Is loading...</p>,
//     ssr: false
//   },
// )

export default function WeatherModalButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
      >
        Open modal
      </Button>
      {isOpen && <WeatherDialog isOpen={isOpen} setIsOpen={setIsOpen}/>}
    </>
  )
}