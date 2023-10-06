"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import "./estiloMenu.scss";
const Menu = () => {
  const [activo, setActivo] = useState(false);
  const handleClick = () => {
    setActivo(!activo);
  };

  return (
    <>
      <main className="cont-main">
        <section onClick={handleClick} className="nav">
          <div class={activo ? "open icon nav-icon-5" : "icon nav-icon-5"}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </section>

        <nav className={!activo ? " cont-menu " : "cont-menu activo"}>
          <ul className="list">
            <div className="list-cont">
              <li>HOLA</li>
              <FaArrowRight className="icono" />
            </div>
            <hr />
            <div className="list-cont">
              <li>HOLA</li>
              <FaArrowRight className="icono" />
            </div>
            <hr />
            <div className="list-cont">
              <li>HOLA</li>
              <FaArrowRight className="icono" />
            </div>
            <hr />
            <div className="list-cont">
              <li>HOLA</li>
              <FaArrowRight className="icono" />
            </div>
            <hr />
            <div className="list-cont">
              <li>HOLA</li>
              <FaArrowRight className="icono" />
            </div>
            <hr />
            <div className="list-cont">
              <li>HOLA</li>
              <FaArrowRight className="icono" />
            </div>
            <hr />
          </ul>
        </nav>
      </main>
    </>
  );
};

export default Menu;
