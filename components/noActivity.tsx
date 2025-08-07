import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import noActivityIcon from '../public/no-activity.svg'


const NoActivity = () => {
  return (
   <div className=' space-y-6 mt-5'>

      <Image src={noActivityIcon} alt='' className='mx-auto ' />
      <p className=' text-center'>No activity yet. To go back to the home page click the button below</p>
      <Button className=' bg-[#386776] mx-auto block'>
        <Link href={"/"}>
          Home
        </Link>
      </Button>
    </div>
  )
}

export default NoActivity