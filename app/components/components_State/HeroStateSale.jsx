import React from "react";
import "./styles.scss";

const HeroStateSale = () => {
  return (
    <div className="heroPages">
      <section className="items">
        <h1 className="h1Sale">PROPIEDADES EN VENTA</h1>
        <div className="p-stateCont">
          <p className="p-state">
            Nos enfocamos en entender las necesidades y objetivos de cada
            cliente individualmente para poder ofrecer soluciones adaptadas a
            sus necesidades.
          </p>
        </div>
        <button style={{ marginTop: "1rem" }}>ENCUENTRA</button>
      </section>
      <video autoPlay loop src="#" className="videoB"></video>
      <section className="capa"></section>
    </div>
  );
};

export default HeroStateSale;
