const LISTAR_PRODUCTOS = "LISTAR_PRODUCTOS";
const AGREGAR_CARRITO = "AGREGAR_CARRITO";
const ELIMINAR_CARRITO = "ELIMINAR_CARRITO";

export default function Reducer(state, action) {
  const { payload, type } = action;
  switch (type) {
      case LISTAR_PRODUCTOS:
          return {...state, productos: payload}
  }
}
