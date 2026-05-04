'use client'
import { authClient } from '@/lib/auth-client';
import { Card } from '@heroui/react';
import React from 'react'
import { UpdateUser } from '../components/Update';

const MyProfile = () => {
  const { data: session, isPending, refetch } = authClient.useSession()
  const user = session?.user

  if (isPending) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <p>Loading...</p>
      </div>
    )
  }

  if (!user) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <p>Not logged in</p>
      </div>
    )
  }
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <Card className="p-6 mt-1.5 mb-5 flex items-center justify-center gap-3 border">
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
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
          <UpdateUser onSuccess={() => refetch()}  />
      </Card>
    
    </div>
  )
}

export default MyProfile