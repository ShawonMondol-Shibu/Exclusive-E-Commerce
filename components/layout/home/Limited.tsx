import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function Limited() {
  return (
    <main className="container m-auto bg-black text-white space-y-10 py-20 flex items-center justify-center" >
        <div>
            <span className='text-green-500 font-bold'>Categories</span>
            <h2 className="text-5xl font-semibold">Enhance Your Music Experience</h2>
            <div>
                <span></span>
            </div>
            <Button variant={'default'} size={'lg'} className='bg-green-500'>Buy Now</Button>
        </div>
        <Image src={'/images/soundbox.png'} alt='sound box' width={500} height={500}/>
    </main>
  )
}
