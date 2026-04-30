const FeaturedTiles = ({tiles}) => {
  return (
    <>
    <h2 className="text-center font-bold text-3xl"> FeaturedTiles</h2>
      <section className="grid grid-cols-4 gap-4 p-6 container mx-auto">
      {tiles.slice(0, 4).map((tile) => (
        <div key={tile.id} className="border rounded-lg p-4">
          <img src={tile.image} alt={tile.title} className="w-full h-48 object-cover rounded" />
          <h2 className="text-lg font-semibold mt-2">{tile.title}</h2>
          <p className="text-sm text-gray-500">{tile.description}</p>
          <p className="text-blue-600 font-bold mt-1">${tile.price}</p>
          <span className={tile.inStock ? "text-green-500" : "text-red-500"}>
            {tile.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>
      ))}
    </section>
    </>
  );
};

export default FeaturedTiles;