"use client";
import React from "react";
import Form from "react-bootstrap/Form";
import "./styles.scss";
import { useForm } from "./useForm";
import { AlertMnsj } from "./AlertaMnsj";
import { BtnWhats } from "./BtnWts";
import Button2 from "../componentsHome/Button2";
import { SiWhatsapp } from "react-icons/si";

const Formulario = ({ direccion }) => {
  const initialForm = {
    ConsultaInmueble: `Inmueble a consultar: ${direccion}`,
    nombre: "",
    email: "",
    phoneNumber: "",
    comments: "",
  };
  const validationsForm = (form) => {
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexPhoneNumber = /^[0-9]{10,16}$/;
    //cada imput es independiente si o si
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
      errors.phoneNumber = `Debe ingresar su número telefónico.`;
    } else if (!regexPhoneNumber.test(form.phoneNumber)) {
      errors.phoneNumber = `Debe ingresar un número telefónico válido: 351157878787`;
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
      <form method="POST" onSubmit={handleSubmit} className="formOk">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="ConsultaInmueble"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.ConsultaInmueble}
            style={{ display: "none" }}
          />
          <Form.Control
            type="text"
            name="nombre"
            placeholder="nombre"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.nombre}
            required
          />
          <Form.Text className="text-muted">
            {error.nombre && <p className="errorOk">{error.nombre}</p>}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="email"
            name="email"
            placeholder="Email"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.email}
            required
          />
          <Form.Text className="text-muted">
            {error.email && <p className="errorOk">{error.email}</p>}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="tel"
            placeholder="Número telefónico"
            name="phoneNumber"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.phoneNumber}
            required
          />
          <Form.Text className="text-muted">
            {error.phoneNumber && (
              <p className="errorOk">{error.phoneNumber}</p>
            )}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows={4}
            name="comments"
            style={{ resize: "none" }}
            placeholder="Ingrese su consulta"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.comments}
            required
          />
          <Form.Text className="text-muted">
            {error.comments && <p className="errorOk">{error.comments}</p>}
          </Form.Text>
        </Form.Group>

        <button className="button2 button-color-green" type="submit">
          Enviar
        </button>
        <button
          className="button2 button-color-green"
          href={"https://api.whatsapp.com/send?phone=numerin"}
        >
          <SiWhatsapp />
        </button>
      </form>
      {response && <AlertMnsj />}
    </>
  );
};

export { Formulario };
