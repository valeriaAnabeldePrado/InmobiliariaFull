"use client";
import { useContext, useState, useEffect } from "react";

import React from "react";
import "./styles.scss";
import { FiltersContextData } from "../contextFiltersData";

const Filtros = () => {
  const [tipo, setTipo] = useState("");
  const [local, setLocal] = useState("");
  const [rooms, setRooms] = useState("");
  const [search, setSearch] = useState(true);
  const [limiteFiltro, setLimiteFiltro] = useState(70);
  const [filtroInmueble, setFiltroInmueble] = useState([]);

  const { setFiltro, setActivo, loadMore } = useContext(FiltersContextData);

  //FECH para los filtros//
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.tokkobroker.com/api/v1/property/?lang=es_ar&offset=0&limit=${limiteFiltro}&key=6364f88ef8fab03a542837a002e64525689ad2bd&format=json`
        );

        if (!response.ok) {
          throw new Error("Error al cargar los datos.");
        }

        const data = await response.json();
        setFiltroInmueble(data.objects);
      } catch (error) {
        console.error("Error de solicitud:", error);
      }
    };

    fetchData();
  }, [limiteFiltro]);

  //-----FUNCIONES FILTRO-----//
  const handleSelectTipo = (e) => {
    setTipo(e.target.value);
    setSearch(false);
    setLimiteFiltro(100);
  };

  const handleSelectLocal = (e) => {
    setLocal(e.target.value);
    setSearch(false);
  };
  const handleSelectRooms = (e) => {
    setRooms(e.target.value);
    setSearch(false);
  };

  const handleSearch = (parametrofiltroInmueble) => {
    setSearch(true);

    const resultadosFiltrados = parametrofiltroInmueble
      .filter((el) => el.location.name.toLowerCase().includes(local))
      .filter((el) => el.type.name.toLowerCase().includes(tipo))
      .filter((el) => el.suite_amount.toString().includes(rooms));

    setActivo(true);
    setFiltro(resultadosFiltrados);
  };

  return (
    <>
      <span className="spanText">Seleccion el tipo de propiedad</span>
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
      <span className="spanText">Selecciona la ubicación</span>
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
        <option value="camino a san carlos">Camino a San Carlos</option>
        <option value="despeñaderos">Despeñaderos</option>
        <option value="general paz">General Paz</option>
      </select>
      <span className="spanText">Selecciona la cantidad de habitaciones</span>
      <select
        name="Habitaciones"
        id="Habitaciones"
        className="select-state"
        onChange={handleSelectRooms}
        value={rooms}
      >
        <option>Seleccionar</option>

        <option value="1">Una</option>
        <option value="2">Dos</option>
        <option value="3">Tres</option>
        <option value="4">Cuatro</option>
        <option value="5">Cinco</option>
      </select>
      <section className="sectionBotones">
        <button onClick={() => handleSearch(filtroInmueble)} className="boton">
          BUSCAR
        </button>

        <button
          className="boton"
          onClick={() => {
            setActivo(false);
            setTipo("");
            setRooms(0);
            setLocal("");
            loadMore();
          }}
        >
          <span className="spanB">BORRAR</span>
        </button>
      </section>
    </>
  );
};

export default Filtros;
