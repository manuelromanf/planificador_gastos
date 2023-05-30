import { useEffect, useState } from "react"


export const Filtros = ({filtros, setFiltros}) => {
  return (
    <div className="filtros sombra contenedor">
        <form action="">
            <div className="campo">
                <label htmlFor="">Filtrar Campos</label>
                <select
                    value={filtros}
                    onChange={(e) => setFiltros(e.target.value)}
                >
                    <option value="">-- Todas las categorias --</option>
                    <option value="ahorro"> Ahorro </option>
                    <option value="comida"> Comida </option>
                    <option value="casa"> Casa </option>
                    <option value="gastos"> Gastos </option>
                    <option value="ocio"> Ocio </option>
                    <option value="salud"> Salud </option>
                    <option value="suscripciones"> Suscripciones </option>
                </select>
            </div>
        </form>
    </div>
  )
}
