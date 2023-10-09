import React from "react";
import logo3 from "../../../public/Images/logo3.png";
import Image from "next/image";
import Title from "./Title";
import { Formulario } from "../components_State/Form";

const Contactate = () => {
  return (
    <>
      <div className="contact_container">
        <div className="contact_div tasas_ajust">
          <Title>CONTACTATE</Title>
          <p>
            Estamos comprometidos en brindarte un servicio personalizado y
            eficiente. Completa el formulario y un asesor se comunicará contigo.
          </p>
          <section className="contForm"></section>
        </div>
        <div className="contact_div paddingg">
          <p>
            Resuelve tus dudas y conoce nuestros servicios e inmuebles
            disponibles.
          </p>
          <Formulario />
        </div>
      </div>
    </>
  );
};

export default Contactate;
