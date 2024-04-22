"use client";
import React, { Suspense, useContext, useState, useEffect } from "react";
import { FiltersContextData } from "../contextFiltersData";
import Loading from "./loading";
import Cardeu from "./card";
import ModalMio from "./ModalMio";
import Spinner from "../spiner";

const RenderCard = () => {
  const { inmuebles, loadMore, filtro, activo } =
    useContext(FiltersContextData);
  const [datosCard, setDatosCard] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(false);

  useEffect(() => {
    if (inmuebles) {
      setIsLoading(false);
    }
  }, [inmuebles]);

  const handleOpenModal = (datoInmueble) => {
    setModalShow(true);
    setDatosCard(datoInmueble);
  };

  const handleClick = () => {
    setIsLoading2(true);
    setTimeout(() => {
      loadMore();
      setIsLoading2(false);
    }, 2000);
  };

  return (
    <div>
      <Suspense fallback={<Loading />}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className="cardContainer">
              {!activo
                ? inmuebles.map((el, index) => (
                    <div key={index}>
                      <Cardeu el={el} handleOpenModal={handleOpenModal} />
                    </div>
                  ))
                : filtro.map((el, index) => (
                    <div className="cardContainer" key={index}>
                      <Cardeu el={el} />
                    </div>
                  ))}
            </div>
            {modalShow && (
              <ModalMio
                datosCard={datosCard}
                setModalShow={setModalShow}
                modalShow={modalShow}
                setDatosCard={setDatosCard}
              />
            )}
            <div className="centrado">
              {!activo && (
                <button
                  className="button2 button-color-green"
                  onClick={handleClick}
                >
                  {isLoading2 ? <Spinner /> : "Ver mas"}
                </button>
              )}
            </div>
          </>
        )}
      </Suspense>
    </div>
  );
};

export default RenderCard;
