import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid} from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Header() {
  return (
    <header>
        <FontAwesomeIcon icon={solid('angle-left')} className="absolute top-5 left-0 p-5 m-4 text-xl" />
        <FontAwesomeIcon icon={solid('cart-shopping')} className="absolute top-5 right-0 p-5 m-4 text-xl text-green-500" />
        <h1 className='text-center text-5xl py-8'>Store Cita</h1>
    </header>
  )
}
