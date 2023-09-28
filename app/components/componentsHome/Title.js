import React from "react";
import "./styles.scss";

const Title = ({ children }) => {
  return (
    <div className="class">
      <h2>{children}</h2>
    </div>
  );
};

export default Title;
