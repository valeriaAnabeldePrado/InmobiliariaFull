import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";

import Hero from "./components/componentsHome/Hero";
import Descubre from "./components/componentsHome/Descubre";
import About from "./components/componentsHome/About";
import ImagesGallery from "./components/componentsHome/ImagesGallery";
import Tasasiones from "./components/componentsHome/Tasasiones";
import Maps from "./components/componentsHome/Maps";
import Contactate from "./components/componentsHome/Contactate";
import ContyFooter from "./components/componentsHome/ContyFooter";

export default function Home() {
  return (
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
  );
}
