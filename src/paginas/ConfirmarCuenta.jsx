import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Alerta } from "../components/Alerta";
import clienteAxios from "../config/axios";


const ConfirmarCuenta = () => {
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false)
  const [cargando, setCargando] = useState(true)
  const [alerta, setAlerta] = useState({})

    const params = useParams()
    const { id } = params 

    useEffect(() => {
      const confirmarCuenta = async () => {
        try {

          const url = `/veterinarios/confirmar/${id}`
          const { data } = await clienteAxios(url)
          setCuentaConfirmada(true)
          setAlerta({
            msg: data.msg
          })

        } catch (error) {
          setAlerta({
            msg: error.response.data.msg,
            error: true
          })
        }
        
        setCargando(false)
      }
      confirmarCuenta();
    }, [])

    return (
      <>
        <div>
              <h1 className="text-blue-600 font-black text-6xl">confirma tu cuenta y comienza a Administrar  {""}<span className="text-black">tus Pacientes</span></h1>
          </div>
          <div className="mt-20 md:mt-5 shadow-lg px-9 py-9 rounded-lg bg-white">
            {!cargando &&
             <Alerta 
              alerta={alerta}
            />}

            {cuentaConfirmada && (
              <Link 
              className="block text-center my-5 text-blue-700"
              to="/">Inicia sesion</Link>
            )}
        </div>
      </>
    )
}

export default ConfirmarCuenta