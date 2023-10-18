import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FilterProvider } from "../components/contextFiltersData";
import "../components/components_State/styles.scss";
import HeroStateSale from "../components/components_State/HeroStateSale";
import Image from "next/image";
import edificioMuestra from "../../__MACOSX/public/Images/edificioMuestra.jpg";
import Filtros from "../components/components_State/Filtros";
import RenderCard from "../components/components_State/RenderCard";
const StateSaleArch = () => {
  return (
    <>
      <HeroStateSale />
      <main className="containerState">
        <FilterProvider>
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
        </FilterProvider>
      </main>
    </>
  );
};

export default StateSaleArch;
