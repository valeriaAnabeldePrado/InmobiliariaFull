import React from "react";
import Modal from "react-bootstrap/Modal";
//-------------------------Iconos
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { BsArrowsFullscreen } from "react-icons/bs";
import "./styles.scss";
import { MyySwiper } from "./MyySwiper";
import { Formulario } from "./Form";
import { Contacto } from "./Contactos";
//------------------------Swiper

//------------------------Modal y Form
const ModalMio = ({ setModalShow, datosCard, setDatosCard, modalShow }) => {
  const handleClose = () => {
    setModalShow(false);
    setDatosCard([]);
  };
  //-----------DATOS PARA EL MODAL ORDENADOS ------------//
  const {
    real_address,
    location,
    photos,
    description,
    disposition,
    expenses,
    operations,
    publication_title,
    orientation,
    property_condition,
    roofed_surface,
    total_surface,
    room_amount,
    suite_amount,
    bathroom_amount,
    age,
    type,
    situation,
    id,
    tags,
  } = datosCard;

  const inmueblesOk = [
    {
      fotos: photos,
      titulo: publication_title,
      antiguedad: age,
      tipo: type.name,
      operacion: operations[0].operation_type,
      precio: operations[0].prices[0].price,
      moneda: operations[0].prices[0].currency,
      direccion: real_address,
      barrio: location.name,
      descripcion: description,
      index: id,
      baños: bathroom_amount,
      superfiietech: total_surface,
      dormitorios: suite_amount,
    },
  ];
  const caracteristicasInm = [
    { Disposición: disposition },
    { Estado: situation },
    { Expensas: expenses },
    { Condiciones: property_condition },
    { Orientación: orientation },
    { SupTechada: roofed_surface },
    { SupTotal: total_surface },
    { Ambientes: room_amount },
    { Baños: bathroom_amount },
    { Dormitorios: suite_amount },
    { Estado: situation },
  ];
  const caracteristicasFiltradas = caracteristicasInm.filter((el) => {
    const valor = Object.values(el)[0];
    return (
      valor !== null &&
      valor !== "---" &&
      valor !== 0 &&
      valor !== "___" &&
      valor !== "0.00"
    );
  });
  const sinDato = caracteristicasFiltradas.length === 0;

  const tagGroups = tags.reduce((acc, el) => {
    if (!acc[el.type]) {
      acc[el.type] = [];
    }
    acc[el.type].push(el);
    return acc;
  }, {});

  const tagUno = tagGroups[1] || [];
  const tagDos = tagGroups[2] || [];
  const tagTres = tagGroups[3] || [];

  return (
    <>
      <Modal
        size="lg"
        show={modalShow}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        className="modalOk"
        animation={true}
        style={{ backgroundColor: "transparent" }}
      >
        {inmueblesOk.map((section, id) => (
          <section className="modal-container" key={id}>
            <MyySwiper fotos={photos} />
            <h2 className="modal-tilte">{section.titulo}</h2>
            <div className="icons-modal espacio">
              <h3 className="modal-sale-cont-h3">
                {section.operacion}: {section.moneda} {section.precio}
              </h3>
            </div>
            <section style={{ margin: "2rem 0 .5rem 0" }}>
              <h5 className="h5-modal">Dirección: {section.direccion}</h5>
              <h5 className="h5-modal">Barrio: {section.barrio}</h5>
              <h5 className="h5-modal">Tipo: {section.tipo}</h5>
              <h5 className="h5-modal">
                Antiguedad:
                {section.antiguedad === 0 ? " A estrenar" : section.antiguedad}
              </h5>
              <h5 className="h5-modal">Escritura: FALTA</h5>
            </section>
            {description.length === 0 && sinDato ? (
              ""
            ) : (
              <div className="info-modal-cont">
                <div className="icons-modal ">
                  {section.dormitorios === 0 ? (
                    ""
                  ) : (
                    <section className="modal-icons-cont">
                      <FaBed className="icon" />
                      <p>{section.dormitorios}</p>
                    </section>
                  )}
                  {section.baños === 0 ? (
                    ""
                  ) : (
                    <section className="modal-icons-cont">
                      <FaBath className="icon" />
                      <p>{section.baños}</p>
                    </section>
                  )}
                  {section.superfiietech === "0.00" ? (
                    ""
                  ) : (
                    <section className="modal-icons-cont">
                      <BsArrowsFullscreen className="icon" />
                      <p>{section.superfiietech}m²</p>
                    </section>
                  )}
                </div>
                {section.descripcion === "" ? (
                  ""
                ) : (
                  <div>
                    <h2 className="modal-tilteII">Descripción</h2>
                    <section style={{ margin: "2rem 0" }}>
                      <p>{section.descripcion}</p>
                    </section>
                  </div>
                )}
              </div>
            )}
            {sinDato ? (
              ""
            ) : (
              <div>
                <h2 className="modal-tilteII">Información generale</h2>
                <section className="modal-caracteristicas">
                  {caracteristicasFiltradas.map((el, index) => (
                    <div key={index}>
                      <hr />
                      {Object.keys(el) == "SupTechada" ||
                      Object.keys(el) == "SupTotal" ? (
                        <section
                          className="modal-icons-cont espacioB"
                          key={index}
                        >
                          <p>{Object.keys(el)}</p>
                          <p>{Object.values(el)} m²</p>
                        </section>
                      ) : (
                        <section
                          className="modal-icons-cont espacioB"
                          key={index}
                        >
                          <p>{Object.keys(el)}</p>
                          <p>{Object.values(el)}</p>
                        </section>
                      )}
                    </div>
                  ))}
                  {tags.length == 0 ? (
                    ""
                  ) : (
                    <div>
                      {tagUno.length === 0 ? (
                        ""
                      ) : (
                        <div>
                          <hr />
                          <h2 className="modal-tilteII">Servicios</h2>
                          <section style={{ margin: "2.8rem 0 1rem 0" }}>
                            {tags.map((el, index) =>
                              el.type == 1 ? (
                                <p
                                  key={index}
                                  style={{
                                    display: "inline",
                                    padding: ".8rem",
                                  }}
                                >
                                  ✔ {el.name}{" "}
                                </p>
                              ) : (
                                ""
                              )
                            )}
                          </section>
                        </div>
                      )}
                      {tagDos.length === 0 ? (
                        ""
                      ) : (
                        <div>
                          <hr />
                          <h2 className="modal-tilteII">Ambientes</h2>
                          <section style={{ margin: "2.8rem 0 1rem 0" }}>
                            {tags.map((el, index) =>
                              el.type == 2 ? (
                                <p
                                  key={index}
                                  style={{
                                    display: "inline",
                                    padding: ".8rem",
                                  }}
                                >
                                  ✔ {el.name}
                                </p>
                              ) : (
                                ""
                              )
                            )}
                          </section>
                        </div>
                      )}
                      {tagTres.length === 0 ? (
                        ""
                      ) : (
                        <div>
                          <hr />
                          <h2 className="modal-tilteII">Adicionales</h2>
                          <section style={{ margin: "2.8rem 0 1rem 0" }}>
                            {tags.map((el, index) =>
                              el.type == 3 ? (
                                <p
                                  key={index}
                                  style={{
                                    display: "inline",
                                    padding: ".8rem",
                                  }}
                                >
                                  ✔ {el.name}
                                </p>
                              ) : (
                                ""
                              )
                            )}
                          </section>
                        </div>
                      )}
                    </div>
                  )}
                </section>
                <hr />
                <p style={{ margin: "1rem 0 1rem 0" }}>
                  Si desea mas informacion sobre esta propiedad, porfavor,
                  rellene el siguiente formulario.
                </p>
                <Formulario />
                <Contacto />
                <button onClick={handleClose}>cerrar</button>
              </div>
            )}
          </section>
        ))}
      </Modal>
    </>
  );
};

export default ModalMio;
