import React from "react";
import "../components/componentes-contacto/style.scss";
const contactate = () => {
  return (
    <>
      <main className="contact-maxCont">
        <section className="section-info">
          <h1 className="title">CONTACTO</h1>
          <p className="p-state">
            Estamos comprometidos en brindarte un servicio personalizado y
            eficiente. Resuelve tus dudas y conoce nuestros servicios e
            inmuebles disponibles.
          </p>
        </section>
        <div className="container-btn">
          <button className="button2">Comprar</button>
          <button className="button2">Alquilar</button>
          <button className="button2">Vender</button>
          <button className="button2">Tasar</button>
        </div>
      </main>
    </>
  );
};

export default contactate;
