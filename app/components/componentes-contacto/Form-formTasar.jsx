"use client";
import React from "react";
import { AlertMnsj } from "../components_State/AlertaMnsj";
import { useForm } from "../components_State/useForm";

import "./style.scss";

const initialForm = {
  tipoOperacion: "Tasación de inmueble",
  tipoInmueble: "",
  ubicacion: "",
  superficie: "",
  antiguedad: "",
  nombre: "",
  phoneNumber: "",
  email: "",
  comments: "",
};

const FormTasar = () => {
  const validationsForm = (form) => {
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/,
      regexPhone = /[0-9]+/;

    let errors = {};
    if (!form.tipoInmueble.trim()) {
      errors.tipoInmueble = `Debe ingresar su nombre y apellido.`;
    }
    if (!form.ubicacion.trim()) {
      errors.ubicacion = `Debe ingresar correctamente la ubicación.`;
    }
    if (!form.superficie.trim()) {
      errors.superficie = `Debe ingresar una superficie aproximada`;
    }
    if (!form.antiguedad.trim()) {
      errors.antiguedad = "Debe ingresar una antiguedad.";
    }
    if (!form.nombre.trim()) {
      errors.nombre = "Debe ingresar su nombre y apellido.";
    }
    if (!form.phoneNumber.trim()) {
      errors.phoneNumber =
        "Debe ingresar su número telefónico. Ej: 351-123456789";
    } else if (!regexPhone.test(form.phoneNumber.trim())) {
      errors.phoneNumber =
        "Bebe ingresar correctamente los datos Ej: 351-123456789.";
    }
    if (!form.email.trim()) {
      errors.email = `Debe ingresar su correo.`;
    } else if (!regexEmail.test(form.email.trim())) {
      errors.email = `Debe ingresar correctamente los datos.`;
    }
    if (!form.comments.trim()) {
      errors.comments = `Debes ingresar tu mensaje.`;
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
            <h4 className=" texto-titulo">Servicio de tasación</h4>
            <div>
              <input
                className="inputs"
                type="text"
                name="tipoInmueble"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Tipo de propiedad"
                value={form.tipoInmueble}
                required
              />
              {error.tipoInmueble && (
                <p className="errorOk">{error.tipoInmueble}</p>
              )}
            </div>
            <div>
              <input
                className="inputs"
                type="text"
                name="ubicacion"
                placeholder="Ubicación"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.ubicacion}
                required
              />
              {error.ubicacion && <p className="errorOk">{error.ubicacion}</p>}
            </div>
            <div>
              <input
                className="inputs"
                type="text"
                placeholder="Superficie"
                name="superficie"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.superficie}
                required
              />
              {error.superficie && (
                <p className="errorOk">{error.superficie}</p>
              )}
            </div>
            <div>
              <input
                className="inputs"
                type="text"
                name="antiguedad"
                placeholder="Antiguedad"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.antiguedad}
                required
              />
              {error.antiguedad && (
                <p className="errorOk">{error.antiguedad}</p>
              )}
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
            </div>
            <div>
              <input
                className="inputs"
                type="tel"
                name="phoneNumber"
                placeholder="Número telefónico Ej: 351-123456789"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.phoneNumber}
                required
              />
              {error.phoneNumber && (
                <p className="errorOk">{error.phoneNumber}</p>
              )}
            </div>
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
            <div>
              <textarea
                className="inputs"
                rows={4}
                name="comments"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.comments}
                style={{ resize: "none" }}
                placeholder="Descripción general del inmueble a tasar."
              />
              {error.comments && <p className="errorOk">{error.comments}</p>}
            </div>
            <button className="buttonMio" type="submit">
              Enviar
            </button>
          </div>
        </form>
        {response && <AlertMnsj />}
      </section>
    </>
  );
};

export default FormTasar;
