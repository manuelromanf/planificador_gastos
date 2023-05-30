import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Modal } from './components/Modal'
import { generarId } from './helpers'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import { ListadoGastos } from './components/ListadoGastos'
import { Filtros } from './components/Filtros'


function App() {

  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
  )

  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
  )
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const [gastoEditar, setGastoEditar] = useState({})

  const [filtros, setFiltros] = useState('')
  const [gastosFiltrados, setGastosFiltrados] = useState([])

  useEffect(() => {
    if(filtros){
      // Filtrar gastos por categoria
      const gastosFiltrados = gastos.filter( gasto => gasto.categoria === filtros)
      setGastosFiltrados(gastosFiltrados)
    }
  }, [filtros])

  useEffect(() => {
    if( Object.keys(gastoEditar).length > 0 ){
      setModal(true)

  
      setTimeout(() => {
        setAnimarModal(true)
      }, 500)
    }
  }, [gastoEditar])

  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0)
  }, [presupuesto])

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? []);
  }, [gastos])

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0
    
    if(presupuestoLS > 0){
      setIsValidPresupuesto(true)
    }
  }, [])


  const handelNuevoGasto = () => {
    setModal(true)
    setGastoEditar({})

    setTimeout(() => {
      setAnimarModal(true)
    }, 500)
  }

  const eliminarGasto = id => {
    const gastosActualizados = gastos.filter( gasto => gasto.id !== id)

    setGastos(gastosActualizados);
  }

  const guardarGasto = gasto => {

    if(gasto.id){
      //actualizar
      const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastosActualizados);
      setGastoEditar({})
    } else{
      //nuevo gasto
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto])
    }

    setAnimarModal(false)
    setTimeout(() =>{
        setModal(false)
    }, 500 )

  }

  return (
    <div className={modal ? 'fijar' : ''}> 
      <Header
        gastos={gastos}
        setGastos={setGastos}
        presupuesto={presupuesto} 
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
      {isValidPresupuesto && (
          <>
              <main>  
                <Filtros 
                  filtros={filtros}
                  setFiltros={setFiltros}
                />
                <ListadoGastos
                gastos={gastos}      
                setGastoEditar={setGastoEditar}
                eliminarGasto={eliminarGasto}
                filtros={filtros}
                gastosFiltrados={gastosFiltrados}
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
        setGastoEditar={setGastoEditar}
        gastoEditar={gastoEditar}
        setModal={setModal}
        animarModal={animarModal}
        setAnimarModal={setAnimarModal}
        guardarGasto={guardarGasto}
      /> }


    </div>
  )
}

export default App
