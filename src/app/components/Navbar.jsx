'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { authClient } from '@/lib/auth-client'
import { Button } from '@heroui/react'

const Navbar = () => {
 const userData = authClient.useSession()
 const user =  userData.data?.user


 const handelSignOut = async () => {
  await authClient.signOut();
   window.location.href = '/';

 }

console.log(user);

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
      <div className='flex  justify-center items-center gap-3'>
        {user && (
      <div className='flex items-center gap-2'>
                {user.image && user.image.trim() !== 'null' ? (
                  <img
                    src={user.image}
                    alt={user?.name || "User"}
                    className="w-9 h-9 rounded-full object-cover border-2 border-purple-500"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-sm">
                    {user?.name?.charAt(0).toUpperCase() || "U"}
                  </div>
                )}
                <Button onClick={handelSignOut} size='sm' color='danger'>SignOut</Button>
              </div>
            )}
            {!user && (
    <Link href={'/log'} className='bg-purple-500 rounded-md p-2 shadow text-white'>
      Login
    </Link>
  )}
        </div>
          
     </div>
    </>
  )
}

export default Navbar