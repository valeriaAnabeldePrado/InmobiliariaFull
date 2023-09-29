"use client";
import { useState, useRef, useEffect } from "react";
import Title from "./Title";
import Button2 from "./Button2";

const About = () => {
  const elementoRef = useRef();
  const [seIntersecto, setSeIntersecto] = useState(false);

  useEffect(() => {
    const elemento = elementoRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          console.log("si esta :D");
          setSeIntersecto(entry.isIntersecting);
        }
      });
    });
    if (elemento) {
      observer.observe(elemento);
    }
  }, []);

  return (
    <div className="about_container">
      <div
        className={seIntersecto ? "about_div_animation about_div" : "about_div"}
        ref={elementoRef}
      >
        <Title>NOSOTROS</Title>
        <div
          className={
            seIntersecto
              ? "about_div_info about_div_info_animation"
              : "about_div_info"
          }
        >
          <div className={seIntersecto ? "info info_animation" : "info"}>
            <p>
              Somos una empresa familiar que, manteniendo los valores de
              nuestros fundadores en el centro de nuestras operaciones, nos
              comprometemos a trabajar con transparencia y dedicación para
              ayudar a nuestros clientes a tomar decisiones informadas y
              acertadas.
            </p>

            <p>
              Tenemos profesionales en cada área que precises: Ventas,
              Alquileres, Asesoramiento legal y contable, Tasaciones
            </p>
            <p>No dudes en ponerte en contacto.</p>
          </div>
        </div>
        <Button2>Averigua</Button2>
      </div>
    </div>
  );
};

export default About;
