import React, {useContext, useEffect} from "react";
import Context from "../context/AppContext";
import Item from "../components/Item";

export default function Home() {
  useEffect(()=>{
    listarProductos()
  },[])
  const {listarProductos, productos} = useContext(Context)
  return (
    <div className="container">
      <div className="items__container">
        {productos.map((producto)=>(
          <Item {...producto} key={producto.id} />
        ))}
      </div>
    </div>
  );
}
