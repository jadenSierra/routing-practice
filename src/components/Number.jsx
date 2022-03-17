import React from "react";
import { useParams } from "react-router-dom";

function Number(props) {

  const { param } = useParams();

  return (
    <div>
      { isNaN(+ param) ? <h1>The word is {param}</h1> : <h1>The number is {param} </h1> }
    </div>
  );
}

export default Number;
