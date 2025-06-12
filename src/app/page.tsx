"use client";
import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import Problem from "@/components/home/Problem";
import Solution from "@/components/home/Solution";
import Details from "@/components/home/Detail";
import Timeline from "@/components/home/Timeline";
import Future from "@/components/home/Future";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <div className="max-h-screen font-sans bg-[#FDFBF5] text-[#333D44]" style={{ overflowX: "hidden" }}>
      <Header />
      <Hero />
      <main>
      <Problem />
      <Solution />
      <Details />
      <Timeline />
      <Future />
      </main>
      <Footer />
    </div>
  );
}
