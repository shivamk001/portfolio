"use client";
import { NavbarDemo } from "@/components/Navbar";
import { SpotlightPreview } from "@/components/Spotlight";
import { CarouselDemo } from "@/components/Carousel";

export default function Home() {
  return (<>
    <SpotlightPreview/>
    <NavbarDemo/>
    <CarouselDemo/>
  </>);
}
