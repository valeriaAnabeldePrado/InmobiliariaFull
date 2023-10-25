import React from "react";

import "./styles.scss";
import Image from "next/image";

const HeroStateSale = () => {
  return (
    <>
      <div className="heroPages">
        <section className="cuerpo-items-state">
          <h1 className="h1Sale">PROPIEDADES EN VENTA</h1>
          <div className="p-stateCont">
            <p className="info-state">
              Nos enfocamos en entender las necesidades y objetivos de cada
              cliente individualmente para poder ofrecer soluciones adaptadas a
              sus necesidades.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default HeroStateSale;
