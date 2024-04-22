import Button2 from "../componentsHome/Button2";
import Image from "next/image";

import "./styles.scss";

// Iconos
import { FaBed } from "react-icons/fa";
import { RxDimensions } from "react-icons/rx";
import { FaBath } from "react-icons/fa";

const Cardeu = ({ el, handleOpenModal }) => {
  return (
    <div className="card-outer">
      <div className="card-image-wrapper">
        <img src={el.photos[0].image} alt="imagen" className="card-image" />
        <div className="card-h2-container">
          <h3 className="card-h2">
            {el.operations[0].prices[0].currency}{" "}
            {el.operations[0].prices[0].price}
          </h3>
        </div>
      </div>
      <div className="card-innter">
        <div className="card-title">
          <h4>
            {el.operations[0].operation_type} en {el.location.name}
          </h4>
        </div>
        <div className="card-icons">
          {el.suite_amount === 0 ? (
            ""
          ) : (
            <>
              <FaBed size={25} />
              <span>{el.bathroom_amount}</span>
            </>
          )}

          {el.total_surface === "0.00" ? (
            ""
          ) : (
            <>
              <RxDimensions size={25} />
              <span>{el.total_surface}</span>{" "}
            </>
          )}
          <FaBath size={25} />
          <span>1</span>
        </div>
        <div className="card-description">
          <p>{el.location.name}</p>
          <p>{el.operations[0].operation_type}</p>
          <p>Antiguedad: {el.age} años</p>
        </div>
        <div className="card-button">
          <button
            className="button2 color-fixw"
            onClick={() => handleOpenModal(el)}
          >
            Ver mas
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cardeu;
