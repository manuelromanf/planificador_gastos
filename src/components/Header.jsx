import { ControlPresupuesto } from "./ControlPresupuesto"
import { NuevoPresupuesto } from "./NuevoPresupuesto"




export const Header = ({
    presupuesto, 
    setPresupuesto, 
    isValidPresupuesto, 
    setIsValidPresupuesto
}) => {
  return (
    <header>
        <h1>planificador de gastos</h1>

        {isValidPresupuesto ? (
            <ControlPresupuesto 
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
