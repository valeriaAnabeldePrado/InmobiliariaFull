import React from "react";
import "./styles.scss";
import Image from "next/image";
import logo2 from "../../../public/Images/logo2.png";
import Title from "./Title";

const Tasasiones = () => {
  return (
    <div className="tasas_container">
      <div className="tasas_div">
        <Image
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill={true}
          src={logo2}
          alt="logo2"
          className="tasas_logo"
        />
      </div>
      <div className="tasas_div tasas_ajust">
        <Title>TASACIONES</Title>
        <p>
          Somos una inmobiliaria especializada en tasaciones precisas y
          confiables. Nuestro equipo de expertos garantiza un servicio de
          calidad y excelencia para conocer el valor real de su propiedad.
        </p>
        <section className="contForm"></section>
      </div>
    </div>
  );
};

export default Tasasiones;
