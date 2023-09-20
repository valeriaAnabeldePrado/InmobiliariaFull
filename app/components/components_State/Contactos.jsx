import React from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";

const Contacto = () => {
  return (
    <>
      <section className="container-p">
        <div className="contacto-container">
          <h5>
            <AiOutlinePhone style={{ fontSize: "1.2em" }} />{" "}
          </h5>
          <p>351-7633299</p>
        </div>
        <div className="contacto-container">
          <h5>
            <FiMail style={{ fontSize: "1.2em" }} />
          </h5>
          <p>portugal@gmail.com</p>
        </div>
      </section>
    </>
  );
};

export { Contacto };
