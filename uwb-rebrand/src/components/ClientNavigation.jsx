"use client";
import dynamic from "next/dynamic";

const Navigation = dynamic(() => import("@/components/Navigation"), {
  ssr: false,
});

export default function ClientNavigation() {
  return <Navigation />;
}