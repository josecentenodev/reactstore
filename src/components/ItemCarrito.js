import React from "react";

export default function ItemCarrito() {
  return (
    <>
      <div className="flex mb-3 items-end">
        <div className="grow-0">
          <img
            src="https://www.hola.com/imagenes/estar-bien/20200813173512/raza-de-gato-mas-virales/0-855-425/feo-z.jpg"
            alt="imagen de item"
            className="w-24 rounded-3xl"
          ></img>
        </div>
        <div className="border-b border-indigo-600 w-6/12 ml-5">
          <h3 className='text-xl'>Gato Loco</h3>
          <p className='text-xl font-bold p-1 mb-3'>AR$ 1000</p>
        </div>
      </div>
    </>
  );
}
