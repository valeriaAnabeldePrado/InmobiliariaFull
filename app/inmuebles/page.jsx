import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FilterProvider } from "../components/contextFiltersData";
import "../components/components_State/styles.scss";
import HeroStateSale from "../components/components_State/HeroStateSale";
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
              <img
                src="/Images/greenLogo.png"
                alt="logo-portugal"
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
