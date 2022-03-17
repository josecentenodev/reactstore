import React, { useContext } from "react";
import Context from "../context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Item(props) {
  const { agregarCarrito } = useContext(Context)
  const { id, nombre, img, precio, medidas } = props
  const handleClick = () => {
    agregarCarrito();
  };
  return (
    <div id={id} className="rounded-3xl border-slate-300 border-2 border-opacity-80 w-36 flex flex-col justify-around items-center my-0 mx-auto p-2">
      <img
        src={img}
        alt="imagen de producto"
        className="h-28"
      ></img>
      <div className="text-center">
        <h1 className="text-slate-700 font-bold opacity-90 text-center text-xs">
          {nombre}
        </h1>
        <span className="text-slate-500 text-xs">Medidas: {medidas}</span>
        <div className="flex justify-evenly w-full items-center my-1">
          <p className="font-bold">AR$ {precio}</p>
          <FontAwesomeIcon
            icon={solid("square-plus")}
            className="text-2xl text-cyan-900 ml-2"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}
