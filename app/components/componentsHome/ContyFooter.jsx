"use client";
import React from "react";
import MediosContact from "./MediosContact";
import { Footer } from "./Footer";
import "./styles.scss";

const ContyFooter = () => {
  return (
    <>
      <section className="cont-secciones">
        <MediosContact />
        <Footer />
      </section>
    </>
  );
};

export default ContyFooter;
