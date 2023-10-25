"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";
import "./lenisStyles.scss";
import Hero from "./components/componentsHome/Hero";
import Descubre from "./components/componentsHome/Descubre";
import About from "./components/componentsHome/About";
import ImagesGallery from "./components/componentsHome/ImagesGallery";
import Maps from "./components/componentsHome/Maps";
import Contactate from "./components/componentsHome/Contactate";
import ContyFooter from "./components/componentsHome/ContyFooter";
import Tasaciones from "./components/componentsHome/Tasaciones";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      gestureOrientation: "vertical",
      smoothTouch: true,
      autoResize: true,
    });

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="fondo ">
      <Hero />
      <Descubre />
      <About />
      <ImagesGallery />
      <Tasaciones />
      <Maps />
      <Contactate />
      <ContyFooter />
    </main>
  );
}
