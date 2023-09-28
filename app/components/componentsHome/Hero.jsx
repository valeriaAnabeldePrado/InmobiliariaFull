"use client";
import React from "react";
import "./styles.scss";

import Link from "next/link";
import logo from "../../../__MACOSX/public/Images/imagenesHome/logoBlanco.png";
import Image from "next/image";

import Button2 from "./Button2";

const Hero = () => {
  return (
    <>
      <div className="hero content">
        <div className="hero-logo">
          <Image
            fill={true}
            className="hero-logo-img"
            src={logo}
            alt="logo"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <h1 style={{ display: "none" }}>Inmobiliaria Portugal</h1>
        <h3 className="hero-text ">
          Servicio a medida y propiedades de alta calidad para particulares e
          inversores exigentes. ¡Confía en nosotros para encontrar la propiedad
          de tus sueños!
        </h3>
        <Link href={"#"}>
          <Button2 style={{ marginTop: "1rem" }}>Conectate</Button2>
        </Link>
      </div>
    </>
  );
};

export default Hero;
