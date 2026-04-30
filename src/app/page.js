import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import FeaturedTiles from "./components/FeaturedTiles";

export default function Home() {
  return (
    <>
      <Banner/>
      <FeaturedTiles/>
    </>
  );
}
