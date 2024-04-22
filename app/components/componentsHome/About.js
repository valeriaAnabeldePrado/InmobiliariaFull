"use client";
import { useState, useRef, useEffect } from "react";
import "./styles.scss";
import Button2 from "./Button2";
import Link from "next/link";
const About = () => {
  const elementoRef = useRef();
  const [seIntersecto, setSeIntersecto] = useState(false);

  useEffect(() => {
    const elemento = elementoRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
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
        <div className="class1">
          <h2 className="class1Title color-fix ">Nosotros</h2>
        </div>
        <div
          className={
            seIntersecto
              ? "about_div_info about_div_info_animation"
              : "about_div_info"
          }
        >
          <div
            className={
              seIntersecto ? "info info_animation color-fix" : "info color-fix"
            }
          >
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
        <Link href={"/contactate"}>
          <Button2>Averigua</Button2>
        </Link>
      </div>
    </div>
  );
};

export default About;
