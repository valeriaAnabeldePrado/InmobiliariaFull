import React from "react";
import { SiWhatsapp } from "react-icons/si";
import "./styles.scss";
import Button2 from "../componentsHome/Button2";

const BtnWhats = () => {
  return (
    <Button2 href={"https://api.whatsapp.com/send?phone=numerin"}>
      <SiWhatsapp />
    </Button2>
  );
};

export { BtnWhats };
