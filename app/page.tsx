"use client";

import Loader from "./components/Loader";
import SidebarNav from "./components/SidebarNav";
import MobileNav from "./components/MobileNav";
import Hero from "./components/Hero";
import About from "./components/About";
import Residential from "./components/residential/Residential";
import Commercial from "./components/commercial/Commercial";
import Club from "./components/club/Club";
import Legacy from "./components/legacy/Legacy";
import Enquiry from "./components/enquiry/Enquiry";
import Footer from "./components/footer/Footer";

import { useGsap } from "./hooks/useGsap";
import { useInteractivity } from "./hooks/useInteractivity";

export default function Home() {
  useGsap();
  useInteractivity();

  return (
    <>
      <Loader />
      <SidebarNav />
      <MobileNav />
      <main className="scrollytelling-container">
        <Hero />
        <About />
        <Residential />
        <Commercial />
        <Club />
        <Legacy />
        <Enquiry />
      </main>
      <Footer />
    </>
  );
}
