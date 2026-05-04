"use client";
import { useState } from "react";
import Link from "next/link";
export default function TileSearch({ tiles }) {
  const [search, setSearch] = useState("");

  const filtered = tiles.filter((tile) =>
    tile.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <div className="flex justify-center my-4">
        <input
        type="text"
        placeholder="Search tiles..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded-lg px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto mb-4">
        {filtered.length > 0 ? (
          filtered.map((tile) => (
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
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-400">No tiles found.</p>
        )}
      </div>
    </div>
  );
}