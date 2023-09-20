"use client";
import { useContext, useState, useEffect } from "react";

import React from "react";
import "./styles.scss";
import { FiltersContextData } from "../contextFiltersData";

const Filtros = () => {
  const [tipo, setTipo] = useState("");
  const [local, setLocal] = useState("");
  const [rooms, setRooms] = useState(0);
  const [search, setSearch] = useState(true);
  // const [filtroInmueble, setFiltroInmueble] = useState([]);

  const {
    inmuebles,
    setInmuebles,
    fetchData,
    setDisableBut,
    setLimit,
    limit,
    setFiltro,
    setActivo,
  } = useContext(FiltersContextData);
  console.log(limit);

  //FECH para los filtros//
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://www.tokkobroker.com/api/v1/property/?lang=es_ar&offset=0&limit=${limit}&key=6364f88ef8fab03a542837a002e64525689ad2bd&format=json`
  //       );

  //       if (!response.ok) {
  //         throw new Error("Error al cargar los datos.");
  //       }

  //       const data = await response.json();
  //       setFiltroInmueble(data.objects);
  //     } catch (error) {
  //       console.error("Error de solicitud:", error);
  //     }
  //   };

  //   fetchData();
  // }, [limit]);

  //console.log(datosFiltradosOk);
  //-----FUNCIONES FILTRO-----//
  const handleSelectTipo = (e) => {
    setTipo(e.target.value);
    setSearch(false);
    setLimit(80);
  };
  useEffect(() => {
    if (limit === 80) {
      fetchData();
      setSearch(true);
    }
  }, [limit]);

  const handleSelectLocal = (e) => {
    setLocal(e.target.value);
    setSearch(false);
  };
  const handleSelectRooms = (e) => {
    setRooms(e.target.value);
    setSearch(false);
  };

  const handleSearch = (inmueble) => {
    setSearch(true);

    const resultadosFiltrados = inmueble
      .filter((el) => el.type.name.toLowerCase().includes(tipo))
      .filter((el) => el.location.name.toLowerCase().includes(local))
      .filter((el) => rooms === 0 || el.suite_amount === rooms);

    //setDatosFiltradosOk(resultadosFiltrados);
    setActivo(true);
    setFiltro(resultadosFiltrados);
  };

  return (
    <>
      <span className="spanText">Tipo de propiedad</span>
      <select
        name="tipo"
        id="tipo"
        className="select-state"
        onChange={handleSelectTipo}
        value={tipo}
      >
        <option value="">Seleccionar</option>
        <option value="departamento">Departamento</option>
        <option value="casa">Casa</option>
        <option value="terreno">Terreno</option>
        <option value="local">Local</option>
      </select>
      <span className="spanText">Ubicación</span>
      <select
        name="Ubicación"
        id="Ubicación"
        className="select-state"
        onChange={handleSelectLocal}
        value={local}
      >
        <option value="">Seleccionar</option>
        <option value="arguello">Argüello</option>
        <option value="agua de oro">Agua de Oro</option>
        <option value="nueva cordoba">Nueva Córdoba</option>
        <option value="centro">Centro</option>
        <option value="alto alberdi">Alto Alberdi</option>
      </select>
      <span className="spanText">Cantidad de habitaciones</span>
      <select
        name="Habitaciones"
        id="Habitaciones"
        className="select-state"
        onChange={handleSelectRooms}
        value={rooms}
      >
        <option value={0}>Seleccionar</option>

        <option value={1}>Una</option>
        <option value={2}>Dos</option>
        <option value={3}>Tres</option>
        <option value={4}>Una</option>
      </select>
      <section className="sectionBotones">
        <button
          disabled={tipo == "" ? true : false}
          // onClick={() => handleClick(datosFiltradosOk, filtroInmueble)}
          onClick={() => handleSearch(inmuebles)}
        >
          BUSCAR
        </button>

        <button
          onClick={() => {
            setLimit(10);
            setDisableBut(false);
            setInmuebles([]);
            setTipo("");
            setRooms(0);
            setLocal("");
            setSearch(false);
          }}
        >
          BORRAR
        </button>
      </section>
    </>
  );
};

export default Filtros;
