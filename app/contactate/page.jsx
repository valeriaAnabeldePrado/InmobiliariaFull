"use client";
import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/componentsHome/styles.scss";
import FormVenta from "../components/componentes-contacto/Form-formVenta";
import "../components/componentes-contacto/style.scss";
import FormCompra from "../components/componentes-contacto/Form-formCompra";
import FormAlquilar from "../components/componentes-contacto/Form-formAlquilar";
import FormTasar from "../components/componentes-contacto/Form-formTasar";
import MediosContact from "../components/componentsHome/MediosContact";
import { Footer } from "../components/componentsHome/Footer";
const contactate = () => {
  const [tipe, setTipe] = useState("Vender");

  let tipoForm;
  if (tipe === "Vender") {
    tipoForm = <FormVenta />;
  } else if (tipe === "Comprar") {
    tipoForm = <FormCompra />;
  } else if (tipe === "Alquilar") {
    tipoForm = <FormAlquilar />;
  } else {
    tipoForm = <FormTasar />;
  }

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
          <button className="buttonMio" onClick={() => setTipe("Comprar")}>
            Comprar
          </button>
          <button className="buttonMio" onClick={() => setTipe("Alquilar")}>
            Alquilar
          </button>
          <button className="buttonMio" onClick={() => setTipe("Vender")}>
            Vender
          </button>
          <button className="buttonMio" onClick={() => setTipe("Tasar")}>
            Tasar
          </button>
        </div>
        <section className="contenedor-formularios">{tipe && tipoForm}</section>
        <section>
          <MediosContact />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default contactate;
