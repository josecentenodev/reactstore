import React from 'react'
import ItemCarrito from '../components/ItemCarrito'

export default function Carrito() {
  return (
    <>
    <div className='container'>
        <div className='flex flex-col rounded-lg border border-violet-900 p-5'>
          <ItemCarrito></ItemCarrito>
          <ItemCarrito></ItemCarrito>
          <ItemCarrito></ItemCarrito>
          <ItemCarrito></ItemCarrito>
        </div>
    </div>

    <div className='text-right text-slate-700 font-bold text-xl mr-10 mt-2'>
        <p className='font-semibold'>Total a Pagar: </p>
        <p> AR$ 5000</p>
    </div>
    </>
  )
}
