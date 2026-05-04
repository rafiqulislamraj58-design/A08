import React from 'react'
import Link from 'next/link'
import { Input } from "@heroui/react"

const AllTilesPage = async ({ searchParams }) => {
  const { q } = await searchParams

  const res = await fetch('https://a08server.onrender.com/tiles', { cache: "no-store" })
  if (!res.ok) throw new Error('Failed to load tiles data')

  const tiles = await res.json()
  const filtered = tiles.filter((tile) =>
    tile.title.toLowerCase().includes(q?.toLowerCase() || "")
  )

  return (
    <div>
      <h1 className='text-2xl font-bold mt-4 text-center'>All-Tiles</h1>
      <form className="flex justify-center my-4">
        <Input type="text" name="q" defaultValue={q || ""} placeholder="Search tiles..." className="max-w-md" />
      </form>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto mb-4 px-4">
        {filtered.map((tile) => (
          <div key={tile.id} className="border rounded-lg p-4">
            <img src={tile.image} className="w-full h-48 object-cover rounded" />
            <h2 className="text-lg font-semibold mt-2">{tile.title}</h2>
            <p className="text-sm text-gray-500">{tile.description}</p>
            <p className="text-blue-600 font-bold mt-1">${tile.price}</p>
            <div className="flex justify-between items-center mt-2">
              <span className={tile.inStock ? "text-green-500" : "text-red-500"}>
                {tile.inStock ? "In Stock" : "Out of Stock"}
              </span>
              <Link href={`/all-tiles/${tile.id}`} className="p-1.5 text-white bg-purple-500 rounded-md">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllTilesPage