import React from "react";
import { useParams } from "react-router-dom";

function Word(props) {

  const { param } = useParams();
  const { txtColor } = useParams();

  return (
    <div>
      { isNaN(+ param) ? <h1 style={{color: txtColor ? `${txtColor}` : "black"}}>The word is {param}</h1> : <h1 style={{color:`${txtColor}`}}>The number is {param} </h1> }
    </div>
  );
}

export default Word;
