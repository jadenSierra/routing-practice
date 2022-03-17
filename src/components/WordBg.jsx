import React from "react";
import { useParams } from "react-router-dom";

function WordBg(props) {

  const { param, txtColor, bgColor } = useParams();

  return (
    <div>
      { isNaN(+ param) ? <h1 style={{color: txtColor ? `${txtColor}` : "black", backgroundColor: bgColor ? `${bgColor}` : "white"}}>The word is {param}</h1> : <h1 style={{color: txtColor ? `${txtColor}` : "black", backgroundColor: bgColor ? `${bgColor}` : "white"}}>The number is {param} </h1> }
    </div>
  );
}

export default WordBg;
