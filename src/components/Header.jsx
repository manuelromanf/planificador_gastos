import { ControlPresupuesto } from "./ControlPresupuesto"
import { NuevoPresupuesto } from "./NuevoPresupuesto"




export const Header = ({
    presupuesto, 
    setPresupuesto, 
    isValidPresupuesto, 
    setIsValidPresupuesto,
    gastos
}) => {
  return (
    <header>
        <h1>planificador de gastos</h1>

        {isValidPresupuesto ? (
            <ControlPresupuesto 
            gastos={gastos}
            presupuesto={presupuesto}
            />
        ) : (
            <NuevoPresupuesto
            presupuesto={presupuesto} 
            setPresupuesto={setPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
        />
    )}

    </header>
  )
}
