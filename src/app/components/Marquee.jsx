"use client";
import React from "react";
import Marquee from "react-fast-marquee";



const BannerMarquee = () => {
  return (
    <div className="bg-slate-300 container mx-auto mt-2.5 mb-2.5">
    <Marquee speed={50} pauseOnHover>
     New Arrivals: Ceramic Blue Tile | Weekly Feature: Modern Geometric Patterns | Join the Community | Best Seller Tiles Available Now 
    </Marquee>
      
    </div>
  );
};

export default BannerMarquee;
