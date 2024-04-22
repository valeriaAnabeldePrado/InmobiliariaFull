"use client";
import React from "react";
import { AlertMnsj } from "../components_State/AlertaMnsj";
import { useForm } from "../components_State/useForm";

import "./style.scss";

const initialForm = {
  tipoOperacion: "Compra",
  nombre: "",
  email: "",
  phoneNumber: "",
  zona: "",
  tipo: "",
  comments: "",
};

const FormCompra = () => {
  const validationsForm = (form) => {
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/,
      regexPhone = /[0-9]+/;

    let errors = {};
    if (!form.nombre.trim()) {
      errors.nombre = `Debe ingresar su nombre y apellido.`;
    }
    if (!form.email.trim()) {
      errors.email = `Debe ingresar su correo.`;
    } else if (!regexEmail.test(form.email.trim())) {
      errors.email = `Debe ingresar correctamente los datos.`;
    }
    if (!form.phoneNumber) {
      errors.phoneNumber =
        "Debe ingresar su número telefónico. Ej: 351153456789";
    } else if (!regexPhone.test(form.phoneNumber.trim())) {
      errors.phoneNumber =
        "Bebe ingresar correctamente los datos Ej: 351153456789.";
    }
    if (!form.zona) {
      errors.zona = "Debe ingresar una zona de interés.";
    }
    if (!form.tipo) {
      errors.tipo = "Debe ingresar el tipo de inmueble.";
    }
    if (!form.comments.trim()) {
      errors.comments = "Debe ingresar su consulta.";
    }
    return errors;
  };

  const { handleBlur, handleSubmit, handleChange, form, error, response } =
    useForm(initialForm, validationsForm);

  return (
    <>
      <section className="form-container">
        <form className="form-body" method="POST" onSubmit={handleSubmit}>
          <div className="form-bC">
            <input
              type="text"
              name="tipoOperacion"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.tipoOperacion}
              style={{ display: "none" }}
            />
            <h4 className=" texto-titulo">Quiero Comprar</h4>
            <div>
              <input
                className="inputs"
                type="text"
                name="tipo"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Tipo de propiedad"
                value={form.tipo}
                required
              />
              {error.tipo && <p className="errorOk">{error.tipo}</p>}
            </div>
            <div>
              <input
                className="inputs"
                type="text"
                name="zona"
                placeholder="Ubicación"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.zona}
                required
              />
              {error.zona && <p className="errorOk">{error.zona}</p>}
            </div>

            <div>
              <input
                className="inputs"
                type="text"
                name="nombre"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.nombre}
                placeholder="Apellido y Nombre"
                required
              />
              {error.nombre && <p className="errorOk">{error.nombre}</p>}
              {/* LISTO NOMBRE */}
            </div>

            <div>
              <input
                className="inputs"
                type="tel"
                name="phoneNumber"
                placeholder="Número telefónico Ej: 351153456789"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.phoneNumber}
                required
              />
              {error.phoneNumber && (
                <p className="errorOk">{error.phoneNumber}</p>
              )}
            </div>
            {/* LISTO NUMERO TELEF */}
            <div>
              <input
                className="inputs"
                type="email"
                name="email"
                placeholder="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.email}
                required
              />
              {error.email && <p className="errorOk">{error.email}</p>}
            </div>
            {/* LISTO EMAIL */}
            <div>
              <textarea
                className="inputs"
                rows={4}
                name="comments"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.comments}
                style={{ resize: "none" }}
                placeholder="Estoy interesado en comprar."
              />
              {error.comments && <p className="errorOk">{error.comments}</p>}
            </div>
            <button className="button2 color-fixw" type="submit">
              Enviar
            </button>
          </div>
        </form>
        {response && <AlertMnsj />}
      </section>
    </>
  );
};

export default FormCompra;
