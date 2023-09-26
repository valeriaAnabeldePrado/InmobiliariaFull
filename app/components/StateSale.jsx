import React from "react";
import "./components_State/styles.scss";
import HeroStateSale from "./components_State/HeroStateSale";
import Image from "next/image";
import edificioMuestra from "../../__MACOSX/public/Images/edificioMuestra.jpg";
import Filtros from "./components_State/Filtros";
import RenderCard from "./components_State/RenderCard";
const StateSale = () => {
  return (
    <>
      <HeroStateSale />
      <main className="containerState">
        <div className="containerSection">
          <section className="contIndividual">
            <Image
              src={edificioMuestra}
              fill
              alt="edificioMuestra"
              className="img"
            />
          </section>
          <section className="contIndividualDos">
            <Filtros />
          </section>
        </div>
        <section className="containerCard">
          <RenderCard />
        </section>
      </main>
    </>
  );
};

export default StateSale;
