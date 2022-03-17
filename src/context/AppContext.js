import axios from 'axios'
import React, {useReducer} from 'react'
import Reducer from './Reducer'

const Context = React.createContext({})

export function AppContext({children}) {
    const initialState = {
        productos: [],
        carrito: []
    }
    const [state, dispatch] = useReducer(Reducer, initialState)
    const listarProductos = async () => {
        const res = await axios.get('https://devrockstore-default-rtdb.firebaseio.com/productos.json')
        dispatch({type: 'LISTAR_PRODUCTOS', payload: res.data})
    }
    const agregarCarrito = () => {
        console.log('producto agregado al carrito')
    }
    const eliminarCarrito = () => {
        console.log('producto eliminado')
    }

    return <Context.Provider value={{productos: state.productos, carrito: state.carrito, listarProductos, agregarCarrito, eliminarCarrito}}>{children}</Context.Provider>
}

export default Context


