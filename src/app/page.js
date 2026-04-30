import Banner from "./components/Banner";
import FeaturedTiles from "./components/FeaturedTiles";

async function getTiles() {
  const res = await fetch("https://a08server.onrender.com/tiles", {
    cache: "no-store",
  });
  return res.json();
}
export default async function Home() {
  const tiles = await getTiles(); 
  return (
    <>
      <Banner />
      <FeaturedTiles tiles={tiles} />
    </>
  );
}