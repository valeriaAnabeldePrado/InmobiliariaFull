"use client";
import React from "react";
import aboutus from "../../../public/Images/aboutus.webp";
import Image from "next/image";

import Title from "./Title";
import Boton from "./Boton";

const About = () => {
  return (
    <div className="about_container">
      <div className="about_div">
        <Image
          fill={true}
          src={aboutus}
          alt="about"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="about_div">
        <Title>Sobre nosotros</Title>
        <div className="about_div_info">
          <p>
            Somos una empresa familiar que, manteniendo los valores de nuestros
            fundadores en el centro de nuestras operaciones, nos comprometemos a
            trabajar con transparencia y dedicación para ayudar a nuestros
            clientes a tomar decisiones informadas y acertadas.
          </p>

          <p>
            Tenemos profesionales en cada área que precises: Ventas, Alquileres,
            Asesoramiento legal y contable, Tasaciones
          </p>
          <p>No dudes en ponerte en contacto.</p>
          <Boton>AVERIGUA</Boton>
        </div>
      </div>
    </div>
  );
};

export default About;
