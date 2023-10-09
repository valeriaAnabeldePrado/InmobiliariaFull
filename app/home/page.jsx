import React from "react";

import Hero from "../components/componentsHome/Hero";
import Descubre from "../components/componentsHome/Descubre";
import "../globals.scss";
import About from "../components/componentsHome/About";
import ImagesGallery from "../components/componentsHome/ImagesGallery";
import Tasasiones from "../components/componentsHome/Tasasiones";
import Maps from "../components/componentsHome/Maps";
import Contactate from "../components/componentsHome/Contactate";
import ContyFooter from "../components/componentsHome/ContyFooter";

const HomeIndex = () => {
  return (
    <>
      <main className="fondo">
        <Hero />
        <Descubre />
        <About />
        <ImagesGallery />
        <Tasasiones />
        <Maps />
        <Contactate />
        <ContyFooter />
      </main>
    </>
  );
};

export default HomeIndex;
