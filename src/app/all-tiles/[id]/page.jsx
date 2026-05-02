
const TileDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch('https://a08server.onrender.com/tiles', {
    cache: "no-store"
  });
  const tiles = await res.json();

  const tile = tiles.find(t => t.id === id);
  if (!tile) {
    return <h1 className="text-red-500">Tile Not Found</h1>;
  }

  return (
   <div className="container mx-auto">
     <div className="border-2 border-black max-w-lg p-3 mt-3.5 mb-3.5 flex flex-col items-center ">
      <img src={tile.image} className="w-96 h-96 object-cover rounded" />
      <h1 className="text-3xl font-bold mt-4">{tile.title}</h1>
      <p>{tile.description}</p>
     <div className="flex justify-between gap-50">
       <p className="text-blue-600 font-bold">${tile.price}</p>

      <p className={tile.inStock ? "text-green-500" : "text-red-500"}>
        {tile.inStock ? "In Stock" : "Out of Stock"}
      </p>
     </div>
    </div>
   </div>
  );
};

export default TileDetailsPage;