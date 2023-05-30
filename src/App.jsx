import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Modal } from './components/Modal'
import { generarId } from './helpers'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import { ListadoGastos } from './components/ListadoGastos'
import { object } from 'prop-types'


function App() {

  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const [gastos, setGastos] = useState([])

  const [gastoEditar, setGastoEditar] = useState({})

  useEffect(() => {
    if( Object.keys(gastoEditar).length > 0 ){
      handelNuevoGasto()
    }
  }, [gastoEditar])

  const handelNuevoGasto = () => {
    setModal(true)

    setTimeout(() => {
      setAnimarModal(true)
    }, 500)
  }

  const guardarGasto = gasto => {
    gasto.id = generarId();
    gasto.fecha = Date.now();
    setGastos([...gastos, gasto])

    setAnimarModal(false)
    setTimeout(() =>{
        setModal(false)
    }, 500 )

  }

  return (
    <div className={modal ? 'fijar' : ''}> 
      <Header
      gastos={gastos}
        presupuesto={presupuesto} 
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
      {isValidPresupuesto && (
          <>
              <main>  
                <ListadoGastos
                setGastoEditar={setGastoEditar}
                gastoEditar={gastoEditar}
                gastos={gastos}             
                />
              </main>

              <div className='nuevo-gasto' >
              <img 
              src={IconoNuevoGasto} 
              alt="icono nuevo gasto" 
              onClick={handelNuevoGasto}
              />
            </div>
          </>
      )}

      {modal && <Modal 
        setModal={setModal}
        animarModal={animarModal}
        setAnimarModal={setAnimarModal}
        guardarGasto={guardarGasto}
      /> }


    </div>
  )
}

export default App
