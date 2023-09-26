"use client";
import React, { useContext, useState } from "react";
import { FiltersContextData } from "../contextFiltersData";
import Image from "next/image";
import "./styles.scss";
import ModalMio from "./ModalMio";
import { BsArrowsFullscreen } from "react-icons/bs";
import { FaBed } from "react-icons/fa";

const RenderCard = () => {
  const { inmuebles, loadMore, filtro, activo } =
    useContext(FiltersContextData);

  const [datosCard, setDatosCard] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  const handleOpenModal = (datoInmueble) => {
    setModalShow(true);
    setDatosCard(datoInmueble);
  };
  const handleClick = () => {
    loadMore();
    console.log("hola");
  };

  return (
    <>
      <main>
        {!activo
          ? inmuebles.map((el, index) => (
              <div className="cardContainer" key={index}>
                <section className="imgContainer">
                  <Image
                    src={el.photos[0].image}
                    fill
                    className="card-img"
                    alt="img"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </section>
                <section className="cardBoxContainer">
                  <h2 className="tituloCard">{el.publication_title}</h2>
                  <p>{el.real_addressn}</p>
                  <hr />
                  <div className="inconCard">
                    {el.total_surface === "0.00" ? (
                      ""
                    ) : (
                      <section className="iconss">
                        <BsArrowsFullscreen className="icon" />
                        <p className="pp">{el.total_surface}m²</p>
                      </section>
                    )}
                    {el.suite_amount === 0 ? (
                      ""
                    ) : (
                      <section className="iconss">
                        <FaBed className="icon" />
                        <p className="pp">{el.suite_amount}</p>
                      </section>
                    )}
                  </div>
                  <button
                    className="boton2"
                    onClick={() => handleOpenModal(el)}
                  >
                    VER MAS
                  </button>
                </section>
              </div>
            ))
          : filtro.map((el, index) => (
              <div className="cardContainer" key={index}>
                <section className="imgContainer">
                  <Image
                    src={el.photos[0].image}
                    fill
                    className="card-img"
                    alt="img"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </section>
                <section className="cardBoxContainer">
                  <h2 className="tituloCard">{el.publication_title}</h2>
                  <p>{el.real_addressn}</p>
                  <hr />
                  <div className="inconCard">
                    {el.total_surface === "0.00" ? (
                      ""
                    ) : (
                      <section className="iconss">
                        <BsArrowsFullscreen className="icon" />
                        <p className="pp">{el.total_surface}m²</p>
                      </section>
                    )}
                    {el.suite_amount === 0 ? (
                      ""
                    ) : (
                      <section className="iconss">
                        <FaBed className="icon" />
                        <p className="pp">{el.suite_amount}</p>
                      </section>
                    )}
                  </div>
                  <button
                    className="boton2"
                    onClick={() => handleOpenModal(el)}
                  >
                    VER MAS
                  </button>
                </section>
              </div>
            ))}
        <div className="centrado">
          {!activo && (
            <button className="boton" onClick={handleClick}>
              Ver mar propiedades
            </button>
          )}
        </div>
        {modalShow && (
          <ModalMio
            datosCard={datosCard}
            setModalShow={setModalShow}
            modalShow={modalShow}
            setDatosCard={setDatosCard}
          />
        )}
        <div />
      </main>
    </>
  );
};

export default RenderCard;
