"use client";

import dynamic from "next/dynamic";

// Import các component với dynamic import và tắt SSR
const NavbarHeader = dynamic(() => import("@/component/NavbarHeader"), { ssr: false });
const AuthenEnd = dynamic(() => import("@/component/Footer/AuthenEnd"), { ssr: false });
const AmazonCarousel = dynamic(() => import("../component/Carousel"), { ssr: false });
const AmazonProduct = dynamic(() => import("../component/Product"), { ssr: false });
const CarouselSlick = dynamic(() => import("../component/CarouselSlick"), { ssr: false });

export default function Home() {
  return (
    <>
   <h1> HELLO</h1>
{/*       <NavbarHeader />
      <AmazonCarousel />
      <div className="mt-64">
        <AmazonProduct />
      </div>
      <div className="mt-7">
        <AmazonProduct />
      </div>
      <CarouselSlick />
      <CarouselSlick />
      <div className="mt-7">
        <AmazonProduct />
      </div>
      <CarouselSlick />
      <CarouselSlick />
      <div className="mt-7">
        <AmazonProduct />
      </div>
      <CarouselSlick />
      <AuthenEnd /> */}
    </>
  );
}
