import React from 'react'
import { Gasto } from './Gasto'


export const ListadoGastos = ({gastos, gastoEditar, setGastoEditar}) => {
  return (
    <div className='listado-gastos contenedor'>
        <h2>{gastos.length ? 'Gastos' : 'No hay gastos aun'}</h2>

        {gastos.map(gasto => (
            <Gasto
                setGastoEditar={setGastoEditar} 
                gastoEditar={gastoEditar}
                key={gasto.id}
                gasto={gasto}
            />
        ))}
    </div>
  )
}
