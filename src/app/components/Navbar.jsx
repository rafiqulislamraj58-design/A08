'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname();
  return (
    <>
     <div className='bg-gray-200 flex items-center justify-between p-6'>
      <h2><Link href={'/'} className='text-purple-950 font-bold text-3xl text-shadow-lg '>TilesGallery</Link></h2>
      <div>
      <ul className='flex gap-2.5'>
        <li><Link href={'/'} className={pathname === '/' ? 'border-b-2 border-purple-500' : ''} > Home</Link></li>
        <li><Link href={'/all-tiles'} className={pathname === '/all-tiles' ? 'border-b-2  border-purple-500' : ''}>All Tiles</Link></li>
        <li><Link href={'/my-profile'} className={pathname === '/my-profile' ? 'border-b-2 border-purple-500' : ''}>My Profile</Link></li>
      </ul>
      </div>
      <div>
        <Link href={'/log'} className='bg-purple-500 rounded-md p-2 shadow text-white'>Login</Link>
      </div>
          
     </div>
    </>
  )
}

export default Navbar