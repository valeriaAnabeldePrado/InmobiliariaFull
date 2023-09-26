"use client";
import { createContext, useState, useEffect } from "react";

export const FiltersContextData = createContext();

export function FilterProvider({ children }) {
  const [inmuebles, setInmuebles] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [filtro, setFiltro] = useState([]);
  const [activo, setActivo] = useState(false);

  const fetchData = async () => {
    let offset = (page - 1) * limit;
    let url = `https://www.tokkobroker.com/api/v1/property/?lang=es_ar&offset=${offset}&limit=${limit}&key=6364f88ef8fab03a542837a002e64525689ad2bd&format=json`;

    const response = await fetch(url, { cache: "force-cache" });
    const data = await response.json();

    const newArray = data.objects.map((inmueble) => {
      return inmueble;
    });

    setInmuebles((prevInmuebles) => [...prevInmuebles, ...newArray]);
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <FiltersContextData.Provider
      value={{
        inmuebles,
        setInmuebles,
        setPage,
        fetchData,
        loadMore,
        setLimit,
        limit,
        setPage,
        filtro,
        setFiltro,
        activo,
        setActivo,
      }}
    >
      {children}
    </FiltersContextData.Provider>
  );
}
