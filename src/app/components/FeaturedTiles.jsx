"use client";
import { useState } from "react";
import Image from "next/image";
const FeaturedTiles = ({tiles}) => {
  const [tilear, settiles] = useState(null)
  return (
    <>
    <h2 className="text-center font-bold text-3xl"> FeaturedTiles</h2>
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 container mx-auto">
      {tiles?.slice(0, 4).map((tile) => (
        <div key={tile.id} className="border rounded-lg p-4">
          <img src={tile.image} alt={tile.title} className="w-full h-48 object-cover rounded" />
          <h2 className="text-lg font-semibold mt-2">{tile.title}</h2>
          <p className="text-sm text-gray-500">{tile.description}</p>
          <p className="text-blue-600 font-bold mt-1">${tile.price}</p>
          <div className="flex justify-between items-center pb-2">
            <span className={tile.inStock ? "text-green-500" : "text-red-500"}>
            {tile.inStock ? "In Stock" : "Out of Stock"}
          </span>
          <button onClick={()=>settiles(tile)} className="p-1.5 text-white bg-purple-500 rounded-md mb-2">View Details</button>
          </div>
        </div>
      ))}
    </section>
    {tilear && (
      <div className="fixed inset-0 bg-black/90 flex justify-center items-center z-50">
       <div className="bg-white p-6 rounded-lg w-[400px] relative shadow-lg">
     <button 
     onClick={()=>settiles(null)} className="absolute top-2 right-2 text-red-500 text-lg">
     x
     </button>
     <Image
      src={tilear.image}
      width={400}
      height={400}
      alt={tilear.title}
      className="w-full h-56 object-cover rounded"
     />
    
     <h2 className="text-xl font-bold mt-2">{tilear.title}</h2>
      <p className="text-gray-600 mt-1">{tilear.description}</p>
      <p className="text-green-600 font-bold mt-2">
         ${tilear.price}
      </p>
      <span className={tilear.inStock  ? "text-green-500" : "text-red-500"}>{tilear.inStock ? "In Stock" : "Out of Stock"} </span>
       </div>
      </div>

      )

    }
    </>
  );
};

export default FeaturedTiles;