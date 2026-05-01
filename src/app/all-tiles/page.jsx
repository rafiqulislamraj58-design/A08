import React from 'react'
import Link from 'next/link'

const AllTilesPage = async () => {
  const res = await fetch('https://a08server.onrender.com/tiles', {
    cache: "no-store"
  })
  if (!res.ok) {
    throw new Error('Failed to load tiles data');
  }

  const tiles = await res.json()

  return (
    <div>
      <h1 className='text-2xl font-bold mt-4 text-center '>All-Tiles</h1>

      <div className="grid grid-cols-3 gap-4 container mx-auto">
        {tiles.map((tile) => (
          <div key={tile.id} className="border rounded-lg p-4">
            <img src={tile.image} className="w-full h-48 object-cover rounded" />
            <h2 className="text-lg font-semibold mt-2">{tile.title}</h2>
            <p className="text-sm text-gray-500">{tile.description}</p>
            <p className="text-blue-600 font-bold mt-1">${tile.price}</p>

            <div className="flex justify-between items-center mt-2">
              <span className={tile.inStock ? "text-green-500" : "text-red-500"}>
                {tile.inStock ? "In Stock" : "Out of Stock"}
              </span>

              <Link
                href={`/all-tiles/${tile.id}`}
                className="p-1.5 text-white bg-purple-500 rounded-md"
              >
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