"use client";

import Title from "./Title";
import Button2 from "./Button2";

const About = () => {
  return (
    <div className="about_container">
      <div className="about_div">
        <Title>NOSOTROS</Title>
        <div className="about_div_info">
          <div className="info">
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
