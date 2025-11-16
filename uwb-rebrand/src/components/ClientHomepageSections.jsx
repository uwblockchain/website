"use client";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const Cards = dynamic(() => import("@/components/Cards"), { ssr: false });
const EventsGrid = dynamic(() => import("@/components/EventsGrid"), { ssr: false });

export default function ClientHomepageSections() {
  return (
    <>
      <Hero />
      <Cards />
      <EventsGrid />
    </>
  );
}