"use client";
import React, { useContext, useState } from "react";
import { FiltersContextData } from "../contextFiltersData";
import Image from "next/image";
import "./styles.scss";
import ModalMio from "./ModalMio";

const RenderCard = () => {
  const { inmuebles, loadMore, disableBut, filtro, activo } =
    useContext(FiltersContextData);
  const [datosCard, setDatosCard] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  console.log(filtro);
  const handleOpenModal = (datoInmueble) => {
    setModalShow(true);
    setDatosCard(datoInmueble);
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
                  <button onClick={() => handleOpenModal(el)}>VER MAS</button>
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
                  <button onClick={() => handleOpenModal(el)}>VER MAS</button>
                </section>
              </div>
            ))}
        <div>
          {!disableBut && (
            <button onClick={loadMore}>Ver mar propiedades</button>
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
