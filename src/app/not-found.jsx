import { Button } from '@heroui/react'
import Link from 'next/link'
import React from 'react'
const NotFoundPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen gap-4'>
      <h1 className='text-6xl font-bold text-purple-300'>404</h1>
      <p className='text-center font-bold text-purple-300'>Page Not Found</p>
      <Link href='/'>
       <Button variant='danger'>Go to home</Button>
      </Link>
    </div>
  )
}

export default NotFoundPage