"use client";
import React from "react";

import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import "./estiloMenu.scss";
import Link from "next/link";

const rutas = [
  {
    nombre: "Home",
    deruta: "/",
  },
  {
    nombre: "InmueblesVenta",
    deruta: "/inmuebles",
  },
  {
    nombre: "Contacto",
    deruta: "/contactate",
  },
];

const Menu = () => {
  const [activo, setActivo] = useState(false);

  const handleClick = () => {
    setActivo(!activo);
  };
  const handleCambio = () => {
    setActivo(false);
  };
  return (
    <>
      <main className="cont-main">
        <section onClick={handleClick} className="nav">
          <div
            style={{
              backgroundColor: "transparent",
              width: "10vw",
              height: "3vh",
            }}
          ></div>
          <section className="menu-fondo">
            <div class={activo ? "open icon nav-icon-5" : "icon nav-icon-5"}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </section>
        </section>

        <nav className={!activo ? " cont-menu " : "cont-menu activo"}>
          <ul className="list">
            {rutas.map(({ id, nombre, deruta }) => (
              <>
                <div className="list-cont">
                  <li onClick={handleCambio}>
                    <Link href={deruta}>{nombre}</Link>
                  </li>
                  <FaArrowRight className="icono" />
                </div>
                <hr />
              </>
            ))}
          </ul>
        </nav>
      </main>
    </>
  );
};

export default Menu;
