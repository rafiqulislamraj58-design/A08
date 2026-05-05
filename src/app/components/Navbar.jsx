'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { authClient } from '@/lib/auth-client'

const Navbar = () => {
  const userData = authClient.useSession()
  const user = userData.data?.user
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleSignOut = async () => {
    await authClient.signOut()
    window.location.href = '/'
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/all-tiles', label: 'All Tiles' },
    { href: '/my-profile', label: 'My Profile' },
  ]

  return (
    <nav className="bg-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-purple-950 font-bold text-2xl drop-shadow">
            TilesGallery
          </Link>
          <ul className="hidden md:flex gap-6">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === href
                      ? 'text-purple-700 border-b-2 border-purple-500 pb-0.5'
                      : 'text-gray-700 hover:text-purple-600'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <>
                {user.image && user.image.trim() !== 'null' ? (
                  <img
                    src={user.image}
                    alt={user?.name || 'User'}
                    className="w-9 h-9 rounded-full object-cover border-2 border-purple-500"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-sm">
                    {user?.name?.charAt(0).toUpperCase() || 'U'}
                  </div>
                )}
                <span className="text-sm font-medium text-gray-700 max-w-[120px] truncate">
                  {user?.name}
                </span>
                <button
                  onClick={handleSignOut}
                  className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1.5 rounded-md transition-colors"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link
                href="/log"
                className="bg-purple-500 hover:bg-purple-600 text-white text-sm px-4 py-1.5 rounded-md shadow transition-colors"
              >
                Login
              </Link>
            )}
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100 border-t border-gray-300 px-4 py-4 flex flex-col gap-3">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsMenuOpen(false)}
              className={`block text-base py-2 font-medium transition-colors ${
                pathname === href
                  ? 'text-purple-700 border-l-4 border-purple-500 pl-3'
                  : 'text-gray-700 hover:text-purple-600 pl-3'
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="flex items-center gap-3 pt-2 border-t border-gray-300">
            {user ? (
              <>
                {user.image && user.image.trim() !== 'null' ? (
                  <img
                    src={user.image}
                    alt={user?.name || 'User'}
                    className="w-9 h-9 rounded-full object-cover border-2 border-purple-500"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-sm">
                    {user?.name?.charAt(0).toUpperCase() || 'U'}
                  </div>
                )}
                <span className="text-sm font-medium text-gray-700 truncate flex-1">
                  {user?.name}
                </span>
                <button
                  onClick={() => { setIsMenuOpen(false); handleSignOut() }}
                  className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1.5 rounded-md transition-colors"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link
                href="/log"
                onClick={() => setIsMenuOpen(false)}
                className="bg-purple-500 hover:bg-purple-600 text-white text-sm px-4 py-1.5 rounded-md shadow transition-colors"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar