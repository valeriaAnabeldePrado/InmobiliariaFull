import React from "react";
import logo3 from "../../../public/Images/logo3.png";
import Image from "next/image";
import Title from "./Title";

const Contactate = () => {
  return (
    <>
      <div className="contact_container">
        <div className="contact_div tasas_ajust">
          <Title>CONTACTATE</Title>
          <p>
            Estamos comprometidos en brindarte un servicio personalizado y
            eficiente. Completa el formulario y un asesor se comunicará contigo.
            Resuelve tus dudas y conoce nuestros servicios e inmuebles
            disponibles.
          </p>
          <section className="contForm"></section>
        </div>
        <div className="contact_div">
          <Image
            fill={true}
            src={logo3}
            alt="logo3"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="contact_logo alto"
          />
        </div>
      </div>
    </>
  );
};

export default Contactate;
