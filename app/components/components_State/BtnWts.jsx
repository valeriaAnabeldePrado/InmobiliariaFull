import React from "react";
import { SiWhatsapp } from "react-icons/si";
import "./styles.scss";

const BtnWhats = () => {
  return (
    <div>
      <h1 className="btnWhats">
        <a
          className="btnlink"
          href="https://api.whatsapp.com/send?phone=numerin"
          target="_blank"
          aria-label="para comunicarse directamente por Whatsapp"
        >
          <SiWhatsapp />
        </a>
      </h1>
    </div>
  );
};

export { BtnWhats };
