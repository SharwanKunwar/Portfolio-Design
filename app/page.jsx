import Link from 'next/link'
import React from 'react'
import { TypewriterEffectSmoothDemo } from './components/ui/TypewriterEffectSmoothDemo'
import { SpotlightPreview } from './components/ui/SpotlightPreview'

function page() {
  return (
    <div className='bg-black w-screen h-screen flex justify-center items-center p-50'>
      <SpotlightPreview/>
    </div>
  )
}

export default page


