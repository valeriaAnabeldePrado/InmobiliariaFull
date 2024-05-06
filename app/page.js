import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";
import Hero from "./components/componentsHome/Hero";
import Descubre from "./components/componentsHome/Descubre";
import About from "./components/componentsHome/About";
import ImagesGallery from "./components/componentsHome/ImagesGallery";
import Maps from "./components/componentsHome/Maps";
import Contactate from "./components/componentsHome/Contactate";
import ContyFooter from "./components/componentsHome/ContyFooter";
import Tasaciones from "./components/componentsHome/Tasaciones";

export default function Home() {
  return (
    <main className="fondo">
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
