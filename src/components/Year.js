import React from "react";

const Year = ({ year, circleColor, name }) => {
  let circleStyles = {
    background: `linear-gradient(${circleColor[0]}, ${circleColor[1]})`,
  };

  console.log(circleColor[0]);

  return (
    <div className="year">
      <h2>{year}</h2>
      <div className="circle" style={circleStyles}></div>
      <h4>{name}</h4>
    </div>
  );
};

export default Year;
